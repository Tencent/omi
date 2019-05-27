import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';

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
  
  install() {
		document.addEventListener('DOMContentLoaded', () => {
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

  renderList(node) {
    if(!node) {
      return null
    }
    const { attributes: props } = node
    const graphic = this.findElement(node.children, 'graphic')
    const metas = this.findElement(node.children, 'metas')
    // console.log(metas)
    {(props && props['primary-text']) && (props.primaryText = props['primary-text'])}
    {(props && props['secondary-text']) && (props.secondaryText = props['secondary-text'])}
    if(props && props.divider) {
      return <li role="separator" {...extractClass(node, 'mdc-list-divider', {
        'mdc-list-divider--padded': (props && props.padded),
        'mdc-list-divider--inset': (props && props.inset)
      })}></li>
    } else {
      return <li {...extractClass(node, 'mdc-list-item', {
        'mdc-list-item--disabled': (props && props.disabled),
        'mdc-list-item--selected': (props && props.selected),
        'mdc-list-item--activated': (props && props.activated)
      })} tabindex="0">
        {props && (props.graphic || graphic) &&
        <span class="mdc-list-item__graphic">
          {typeof props.graphic === 'string' ? htmlToVdom(props.graphic) : props.graphic}
          {typeof graphic === 'string'  ? htmlToVdom(graphic) : graphic}
        </span>}
        {props && (props.text || props.primaryText || props.secondaryText) &&
        <span class="mdc-list-item__text">
          {props.primaryText && <span class="mdc-list-item__primary-text">{props.primaryText}</span>}
          {props.secondaryText && <span class="mdc-list-item__secondary-text">{props.secondaryText}</span>}
          {props.text}
        </span>}
        {props && (props.meta || metas) &&
        <span class="mdc-list-item__meta">
          {typeof props.meta === 'string' ? htmlToVdom(props.meta) : props.meta}
          {typeof metas === 'string'  ? htmlToVdom(metas) : metas}
        </span>}
        {node.children.map((node) => {
            return node && (!(node.nodeName === 'graphic' || node.nodeName === 'metas')) && (typeof node === 'string' ? htmlToVdom(node) : node)
        })}
      </li>
    }
  }

  groupNum = -1
  groupHeight = new Object()

  onGroup = (evt) => {
    let groupNo = null
    let mList = null
    for(let i = 0; i < evt.path.length; i++) {
      if(evt.path[i].id === 'subheader') {
        mList = evt.path[i].nextElementSibling
        console.log(evt.path[i])
        groupNo = evt.path[i].accessKey
        if(typeof this.groupHeight[groupNo] === 'undefined') {
          this.groupHeight[groupNo] = mList.clientHeight
        }
        break;
      }
    }
    if(mList) {
      let height = mList.clientHeight
      if(height != 0) {
        const time = setInterval(() => {
          height -= 20
          height < 0 && (height = 0)
          mList.style.height = height+'px'
          height === 0 && clearInterval(time)
        }, 10);
      } else {
        const time = setInterval(() => {
          height += 20
          height > this.groupHeight[groupNo] && (height = this.groupHeight[groupNo])
          mList.style.height = height+'px'
          height === this.groupHeight[groupNo] && clearInterval(time)
        }, 10);
      }
    }
  }
  
  render(props) {
    this.listAll = []
    props.children = (this.innerHTML && !props.children) ? htmlToVdom(this.innerHTML) : props.children
    if(!props.group) {
      const listOne = new Array()
      return <ul {...extractClass(props, 'mdc-list', {
        'mdc-list--non-interactive': props.disabled,
        'mdc-list--dense': props.dense,
        'mdc-list--avatar-list': props.avatar,
        'mdc-list--two-line': props.twoLine
      })}>
        {props.children && props.children.map((item) => {
          if((item && item.attributes && !item.attributes.divider) || (item && !item.attributes)) {
            listOne.push(item)
          }
          return this.renderList(item)
        })}
        <div style='display:none'>{this.listAll.push(listOne)}</div>
      </ul>
    } else {
      return <div class='mdc-list-group'>
        {props.children && props.children.map((list) => {
          if(list && list.nodeName === 'm-list') {
            const listOne = new Array()
            this.groupNum += 1
            const subheader = this.findElement(list.children, 'subheader')
            return [
              (list.attributes && (list.attributes.subheader || subheader) &&
              <h3 id='subheader' accessKey={this.groupNum.toString()} class='mdc-list-group__subheader' onClick={this.onGroup}>
                {typeof list.attributes.subheader === 'string' ? htmlToVdom(list.attributes.subheader) : list.attributes.subheader}
                {typeof subheader === 'string' ? htmlToVdom(subheader) : subheader}
              </h3>),
              <ul {...extractClass(list, 'mdc-list', {
                'mdc-list--non-interactive': list.attributes && list.attributes.disabled,
                'mdc-list--dense': list.attributes && list.attributes.dense,
                'mdc-list--avatar-list': list.attributes && list.attributes.avatar,
                'mdc-list--two-line': list.attributes && list.attributes.twoLine
              })}>
                {list.children && list.children.map((item) => {
                  if(item.nodeName !== 'subheader') {
                    if((item && item.attributes && !item.attributes.divider) || (item && !item.attributes)) {
                      listOne.push(item)
                    }
                    return this.renderList(item)
                  }
                })}
                <div style='display:none'>{this.listAll.push(listOne)}</div>
              </ul>
            ]
          }
        })}
      </div>
    }
  }
}
