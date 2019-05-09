import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import {MDCTopAppBar} from '@material/top-app-bar';
import '../icon'

interface Props {
  title: string,
  short: boolean,
  shortCollapsed: boolean,
  prominent: boolean,
  dense: boolean,
  fixed: boolean,
  navigationIcon: object,
  actionItems: object
}

interface Data {

}

@tag('m-top-app-bar')
export default class topAppBar extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    title: String,
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    dense: Boolean,
    fixed: Boolean,
    navigationIcon: Object,
    actionItems: Object
  }
  
  installed() {
    new MDCTopAppBar(this.shadowRoot.querySelector('.mdc-top-app-bar'));
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
      <header {...extractClass(props, 'mdc-top-app-bar', {
        'mdc-top-app-bar--fixed': props.fixed,
        'mdc-top-app-bar--dense': props.dense,
        'mdc-top-app-bar--short': props.short || props.shortCollapsed,
        'mdc-top-app-bar--short-collapsed': props.shortCollapsed,
        'mdc-top-app-bar--prominent': props.prominent
      })}>
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            {props.navigationIcon &&<button class="mdc-top-app-bar__navigation-icon" onClick={this.onNavigation}>
              {(props.navigationIcon.path || props.navigationIcon.paths) ?
              <m-icon {...props.navigationIcon}></m-icon> : props.navigationIcon.text}
            </button>}
            <span class="mdc-top-app-bar__title">{props.title}</span>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            {props.actionItems && props.actionItems.map((item, index) =>
              <button accessKey={index.toString()} class="mdc-top-app-bar__action-item" onClick={this.onAction}>
                {(item.path || item.paths) ? <m-icon accessKey={index.toString()} {...item}></m-icon> : item.text}
              </button>
            )}
          </section>
        </div>
      </header>
    )
  }
}
