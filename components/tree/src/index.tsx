import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  data?: object
}



@tag('o-tree')
export default class Tree extends WeElement<Props>{
  static css = css

  static propTypes = {
    data: Object
  }

  onNodeClick = (evt, node) => {
    evt.stopPropagation()
    node.expanded = !node.expanded
    if (this.prevSelectedNode) {
      this.prevSelectedNode.selected = false
    }
    node.selected = true
    this.forceUpdate()
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

  renderNode(node, level) {
    if (node.selected) {
      this.prevSelectedNode = node
    }
    this._tempTagName = 'o-icon-' + node.icon
    return <div role="treeitem" onContextMenu={(evt) => { this.onContextMenu(evt, node) }} onClick={(evt) => { this.onNodeClick(evt, node) }}
      {...extractClass({}, 'o-tree-node', {
        'is-expanded': node.expanded,
        'is-current': node.selected
      })}>
      <div class="o-tree-node__content" style={`padding-left: ${level * 18}px;`}>
        {(node.children && node.children.length > 0) ? <svg onClick={_ => this.onNodeArrowClick(node)} viewBox="0 0 1024 1024" {...extractClass({}, 'o-tree-node__expand-icon', {
          'expanded': node.expanded,
        })} data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
        </svg> : <span class="is-leaf o-tree-node__expand-icon"></span>}
        <span style={node.color && { color: node.color }} class="o-tree-node__label">{node.icon && <this._tempTagName />}{node.label}</span>
      </div>
      {node.expanded && node.children && node.children.length > 0 && <div role="group" class="o-tree-node__children" style="" aria-expanded="true" data-old-padding-top="" data-old-padding-bottom="" data-old-overflow="">
        {node.children.map(child => {
          return this.renderNode(child, level + 1)
        })}
      </div>}
      {
        node.actionIcons &&
        <div class="action-icons">
          {node.actionIcons.map(actionIcon => {
            this._tempTagName = 'o-icon-' + actionIcon
            return <this._tempTagName onclick={_ => this.onActionIcon(_, actionIcon)} class="action-icon" />
          })}
        </div>

      }
      {node.sign && <span style={node.color && { color: node.color }} class="sign">{node.sign}</span>}
    </div>
  }

  render(props) {

    return (
      <div role="tree" class="o-tree">
        {props.data.map(node => {
          return this.renderNode(node, 0)
        })}
      </div>
    )
  }
}
