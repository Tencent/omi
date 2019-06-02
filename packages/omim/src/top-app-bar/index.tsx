import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import {MDCTopAppBar} from '@material/top-app-bar';
import '../icon'

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
  actionItems?: object,
  scrollTarget?: EventTarget
}

interface Data {

}

@tag('m-top-app-bar')
export default class topAppBar extends WeElement<Props, Data>{
  static css = theme() + css

  static resetTheme() {
    this.css = theme() + css
  }
  
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

  updated() {
    // Update after initializing the component
    // Get the target scrollbar of 'm-top-app-bar' and trigger the animation based on this scrollbar
    // 获取 'm-top-app-bar' 的目标滚动条，根据此滚动条触发动画
    this.props.scrollTarget && this.topAppBar.setScrollTarget(this.props.scrollTarget)
  }

  installed() {
    this.topAppBar = new MDCTopAppBar(this.shadowRoot.querySelector('.mdc-top-app-bar'))

    this.topAppBar.listen('MDCTopAppBar:nav', () => {
      this.fire('navigation', this.props.navigation)
    });
  }

  onAction = (evt: any) => {
    if(evt) {
      !this.isArray(this.props.actionItems) ? evt && this.fire('action', {item: this.props.actionItems, index: evt.toElement.accessKey}) :
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
          {(props.navigation || props.heading) &&
          <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            {props.navigation && 
            <span class='mdc-top-app-bar__navigation-icon'>
              {props.navigation.text ? props.navigation.text :
              (props.navigation.path || props.navigation.paths) ? <m-icon {...props.navigation}></m-icon> :
              <span class='material-icons'>{props.navigation}</span>}
            </span>}
            {props.heading && <span class='mdc-top-app-bar__title'>{props.heading}</span>}
          </section>}
          {(props.actionItems) &&
          <section class='mdc-top-app-bar__section mdc-top-app-bar__section--align-end'>
            {typeof props.actionItems === 'string' ?
            <span accessKey={'0'} class="mdc-top-app-bar__action-item material-icons" onClick={this.onAction}>{props.actionItems}</span> :
            this.isArray(props.actionItems) ?
            props.actionItems.map((item, index) => {
              return item.text ?
              <span accessKey={index+''} class="mdc-top-app-bar__action-item" onClick={this.onAction}>{item.text}</span> :
              typeof item === 'string' ?
              <span accessKey={index+''} class="mdc-top-app-bar__action-item material-icons" onClick={this.onAction}>{item}</span> :
              !this.isArray(item) &&
              <m-icon accessKey={index+''} class='mdc-top-app-bar__action-item' {...item} onClick={this.onAction}></m-icon>
            }) :
            props.actionItems.text ? <span accessKey={'0'} class="mdc-top-app-bar__action-item" onClick={this.onAction}>{props.actionItems.text}</span> :
            <m-icon accessKey={'0'} class='mdc-top-app-bar__action-item' {...props.actionItems} onClick={this.onAction}></m-icon>}
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
