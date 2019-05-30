import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';
import { domReady } from '../util/dom-ready'
// @ts-ignore
import { htmlToVdom } from '../util.ts'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  group?: boolean,
  disabled?: boolean,
  dense?: boolean,
  avatar?: boolean,
  twoLine?: boolean
}

interface Data {

}

@tag('m-list')
export default class List extends WeElement<Props, Data>{
  static css = theme() + css

  static resetTheme() {
    this.css = theme() + css
  }
  
  static propTypes = {
    group: Boolean,
    disabled: Boolean,
    dense: Boolean,
    avatar: Boolean,
    twoLine: Boolean
  }

  static defaultProps = {

  }

  listAll = new Array()
  
  installed() {
		domReady(() => {
			//update first
			this.update()
			//init mdc list
      const lists = this.shadowRoot.querySelectorAll('.mdc-list')
      lists.forEach((list, index) => {
        const listControl = new MDCList(list)
        listControl.listElements.map((listItemEl) => new MDCRipple(listItemEl))
        listControl.listen('MDCList:action', (evt: any) => {
          if(this.listAll[index][evt.detail.index]) {
            this.fire('change', this.listAll[index][evt.detail.index])
          } else {
            this.fire('change', this.listAll[index+1][evt.detail.index])
          }
        })
      })
    })
  }

  /**
   * Find the specified element name node (if there is a duplicate name node, only the first one is returned)
   * 查找指定元素名节点(如果有重复名称节点，只返回第一个)
   * @param nodes All nodes to be found (待查找的所有节点)
   * @param str Specify the node name (指定节点名称)
   */
  findElement(nodes, str) {
    for(let i = 0; i < nodes.length; i++) {
      if(nodes[i] && nodes[i].nodeName === str) {
        return nodes[i]
      }
    }
    return null
  }

  render(props) {
    
    return <ul class="mdc-list">
    <li class="mdc-list-item" tabindex="0">
      <span class="mdc-list-item__text">Single-line item</span>
    </li>
    <li class="mdc-list-item">
      <span class="mdc-list-item__text">Single-line item</span>
    </li>
    <li class="mdc-list-item">
      <span class="mdc-list-item__text">Single-line item</span>
    </li>
  </ul>
  }
}
