import { tag, WeElement, h, extractClass, classNames } from 'omi'
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
  bottom: boolean,
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
    bottom: Boolean,
    navigations: Object,
    actionItems: Object,
    scrollTarget: EventTarget,
    scrollTargetId: String
  }

  topAppBar: MDCTopAppBar
  tagNum = new Object()
  other = false

  beforeUpdate() {
    this._setChildrenAttribute()
  }

  updated() {
    // update this.topAppBar, more flexible operation (更新 this.topAppBar 变量，操作更灵活)
    this.topAppBar.destroy()
    this.topAppBar = new MDCTopAppBar(this.shadowRoot.querySelector('.mdc-top-app-bar'))

    // Get the target scrollbar of 'm-top-app-bar' and trigger the animation based on this scrollbar (JSX use) (获取 'm-top-app-bar' 的目标滚动条，根据此滚动条触发动画)
    if(this.props.scrollTarget) {  //(JSX 使用)
      this.topAppBar.setScrollTarget(this.props.scrollTarget)
    } else { // (原生 js 使用)
      if(this.props.scrollTargetId) {
        const findTarge = document.querySelector('#' + this.props.scrollTargetId)
        findTarge ? this.topAppBar.setScrollTarget(findTarge) : this.topAppBar.setScrollTarget(window)
      } else {
        this.topAppBar.setScrollTarget(window)
      }
    }
  }

  installed() {
    this.topAppBar = new MDCTopAppBar(this.shadowRoot.querySelector('.mdc-top-app-bar'))

    domReady(() => {
      this._setChildrenAttribute()
      this.update()
    })
  }

  _setChildrenAttribute() {
    this.tagNum = new Object()
    this.other = false
    const children = elementChildren(this)
    children.forEach((child) => {
      if(child.tagName === 'NAVIGATION' || child.tagName === 'ACTIONITEM') {
        if(typeof this.tagNum[child.tagName] === 'undefined') {
          this.tagNum[child.tagName] = new Array()
        }
        const tagLength = this.tagNum[child.tagName].length
        child.setAttribute('slot', child.tagName + tagLength + '')
        this.tagNum[child.tagName].push(tagLength)
      } else {
        child.setAttribute('slot', 'OTHER')
        this.other = true
      }
    })
  }

  onNavigation = (evt: any) => {
    evt && this.fire('navigation', {nav: 'navigation', index: this._findPathAccessKey(evt)})
  }

  onAction = (evt: any) => {
    evt && this.fire('action', {act: 'action', index: this._findPathAccessKey(evt)})
  }

  _findPathAccessKey(evt) {
    for(let i = 0; i < evt.path.length; i++)
      if((evt.path[i].tagName === 'SLOT' || evt.path[i].tagName === 'OMIM') && evt.path[i].accessKey)
        return evt.path[i].accessKey
    return -1
  }
  
  render(props) {
    return [
      <header {...extractClass(props, 'mdc-top-app-bar', {
        'mdc-top-app-bar--fixed': props.fixed || props.bottom,
        'mdc-top-app-bar--dense': props.dense,
        'mdc-top-app-bar--short': props.short || props.shortCollapsed,
        'mdc-top-app-bar--short-collapsed': props.shortCollapsed,
        'mdc-top-app-bar--prominent': props.prominent,
        'm-top-app-bar-bottom': props.bottom
      })}>
        <div class='mdc-top-app-bar__row'>
          {(props.navigations || this.tagNum['NAVIGATION'] || props.heading) &&
          <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            {props.navigations ? props.navigations.map((item, index) => {
              return <omim accessKey={index + ''} class={classNames('mdc-top-app-bar__navigation-icon', {'material-icons': !item.text})} onClick={this.onNavigation}>{typeof item.text === 'string' ? item.text : item}</omim>
            }) : (this.tagNum['NAVIGATION'] && this.tagNum['NAVIGATION'].map((_, index) => {
              return <slot accessKey={index + ''} class='mdc-top-app-bar__navigation-icon' name={'NAVIGATION' + index} onClick={this.onNavigation}></slot>
            }))}
            {props.heading && <span class='mdc-top-app-bar__title'>{props.heading}</span>}
          </section>}
          {(props.actionItems || this.tagNum['ACTIONITEM']) &&
          <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
            {props.actionItems ?
            props.actionItems.map((item, index) => {
              return <omim accessKey={index + ''} class={classNames('mdc-top-app-bar__action-item', {'material-icons': !item.text})} onClick={this.onAction}>{typeof item.text === 'string' ? item.text : item}</omim>
            }) : (this.tagNum['ACTIONITEM'] && this.tagNum['ACTIONITEM'].map((_, index) => {
              return <slot accessKey={index + ''} class='mdc-top-app-bar__action-item' name={'ACTIONITEM' + index} onClick={this.onAction}></slot>
            }))}
          </section>}
          {this.other === true && <slot name='OTHER'></slot>}
        </div>
      </header>,
      (props.adjust && <div {...extractClass(props,
        (props.short || props.shortCollapsed) ? 'mdc-top-app-bar--short-fixed-adjust' :
        (props.dense && props.prominent) ? 'mdc-top-app-bar--dense-prominent-fixed-adjust' :
        props.dense ? 'mdc-top-app-bar--dense-fixed-adjust' :
        props.prominent ? 'mdc-top-app-bar--prominent-fixed-adjust' : 'mdc-top-app-bar--fixed-adjust'
      )}></div>)
    ]
  }
}
