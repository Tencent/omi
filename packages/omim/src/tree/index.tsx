import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  path?: string,
  paths?: object,
  view?: number,
  scale?: number,
  color?: string,
  rotate?: boolean
}

interface Data {

}


@tag('m-tree')
export default class Tree extends WeElement<Props, Data>{
  static css = theme() + css

  static defaultProps = {
    view: 1024,
    scale: 2
  }

  static propTypes = {
    path: String,
    paths: Object,
    view: Number,
    scale: Number,
    color: String,
    rotate: Boolean
  }

  toggle = (id) => {
    this.fire('toggle', id)
  }

  renderNode(node) {
    return <ul>
      <li class={classNames('tree-item', {
        'close': node.close
      })}>
        {node.children && node.children.length > 0 && <svg onClick={_ => this.toggle(node.id)} viewBox="0 0 1024 1024"
          class="arrow close" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
        </svg>}
        <span class='mdc-tree-title'>{node.title}</span>

        <div class='children' style={`height: ${node.close ? 0 : (node.children ? (this._getChildCount(node)) * 30 : 0)}px;`}> {node.children && node.children.length > 0 && node.children.map(_ => this.renderNode(_))}</div>
      </li>
    </ul>
  }

  _getChildCount(node) {
    let count = 0
    if (node.children) {
      count += node.children.length
      node.children.forEach(child => {
        count += this._getChildCount(child)
      })
    }

    return count

  }
  render(props) {

    return this.renderNode(props.node)
    return (

      //@ts-ignore
      <ul class="mdc-tree mdc-tree-directory" role="tree" unselectable="on">
        <li class="mdc-tree-treenode-switcher-close" role="treeitem"><span class="mdc-tree-switcher mdc-tree-switcher_close"><i
          aria-label="icon: caret-down" class="anticon anticon-caret-down mdc-tree-switcher-icon"><svg viewBox="0 0 1024 1024"
            class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
          </svg></i></span><span class="mdc-tree-checkbox"><span class="mdc-tree-checkbox-inner"></span></span><span
            title="parent 0" class="mdc-tree-node-content-wrapper mdc-tree-node-content-wrapper-close"><span class="mdc-tree-iconEle mdc-tree-icon__customize"><i
              aria-label="icon: folder" class="anticon anticon-folder"><svg viewBox="64 64 896 896" class="" data-icon="folder"
                width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"></path>
              </svg></i></span><span class="mdc-tree-title">parent 0</span></span>
        </li>
        <li class="mdc-tree-treenode-switcher-open mdc-tree-treenode-checkbox-checked" role="treeitem"><span class="mdc-tree-switcher mdc-tree-switcher_open"><i
          aria-label="icon: caret-down" class="anticon anticon-caret-down mdc-tree-switcher-icon"><svg viewBox="0 0 1024 1024"
            class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
          </svg></i></span><span class="mdc-tree-checkbox mdc-tree-checkbox-checked"><span class="mdc-tree-checkbox-inner"></span></span><span
            title="parent 1" class="mdc-tree-node-content-wrapper mdc-tree-node-content-wrapper-open"><span class="mdc-tree-iconEle mdc-tree-icon__customize"><i
              aria-label="icon: folder-open" class="anticon anticon-folder-open"><svg viewBox="64 64 896 896" class=""
                data-icon="folder-open" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"></path>
              </svg></i></span><span class="mdc-tree-title">parent 1</span></span>
          <ul class="mdc-tree-child-tree mdc-tree-child-tree-open" data-expanded="true" role="group" style="">
            <li class="mdc-tree-treenode-checkbox-checked" role="treeitem"><span class="mdc-tree-switcher mdc-tree-switcher-noop"></span><span
              class="mdc-tree-checkbox mdc-tree-checkbox-checked"><span class="mdc-tree-checkbox-inner"></span></span><span
                title="leaf 1-0" class="mdc-tree-node-content-wrapper mdc-tree-node-content-wrapper-normal"><span class="mdc-tree-iconEle mdc-tree-icon__customize"><i
                  aria-label="icon: file" class="anticon anticon-file"><svg viewBox="64 64 896 896" class="" data-icon="file"
                    width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z"></path>
                  </svg></i></span><span class="mdc-tree-title">leaf 1-0</span></span></li>
            <li class="mdc-tree-treenode-checkbox-checked" role="treeitem"><span class="mdc-tree-switcher mdc-tree-switcher-noop"></span><span
              class="mdc-tree-checkbox mdc-tree-checkbox-checked"><span class="mdc-tree-checkbox-inner"></span></span><span
                title="leaf 1-1" class="mdc-tree-node-content-wrapper mdc-tree-node-content-wrapper-normal"><span class="mdc-tree-iconEle mdc-tree-icon__customize"><i
                  aria-label="icon: file" class="anticon anticon-file"><svg viewBox="64 64 896 896" class="" data-icon="file"
                    width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z"></path>
                  </svg></i></span><span class="mdc-tree-title">leaf 1-1</span></span></li>
          </ul>
        </li>
      </ul>
    )
  }
}
