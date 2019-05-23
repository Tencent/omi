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
    if(node && props && props.divider) {
      return <li role="separator" {...extractClass(node, 'mdc-list-divider', {
        'mdc-list-divider--padded': (props && props.padded),
        'mdc-list-divider--inset': (props && props.inset)
      })}></li>
    } else if(node) {
      return <li {...extractClass(node, 'mdc-list-item', {
        'mdc-list-item--disabled': (props && props.disabled),
        'mdc-list-item--selected': (props && props.selected),
        'mdc-list-item--activated': (props && props.activated)
      })} tabindex="0">
        {props && props.graphic &&
        <span class="mdc-list-item__graphic">
          {typeof props.graphic === 'string' ? htmlToVdom(props.graphic) : props.graphic}
        </span>}
        <div style='display:none'>
          {(props && props['primary-text']) && (props.primaryText = props['primary-text'])}
          {(props && props['secondary-text']) && (props.secondaryText = props['secondary-text'])}
        </div>
        {props && (props.text || props.primaryText || props.secondaryText) &&
        <span class="mdc-list-item__text">
          {props.primaryText && <span class="mdc-list-item__primary-text">{props.primaryText}</span>}
          {props.secondaryText && <span class="mdc-list-item__secondary-text">{props.secondaryText}</span>}
          {props.text}
        </span>}
        {props && props.meta &&
        <span class="mdc-list-item__meta">
          {typeof props.meta === 'string' ? htmlToVdom(props.meta) : props.meta}
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
