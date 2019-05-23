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
          if(item && item.attributes && item.attributes.divider) {
            return <li role="separator" {...extractClass(item, 'mdc-list-divider', {
              'mdc-list-divider--padded': (item.attributes && item.attributes.padded),
              'mdc-list-divider--inset': (item.attributes && item.attributes.inset)
            })}></li>
          } else if(item) {
            listOne.push(item)
            return <li {...extractClass(item, 'mdc-list-item', {
              'mdc-list-item--disabled': (item.attributes && item.attributes.disabled),
              'mdc-list-item--selected': (item.attributes && item.attributes.selected),
              'mdc-list-item--activated': (item.attributes && item.attributes.activated)
            })} tabindex="0">
              {console.log(item.attributes['graphic'])}
              {item.attributes && item.attributes.graphic &&
              <span class="mdc-list-item__graphic">
                {typeof item.attributes.graphic === 'string' ? htmlToVdom(item.attributes.graphic) : item.attributes.graphic}
              </span>}
              <div style='display:none'>
                {(item.attributes && item.attributes['primary-text']) && (item.attributes.primaryText = item.attributes['primary-text'])}
                {(item.attributes && item.attributes['secondary-text']) && (item.attributes.secondaryText = item.attributes['secondary-text'])}
              </div>
              {item.attributes && (item.attributes.text || item.attributes.primaryText || item.attributes.secondaryText) &&
              <span class="mdc-list-item__text">
                {item.attributes.primaryText && <span class="mdc-list-item__primary-text">{item.attributes.primaryText}</span>}
                {item.attributes.secondaryText && <span class="mdc-list-item__secondary-text">{item.attributes.secondaryText}</span>}
                {item.attributes.text}
              </span>}
              {item.attributes && item.attributes.meta &&
              <span class="mdc-list-item__meta">
                {typeof item.attributes.meta === 'string' ? htmlToVdom(item.attributes.meta) : item.attributes.meta}
              </span>}
              {typeof item.children === 'string' ? htmlToVdom(item.children) : item.children}
            </li>
          }
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
                  if(item && item.attributes && item.attributes.divider) {
                    return <li role="separator" {...extractClass(item, 'mdc-list-divider', {
                      'mdc-list-divider--padded': (item.attributes && item.attributes.padded),
                      'mdc-list-divider--inset': (item.attributes && item.attributes.inset)
                    })}></li>
                  } else if(item) {
                    listOne.push(item)
                    return <li {...extractClass(item, 'mdc-list-item', {
                      'mdc-list-item--disabled': (item.attributes && item.attributes.disabled),
                      'mdc-list-item--selected': (item.attributes && item.attributes.selected),
                      'mdc-list-item--activated': (item.attributes && item.attributes.activated)
                    })} tabindex="0">
                      {item.attributes && item.attributes.graphic &&
                      <span class="mdc-list-item__graphic">
                        {typeof item.attributes.graphic === 'string' ? htmlToVdom(item.attributes.graphic) : item.attributes.graphic}
                      </span>}
                      <div style='display:none'>
                        {(item.attributes && item.attributes['primary-text']) && (item.attributes.primaryText = item.attributes['primary-text'])}
                        {(item.attributes && item.attributes['secondary-text']) && (item.attributes.secondaryText = item.attributes['secondary-text'])}
                      </div>
                      {item.attributes && (item.attributes.text || item.attributes.primaryText || item.attributes.secondaryText) &&
                      <span class="mdc-list-item__text">
                        {item.attributes.primaryText && <span class="mdc-list-item__primary-text">{item.attributes.primaryText}</span>}
                        {item.attributes.secondaryText && <span class="mdc-list-item__secondary-text">{item.attributes.secondaryText}</span>}
                        {item.attributes.text}
                      </span>}
                      {item.attributes && item.attributes.meta &&
                      <span class="mdc-list-item__meta">
                        {typeof item.attributes.meta === 'string' ? htmlToVdom(item.attributes.meta) : item.attributes.meta}
                      </span>}
                      {typeof item.children === 'string' ? htmlToVdom(item.children) : item.children}
                    </li>
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
