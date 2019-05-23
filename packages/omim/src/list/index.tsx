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
  subheader?: boolean,
  disabled?: boolean,
  dense?: boolean,
  avatar?: boolean,
  twoLine?: boolean
}

interface Data {

}

@tag('m-list')
export default class Switch extends WeElement<Props, Data>{
  static css = theme() + css

  static propTypes = {
    group: Boolean,
    subheader: Boolean,
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
  
  // installed() {
  //   const lists = this.shadowRoot.querySelectorAll('.mdc-list')
  //   console.log(lists)
  //   lists.forEach((list, index) => {
  //     const listControl = new MDCList(list)
  //     listControl.listElements.map((listItemEl) => new MDCRipple(listItemEl))
  //     listControl.listen('MDCList:action', (evt: any) => {
  //       this.fire('change', this.listAll[index][evt.detail.index])
  //     })
  //   })
  // }

  renderList(node) {
    const { attributes: props } = node
    if(node && node.attributes && node.attributes.divider) {
      return <li role="separator" {...extractClass(node, 'mdc-list-divider', {
        'mdc-list-divider--padded': (node.attributes && node.attributes.padded),
        'mdc-list-divider--inset': (node.attributes && node.attributes.inset)
      })}></li>
    } else if(node) {
      return <li {...extractClass(node, 'mdc-list-item', {
        'mdc-list-item--disabled': (node.attributes && node.attributes.disabled),
        'mdc-list-item--selected': (node.attributes && node.attributes.selected),
        'mdc-list-item--activated': (node.attributes && node.attributes.activated)
      })} tabindex="0">
        {node.attributes && console.log(node.attributes['graphic'])}
        {node.attributes && node.attributes.graphic &&
        <span class="mdc-list-item__graphic">
          {typeof node.attributes.graphic === 'string' ? htmlToVdom(node.attributes.graphic) : node.attributes.graphic}
        </span>}
        <div style='display:none'>
          {(node.attributes && node.attributes['primary-text']) && (node.attributes.primaryText = node.attributes['primary-text'])}
          {(node.attributes && node.attributes['secondary-text']) && (node.attributes.secondaryText = node.attributes['secondary-text'])}
        </div>
        {node.attributes && (node.attributes.text || node.attributes.primaryText || node.attributes.secondaryText) &&
        <span class="mdc-list-item__text">
          {node.attributes.primaryText && <span class="mdc-list-item__primary-text">{node.attributes.primaryText}</span>}
          {node.attributes.secondaryText && <span class="mdc-list-item__secondary-text">{node.attributes.secondaryText}</span>}
          {node.attributes.text}
        </span>}
        {node.attributes && node.attributes.meta &&
        <span class="mdc-list-item__meta">
          {typeof node.attributes.meta === 'string' ? htmlToVdom(node.attributes.meta) : node.attributes.meta}
        </span>}
        {typeof node.children === 'string' ? htmlToVdom(node.children) : node.children}
      </li>
    }
  }
  
  render(props) {
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
          if(item && item.attributes && !item.attributes.divider) {
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
            return [
              (list.attributes && list.attributes.subheader && <h3 class="mdc-list-group__subheader">{list.attributes.subheader}</h3>),
              <ul {...extractClass(list, 'mdc-list', {
                'mdc-list--non-interactive': list.attributes && list.attributes.disabled,
                'mdc-list--dense': list.attributes && list.attributes.dense,
                'mdc-list--avatar-list': list.attributes && list.attributes.avatar,
                'mdc-list--two-line': list.attributes && list.attributes.twoLine
              })}>
                {list.children && list.children.map((item) => {
                  if(item && item.attributes && !item.attributes.divider) {
                    listOne.push(item)
                  }
                  return this.renderList(item)
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
