import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
//@ts-ignore
import '../theme.ts'

interface Props {
  checkbox?: boolean,
  node: object
}

interface Data {

}


@tag('m-tree')
export default class Tree extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    checkbox: Boolean,
    node: Object
  }

  _preSelected = null

  toggle = (id, open) => {
    this.fire('toggle', { id, open })
  }

  _check = (node, state) => {
    if (node.disabled) return
    this.fire('check', { id: node.id, checked: !node.checked, state: state })
  }

  onNodeClick = (id) => {
    this.fire('nodeClick', { id, pre: this._preSelected })
  }

  renderNode(node) {
    if (node.selected) {
      this._preSelected = node.id
    }
    let state
    if (this.props.checkbox && node.children && node.children.length > 0) {
      state = this._isChecked(node, { checked: 0, unchecked: 0 }, true)
    }
    return <ul>
      <li class={classNames('tree-item', {
        'close': node.close
      })}>
        {node.children && node.children.length > 0 && <svg onClick={_ => this.toggle(node.id, !node.close)} viewBox="0 0 1024 1024"
          class="arrow" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
        </svg>}
        {this.props.checkbox && <span onClick={_ => this._check(node, state)} class={classNames('mdc-tree-checkbox', {
          'mdc-tree-checkbox-disabled': node.disabled,
          'mdc-tree-checkbox-checked': (node.children && node.children.length > 0) ? state === 'checked' : node.checked,
          'mdc-tree-checkbox-indeterminate': (node.children && node.children.length > 0) ? state === 'indeterminate' : false
        })}><span class="mdc-tree-checkbox-inner"></span></span>}
        <span onClick={_ => this.onNodeClick(node.id)} class={classNames('mdc-tree-title', {
          'selected': node.selected
        })}>{node.icon && <i class='material-icons'>{node.icon}</i>}<span class='text'>{node.title}</span></span>

        <div class='children' style={`height: ${node.close ? 0 : (node.children ? (this._getChildCount(node)) * 32 : 0)}px;`}> {node.children && node.children.length > 0 && node.children.map(_ => this.renderNode(_))}</div>
      </li>
    </ul>
  }

  _isChecked(node, obj, tag) {

    if (!node.children) return
    for (let i = 0, len = node.children.length; i < len; i++) {
      let child = node.children[i]
      if (child.children && child.children.length === 0 || !child.children) {

        if (!child.disabled) {
          if (child.checked) {
            obj.checked++
          } else {
            obj.unchecked++
          }
        }
      }
      if (obj.unchecked && obj.checked) {
        break
      }
      this._isChecked(child, obj, false)
    }

    if (tag) {
      if (obj.unchecked && obj.checked) {

        return 'indeterminate'
      }
      if (obj.unchecked === 0) return 'checked'

      return 'unchecked'
    }

  }

  _getChildCount(node) {
    let count = 0
    if (node.children && !node.close) {
      count += node.children.length
      node.children.forEach(child => {
        count += this._getChildCount(child)
      })
    }

    return count

  }

  render(props) {
    return this.renderNode(props.node)
  }
}
