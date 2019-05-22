import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import {MDCTopAppBar} from '@material/top-app-bar';
import '../icon'
import '../icon-button'

// @ts-ignore
import { htmlToVdom } from '../util.ts'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  heading?: string,
  short?: boolean,
  shortCollapsed?: boolean,
  prominent?: boolean,
  dense?: boolean,
  fixed?: boolean,
  adjust?: boolean,
  navigation?: object,
  navigationElement?: object,
  actionItems?: object,
  actionElements?: object,
  scrollTarget?: EventTarget,
  scrollTargetDrawer?: boolean
}

interface Data {

}

@tag('m-top-app-bar')
export default class topAppBar extends WeElement<Props, Data>{
  static css = theme() + css

  static propTypes = {
    heading: String,
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    dense: Boolean,
    fixed: Boolean,
    adjust: Boolean,
    navigation: Object,
    navigationElement: Object,
    actionItems: Object,
    actionElements: Object,
    scrollTarget: EventTarget,
    scrollTargetDrawer: Boolean
  }

  static defaultProps = {

  }

  topAppBar: MDCTopAppBar

  updated() {
    // Update after initializing the component
    // Get the target scrollbar of 'm-top-app-bar' and trigger the animation based on this scrollbar
    // 获取 'm-top-app-bar' 的目标滚动条，根据此滚动条触发动画
    if(this.props.scrollTargetDrawer) {  //script设置m-drawer组件的scrollTarget(m-drawer的frame属性为true时使用,临时解决方案)
      const target = document.querySelector('m-drawer').shadowRoot.querySelector('#m-drawer-content')
      target && this.topAppBar.setScrollTarget(target)
    } else {
      this.props.scrollTarget && this.topAppBar.setScrollTarget(this.props.scrollTarget)
    }
  }

  installed() {
    this.topAppBar = new MDCTopAppBar(this.shadowRoot.querySelector('.mdc-top-app-bar'))

    this.topAppBar.listen('MDCTopAppBar:nav', (evt: any) => {
      this.fire('nav')
    });

    //script设置m-drawer组件的scrollTarget(m-drawer的frame属性为true时使用)
    if(this.props.scrollTargetDrawer) {
      const target = document.querySelector('m-drawer').shadowRoot.querySelector('#m-drawer-content')
      target && this.topAppBar.setScrollTarget(target)
    }
  }

  isArray(value){
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    } else {
      return Object.prototype.toString.call(value) === "[object Array]";
    }
  }

  onNavigation = (evt: Event) => {
    this.fire('navigation')
    evt && evt.stopPropagation()
  }

  onAction = (evt: any) => {
    if(evt) {
      this.fire('action' + evt.toElement.accessKey)
      evt.stopPropagation()
    }
  }

  render(props) {
    return (
      <div>
        <header {...extractClass(props, 'mdc-top-app-bar', {
          'mdc-top-app-bar--fixed': props.fixed,
          'mdc-top-app-bar--dense': props.dense,
          'mdc-top-app-bar--short': props.short || props.shortCollapsed,
          'mdc-top-app-bar--short-collapsed': props.shortCollapsed,
          'mdc-top-app-bar--prominent': props.prominent
        })}>
          <div class='mdc-top-app-bar__row'>
            {(props.navigation || props.heading) &&
            <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
              {/* Support for custom elements, development completed (支持自定义元素，开发完成) */}
              {props.navigationElement ?
              (typeof props.navigationElement === 'string' ? htmlToVdom(props.navigationElement) : props.navigationElement) :
              props.navigation &&
              (typeof props.navigation === 'string' ?
              <m-icon-button class='mdc-top-app-bar__navigation-icon' icon={props.navigation} onClick={this.onNavigation}></m-icon-button> :
              this.isArray(props.navigation) ?
              <m-icon-button class='mdc-top-app-bar__navigation-icon' icons={props.navigation} onClick={this.onNavigation}></m-icon-button> :
              (props.navigation.mIconButton ?
              <m-icon-button class='mdc-top-app-bar__navigation-icon' {...props.navigation.mIconButton} onClick={this.onNavigation}>
                {(props.children && props.children[0] && props.children[1]) && props.children}
              </m-icon-button> :
              props.navigation.mIcon ?
              <button class='mdc-top-app-bar__navigation-icon' onClick={this.onNavigation}>
                {(props.navigation.mIcon.path || props.navigation.mIcon.paths) ?
                <m-icon {...props.navigation.mIcon}></m-icon> : props.navigation.text}
              </button> :
              <button class='mdc-top-app-bar__navigation-icon' onClick={this.onNavigation}>
                {props.navigation.text}
              </button>))}
              {props.heading && <span class='mdc-top-app-bar__title'>{props.heading}</span>}
            </section>}
            {(props.actionItems || props.actionElements) &&
            <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
              {/* Support for custom elements, development completed (支持自定义元素，开发完成) */}
              {props.actionElements ?
              props.actionElements.map((item) => {
                return (typeof item === 'string' ? htmlToVdom(item) : item)
              }) :
              props.actionItems &&
              (typeof props.actionItems === 'string' ?
              <m-icon-button accessKey='0' class='mdc-top-app-bar__action-item' icon={props.actionItems} onClick={this.onAction}></m-icon-button> :
              props.actionItems.map((item, index) => {
                return typeof item === 'string' ?
                <m-icon-button accessKey={index.toString()} class='mdc-top-app-bar__action-item' icon={item} onClick={this.onAction}></m-icon-button> :
                this.isArray(item) ?
                <m-icon-button accessKey={index.toString()} class='mdc-top-app-bar__action-item' icons={item} onClick={this.onAction}></m-icon-button> :
                item.mIconButton ?
                <m-icon-button accessKey={index.toString()} class='mdc-top-app-bar__action-item' {...item.mIconButton} onClick={this.onAction}></m-icon-button> :
                item.mIcon ?
                <button accessKey={index.toString()} class='mdc-top-app-bar__action-item' onClick={this.onAction}>
                  {(item.mIcon.path || item.mIcon.paths) ? <m-icon accessKey={index.toString()} {...item.mIcon}></m-icon> : item.text}
                </button> :
                <button accessKey={index.toString()} class='mdc-top-app-bar__action-item' onClick={this.onAction}>
                  {item.text}
                </button>
              }))}
            </section>}
          </div>
        </header>
        {props.adjust &&
        <div {...extractClass(props,
          (props.short || props.shortCollapsed) ? 'mdc-top-app-bar--short-fixed-adjust' :
          (props.dense && props.prominent) ? 'mdc-top-app-bar--dense-prominent-fixed-adjust' :
          props.dense ? 'mdc-top-app-bar--dense-fixed-adjust' :
          props.prominent ? 'mdc-top-app-bar--prominent-fixed-adjust' : 'mdc-top-app-bar--fixed-adjust'
        )}></div>}
      </div>
    )
  }
}
