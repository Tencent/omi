import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import {MDCTopAppBar} from '@material/top-app-bar';

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
  navigation?: object,
  actionItems?: object,
  scrollTarget?: EventTarget
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
    navigation: Object,
    actionItems: Object,
    scrollTarget: EventTarget
  }

  topAppBar: MDCTopAppBar
  tagNum = new Object()

  beforeUpdate() {
    domReady(() => {
      this.setChildrenAttribute()
    })
  }

  updated() {
    // Update after initializing the component
    // Get the target scrollbar of 'm-top-app-bar' and trigger the animation based on this scrollbar
    // 获取 'm-top-app-bar' 的目标滚动条，根据此滚动条触发动画
    this.props.scrollTarget && this.topAppBar.setScrollTarget(this.props.scrollTarget)
    
  }

  installed() {
    this.topAppBar = new MDCTopAppBar(this.shadowRoot.querySelector('.mdc-top-app-bar'))

    this.topAppBar.listen('MDCTopAppBar:nav', (e) => {
      console.log(e)
      this.fire('navigation', this.props.navigation)
    });

    this.tagNum = new Object()
    
    domReady(() => {
      this.setChildrenAttribute()
      this.update()
    })
  }

  setChildrenAttribute() {
    const children = elementChildren(this)
    children.forEach((child) => {
      if (!child.hasAttribute('slot')) {
        if(typeof this.tagNum[child.tagName] === 'undefined') {
          this.tagNum[child.tagName] = new Array()
        }
        const tagLength = this.tagNum[child.tagName].length
        child.setAttribute('slot', child.tagName + tagLength + '')
        child.setAttribute('accessKey', tagLength + '')
        this.tagNum[child.tagName].push(tagLength)
      }
    })
  }

  onNav = (evt: any) => {
    evt && this.fire('navigation', {element: evt.toElement.attributes, index: evt.toElement.accessKey})
  }

  onAction = (evt: any) => {
    if(evt) {
      !this.props.actionItems ? this.fire('action', {element: evt.toElement, index: evt.toElement.accessKey}) :
      !this.isArray(this.props.actionItems) ? this.fire('action', {item: this.props.actionItems, index: evt.toElement.accessKey}) :
      this.fire('action', {item: this.props.actionItems[evt.toElement.accessKey], index: evt.toElement.accessKey})
    }
  }

  isArray(value){
    return typeof Array.isArray === "function" ? Array.isArray(value) : Object.prototype.toString.call(value) === "[object Array]"
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
          {(props.navigation || this.tagNum['NAVIGATION'] || props.heading) &&
          <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            {props.navigation && <span class='mdc-top-app-bar__navigation-icon'>{props.navigation.text ? props.navigation.text : <span class='material-icons'>{props.navigation}</span>}</span>}
            {this.tagNum['NAVIGATION'] && this.tagNum['NAVIGATION'].map((_, index) => {
              return <slot accessKey={index + ''} class='mdc-top-app-bar__navigation-icon' name={'NAVIGATION' + index} onClick={this.onNav}></slot>
            })}
            {props.heading && <span class='mdc-top-app-bar__title'>{props.heading}</span>}
          </section>}
          {(props.actionItems || this.tagNum['ACTIONITEM']) &&
          <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
            {props.actionItems &&
            (typeof props.actionItems === 'string' ? <span accessKey={'0'} class="mdc-top-app-bar__action-item material-icons" onClick={this.onAction}>{props.actionItems}</span> :
            this.isArray(props.actionItems) ?
            props.actionItems.map((item, index) => {
              return item.text ? <span accessKey={index + ''} class="mdc-top-app-bar__action-item" onClick={this.onAction}>{item.text}</span> :
              typeof item === 'string' && <span accessKey={index + ''} class="mdc-top-app-bar__action-item material-icons" onClick={this.onAction}>{item}</span>
            }) :
            props.actionItems.text && <span accessKey={'0'} class="mdc-top-app-bar__action-item" onClick={this.onAction}>{props.actionItems.text}</span>)}
            {this.tagNum['ACTIONITEM'] && this.tagNum['ACTIONITEM'].map((_, index) => {
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
