import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import {MDCTopAppBar} from '@material/top-app-bar'

import { elementChildren } from '../util/element-children'
import { domReady } from '../util/dom-ready'

//@ts-ignore
import '../theme.ts'

interface Props {
  heading?: string,
  short?: boolean,
  shortCollapsed?: boolean,
  prominent?: boolean,
  dense?: boolean,
  fixed?: boolean,
  adjust?: boolean,
  navigations?: object,
  actionItems?: object,
  scrollTarget?: EventTarget,
  scrollTargetId?: string
}

interface Data {

}

@tag('m-top-app-bar')
export default class topAppBar extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    heading: String,
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    dense: Boolean,
    fixed: Boolean,
    adjust: Boolean,
    navigations: Object,
    actionItems: Object,
    scrollTarget: EventTarget,
    scrollTargetId: String
  }

  topAppBar: MDCTopAppBar
  tagNum = new Object()

  beforeUpdate() {
    this.setChildrenAttribute()
  }

  updated() {
    //update this.topAppBar, more flexible operation
    //更新 this.topAppBar 变量，操作更灵活
    this.topAppBar.destroy()
    this.topAppBar = new MDCTopAppBar(this.shadowRoot.querySelector('.mdc-top-app-bar'))

    if(this.props.scrollTarget) {
      // Get the target scrollbar of 'm-top-app-bar' and trigger the animation based on this scrollbar (JSX use)
      // 获取 'm-top-app-bar' 的目标滚动条，根据此滚动条触发动画 (JSX 使用)
      this.props.scrollTarget ? this.topAppBar.setScrollTarget(this.props.scrollTarget) : this.topAppBar.setScrollTarget(window)
    } else {
      //(原生 js 使用)
      if(this.props.scrollTargetId) {
        const findTarge = document.querySelector('#' + this.props.scrollTargetId)
        if(findTarge) {
          this.topAppBar.setScrollTarget(findTarge)
        } else {
          this.topAppBar.setScrollTarget(window)
        }
      } else {
        this.topAppBar.setScrollTarget(window)
      }
    }
  }

  installed() {
    this.topAppBar = new MDCTopAppBar(this.shadowRoot.querySelector('.mdc-top-app-bar'))

    this.topAppBar.listen('MDCTopAppBar:nav', (e) => {
      this.fire('navigation', {nav: this.props.navigations, index: '0'})
    })

    domReady(() => {
      this.setChildrenAttribute()
      this.update()
    })
  }

  setChildrenAttribute() {
    this.tagNum = new Object()
    const children = elementChildren(this)
    children.forEach((child) => {
      if(child.tagName === 'NAVIGATION' || child.tagName === 'ACTIONITEM') {
        if(typeof this.tagNum[child.tagName] === 'undefined') {
          this.tagNum[child.tagName] = new Array()
        }
        const tagLength = this.tagNum[child.tagName].length
        child.setAttribute('slot', child.tagName + tagLength + '')
        this.tagNum[child.tagName].push(tagLength)
      }
    })
  }

  onNav = (evt: any) => {
    evt && this.fire('navigation', {nav: 'navigation', index: this.findPathAccessKey(evt)})
  }

  onAction = (evt: any) => {
    evt && this.fire('action', {act: 'action', index: this.findPathAccessKey(evt)})
  }

  findPathAccessKey(evt) {
    let index = -1
    for(let i = 0; i < evt.path.length; i++) {
      if(evt.path[i].tagName === 'SLOT' || evt.path[i].tagName === 'SPAN') {
        index = evt.path[i].accessKey
        return index
      }
    }
  }

  isArray(value){
    return typeof Array.isArray === 'function' ? Array.isArray(value) : Object.prototype.toString.call(value) === '[object Array]'
  }

  render(props) {
    return [
      <header {...extractClass(props, 'mdc-top-app-bar', {
        'mdc-top-app-bar--fixed': props.fixed,
        'mdc-top-app-bar--dense': props.dense,
        'mdc-top-app-bar--short': props.short || props.shortCollapsed,
        'mdc-top-app-bar--short-collapsed': props.shortCollapsed,
        'mdc-top-app-bar--prominent': props.prominent
      })}>
        <div class='mdc-top-app-bar__row'>
          {(props.navigations || this.tagNum['NAVIGATION'] || props.heading) &&
          <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            {(props.navigations && !this.tagNum['NAVIGATION']) ?
            (typeof props.navigations === 'string' ? <span class='mdc-top-app-bar__navigation-icon material-icons'>{props.navigations}</span> :
            this.isArray(props.navigations) ?
            props.navigations.map((item, index) => {
              if(index == 0) {
                return item.text ? <span class='mdc-top-app-bar__navigation-icon'>{item.text}</span> : typeof item === 'string' && <span class='mdc-top-app-bar__navigation-icon material-icons'>{item}</span>
              } else {
                return item.text ? <span accessKey={index + ''} class='mdc-top-app-bar__navigation-icon' onClick={this.onNav}>{item.text}</span> : typeof item === 'string' && <span accessKey={index + ''} class='mdc-top-app-bar__navigation-icon material-icons' onClick={this.onNav}>{item}</span>
              }
            }) : props.navigations.text && <span class='mdc-top-app-bar__navigation-icon'>{props.navigations.text}</span>) :
            this.tagNum['NAVIGATION'] && this.tagNum['NAVIGATION'].map((_, index) => {
              return <slot accessKey={index + ''} class='mdc-top-app-bar__navigation-icon' name={'NAVIGATION' + index} onClick={this.onNav}></slot>
            })}
            {props.heading && <span class='mdc-top-app-bar__title'>{props.heading}</span>}
          </section>}
          {(props.actionItems || this.tagNum['ACTIONITEM']) &&
          <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
            {(props.actionItems && !this.tagNum['ACTIONITEM']) ?
            (typeof props.actionItems === 'string' ? <span accessKey={'0'} class='mdc-top-app-bar__action-item material-icons' onClick={this.onAction}>{props.actionItems}</span> :
            this.isArray(props.actionItems) ?
            props.actionItems.map((item, index) => {
              return item.text ? <span accessKey={index + ''} class='mdc-top-app-bar__action-item' onClick={this.onAction}>{item.text}</span> :
              typeof item === 'string' && <span accessKey={index + ''} class='mdc-top-app-bar__action-item material-icons' onClick={this.onAction}>{item}</span>
            }) : props.actionItems.text && <span accessKey={'0'} class='mdc-top-app-bar__action-item' onClick={this.onAction}>{props.actionItems.text}</span>) :
            this.tagNum['ACTIONITEM'] && this.tagNum['ACTIONITEM'].map((_, index) => {
              return <slot accessKey={index + ''} class='mdc-top-app-bar__action-item' name={'ACTIONITEM' + index} onClick={this.onAction}></slot>
            })}
          </section>}
        </div>
      </header>,
      (props.adjust &&
      <div {...extractClass(props,
        (props.short || props.shortCollapsed) ? 'mdc-top-app-bar--short-fixed-adjust' :
        (props.dense && props.prominent) ? 'mdc-top-app-bar--dense-prominent-fixed-adjust' :
        props.dense ? 'mdc-top-app-bar--dense-fixed-adjust' :
        props.prominent ? 'mdc-top-app-bar--prominent-fixed-adjust' : 'mdc-top-app-bar--fixed-adjust'
      )}></div>)
    ]
  }
}
