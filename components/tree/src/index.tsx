import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  data?: any[]
  padding: number,
  nodeHeight: number
}

@tag('o-tree')
export default class Tree extends WeElement<Props> {
  static css = css

  static defaultProps = {
    padding: 10,
    nodeHeight: 26
  }

  static propTypes = {
    data: Array,
    padding: Number,
    nodeHeight: Number
  }

  onNodeClick = (node) => {
    node.expanded = !node.expanded
    if (this.prevSelectedNode) {
      this.prevSelectedNode.selected = false
    }
    // if (this.prevBlurSelectedNode) {
    //   this.prevBlurSelectedNode.selectedBlur = false
    // }
    node.selected = true
    this.update()
    this.fire('node-click', node)
  }

  _tempTagName: string
  prevSelectedNode

  onNodeArrowClick = (node) => {
    this.fire('node-arrow-click', node)
    this.fire('node-click', node)
  }

  onContextMenu = (evt, node) => {
    evt.stopPropagation()
    evt.preventDefault()
    this.fire('context-menu', {
      evt,
      node
    })
  }

  onActionIcon = (evt, icon) => {
    evt.stopPropagation()
    this.fire('action-icon-click', icon)
  }

  fold() {
    this.props.data.forEach((node) => {
      this._fold(node)
    })

    this.update()

    this.fire('fold')
  }

  _fold(node) {
    node.expanded = false
    if (node.children) {
      node.children.forEach((child) => {
        this._fold(child)
      })
    }
  }

  onEditInputBlur = () => {
    //这个if防止 enter 和这失去焦点冲突
    if (this.prevSelectedNode.editing) {
      this.prevSelectedNode.editing = false
      this.update()
    }
  }

  onEditInputChange = (evt) => {
    this.prevSelectedNode.label = evt.target.value
    this.update()
  }

  editInput
  prevBlurSelectedNode

  installed() {
    // window.addEventListener('click', (evt) => {
    //   this.prevSelectedNode.selected = false
    //   this.prevSelectedNode.selectedBlur = true
    //   this.prevBlurSelectedNode = this.prevSelectedNode
    //   this.prevSelectedNode = null
    //   this.update()
    // })
    // window.addEventListener('keydown', (evt) => {
    //   //enter
    //   if (evt.keyCode === 13) {
    //     if (this.prevSelectedNode) {
    //       if (this.prevSelectedNode.editing) {
    //         this.prevSelectedNode.editing = false
    //         this.prevSelectedNode.label = this.editInput.value
    //         //防止这个错误 Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is no longer a child of this node. Perhaps it was moved in a 'blur' event handler?
    //         this.editInput.blur()
    //         this.update()
    //       } else {
    //         this.prevSelectedNode.editing = true
    //         this.update()
    //         this.editInput.focus()
    //       }
    //     }
    //   }
    // })
  }

  _nodeTagName: string

  isURL(str) {
    return str.indexOf('http') === 0 || str.indexOf('//') === 0
  }

  renderNode(node, level) {
    if (node.selected) {
      this.prevSelectedNode = node
    }
    this._tempTagName = 'o-icon-' + node.icon
    this._nodeTagName = node.href ? 'a' : 'div'
    return (
      <this._nodeTagName
        href={node.href}
        target={node.target}
        role="treeitem"
        onContextMenu={(evt) => {
          this.onContextMenu(evt, node)
        }}
        onClick={(evt) => {
          evt.stopPropagation()
          if (!(node.href && this.isURL(node.href))) {
            this.onNodeClick(node)
          }
        }}
        {...extractClass({}, 'o-tree-node', {
          'is-expanded': node.expanded,
          'is-current': node.selected
          //'is-current-blur': node.selectedBlur
        })}
      >
        <div
          class="o-tree-node__content"
          style={{
            paddingLeft: `${level * this.props.padding}px`,
            height: `${this.props.nodeHeight}px`
          }}
        >
          {node.children && node.children.length > 0 ? (
            <svg
              onClick={(_) => this.onNodeArrowClick(node)}
              viewBox="0 0 1024 1024"
              {...extractClass({}, 'o-tree-node__expand-icon', {
                expanded: node.expanded
              })}
              data-icon="caret-down"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
            </svg>
          ) : (
            <span class="is-leaf o-tree-node__expand-icon"></span>
          )}
          <span
            style={node.color && { color: node.color }}
            {...extractClass({}, 'o-tree-node__label', {
              'is-editing': node.editing
            })}
          >
            {node.icon && <this._tempTagName />}
            {node.editing ? (
              <input
                value={node.label}
                onChange={this.onEditInputChange}
                onBlur={this.onEditInputBlur}
                ref={(_) => (this.editInput = _)}
                class="edit-input"
                onClick={(evt) => evt.stopPropagation()}
              />
            ) : (
              node.label
            )}
          </span>
        </div>
        {node.expanded && node.children && node.children.length > 0 && (
          <div
            role="group"
            class="o-tree-node__children"
            style=""
            aria-expanded="true"
            data-old-padding-top=""
            data-old-padding-bottom=""
            data-old-overflow=""
          >
            {node.children.map((child) => {
              return this.renderNode(child, level + 1)
            })}
          </div>
        )}
        {!node.editing && node.actionIcons && (
          <div class="action-icons">
            {node.actionIcons.map((actionIcon) => {
              this._tempTagName = 'o-icon-' + actionIcon
              return (
                <this._tempTagName
                  onclick={(_) => this.onActionIcon(_, actionIcon)}
                  class="action-icon"
                />
              )
            })}
          </div>
        )}
        {!node.editing && node.sign && (
          <span style={{ color: node.color, top: (this.props.nodeHeight - 26) / 2 + 5 }} class="sign">
            {node.sign}
          </span>
        )}
      </this._nodeTagName>
    )
  }

  render(props) {
    return (
      <div role="tree" class="o-tree">
        {props.data.map((node) => {
          return this.renderNode(node, 0)
        })}
      </div>
    )
  }
}
