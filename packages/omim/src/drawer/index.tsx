import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import {MDCDrawer, MDCDismissibleDrawerFoundation} from '@material/drawer'
// import {MDCList} from '@material/list';
import '../icon'

interface Props {
  dismissible: boolean,
  modal: boolean,
  removeAnimation: boolean,
  show: boolean,
  heading: string,
  subHeading: string
}

interface Data {

}

@tag('m-drawer')
export default class Drawer extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    dismissible: Boolean,
    modal: Boolean,
    removeAnimation: Boolean,
    show: Boolean,
    heading: String,
    subHeading: String
  }

  static defaultProps = {
    
  }

  deawer: MDCDrawer
  drawerFoundation: MDCDismissibleDrawerFoundation

  updated() {
    this.props.show ? this.drawerFoundation.open() : this.drawerFoundation.close()
  }
  
  installed() {
    // const drawer = new MDCDrawer(this.shadowRoot.querySelector('.mdc-drawer'))
    if(this.props.dismissible || this.props.modal) {
      this.deawer = MDCDrawer.attachTo(this.shadowRoot.querySelector('.mdc-drawer'))
      this.drawerFoundation = this.deawer.getDefaultFoundation()
      this.props.show ? this.drawerFoundation.open() : this.drawerFoundation.close()
    }
    // const list = MDCList.attachTo(this.shadowRoot.querySelector('.mdc-list'));
    // list.wrapFocus = true;

  }

  // onScrim = (evt) => {
  //   console.log('scrim')
  //   const a = new MDCModalDrawerFoundation()
  // }

  render(props) {
    return (
      <div class="drawer-frame-root">
        <aside {...extractClass(props, 'mdc-drawer', {
          'mdc-drawer--dismissible': props.dismissible || props.modal,
          'mdc-drawer--modal': props.modal,
          'mdc-drawer--open': props.removeAnimation
        })}>
          {
            (props.heading || props.subHeading) &&
            <div class='mdc-drawer__header'>
              {props.heading && <h3 class='mdc-drawer__title'>{props.heading}</h3>}
              {props.subHeading && <h6 class='mdc-drawer__subtitle'>{props.subHeading}</h6>}
            </div>
          }
          <div class='mdc-drawer__content'>
            <nav class="mdc-list">
              <a class="mdc-list-item mdc-list-item--activated" href="#" tabindex="0" aria-selected="true"><i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Inbox</a>
              <a class="mdc-list-item" href="#" tabindex="-1"><i class="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>Star</a>
              <a class="mdc-list-item" href="#" tabindex="-1"><i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>Sent Mail</a>
              <a class="mdc-list-item" href="#" tabindex="-1"><i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>Drafts</a>
              <hr class="mdc-list-divider" />
              <h6 class="mdc-list-group__subheader">Labels</h6>
              <a class="mdc-list-item" href="#" tabindex="-1"><i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>Family</a>
              <a class="mdc-list-item" href="#" tabindex="-1"><i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>Friends</a>
              <a class="mdc-list-item" href="#" tabindex="-1"><i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>Work</a>
              <hr class="mdc-list-divider" />
              <a class="mdc-list-item" href="#" tabindex="-1"><i class="material-icons mdc-list-item__graphic" aria-hidden="true">settings</i>Settings</a>
              <a class="mdc-list-item" href="#" tabindex="-1"><i class="material-icons mdc-list-item__graphic" aria-hidden="true">announcement</i>Help &amp; feedback</a>
            </nav>
          </div>
        </aside>
        {props.modal && <div class="mdc-drawer-scrim"></div>}
        <div class="mdc-drawer-app-content">
          <slot name='mdc-drawer-app-content'></slot>
          <div class="drawer-main-content">
            <slot name='drawer-main-content'></slot>
          </div>
        </div>
      </div>
      )
  }
}
