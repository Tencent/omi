import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import {MDCDrawer, MDCDismissibleDrawerFoundation} from '@material/drawer'
import {MDCList} from '@material/list';
import '../icon'
//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  frame?: boolean,
  dismissible?: boolean,
  dismissibleSmooth?: boolean,
  modal?: boolean,
  show?: boolean,
  heading?: string,
  subHeading?: string,
  lists?: object
}

interface Data {

}

@tag('m-drawer')
export default class Drawer extends WeElement<Props, Data>{
  static css = theme() + css

  static propTypes = {
    frame: Boolean,
    dismissible: Boolean,
    dismissibleSmooth: Boolean,
    modal: Boolean,
    show: Boolean,
    heading: String,
    subHeading: String,
    lists: Object
  }

  static defaultProps = {

  }

  drawerFoundation: MDCDismissibleDrawerFoundation

  //Record list data for returning current list data
  //记录列表数据，用于返回当前列表数据
  listAll = new Array()

  //去除初始状态为显示时刷新页面的显示动画
  initShow = true

  updated() {
    if(this.props.dismissible || this.props.modal) {
      this.props.show ? this.drawerFoundation.open() : this.drawerFoundation.close()
    }
  }

  installed() {
    this.initShow = this.props.show
    if(this.props.dismissible || this.props.modal) {
      const deawer = MDCDrawer.attachTo(this.shadowRoot.querySelector('.mdc-drawer'))
      this.drawerFoundation = deawer.getDefaultFoundation()
      //去除初始状态为显示时刷新页面的显示动画
      // this.props.show ? this.drawerFoundation.open() : this.drawerFoundation.close()
      deawer.listen('MDCDrawer:opened', (evt: any) => {
        this.fire('opened', evt)
      })
      deawer.listen('MDCDrawer:closed', (evt: any) => {
        this.fire('closed', evt)
      })
    }
    const list = MDCList.attachTo(this.shadowRoot.querySelector('.mdc-list'));
    list.wrapFocus = true;
    list.listen('MDCList:action', (evt: any) => {
      //The event will fire twice, why? May be a list listener included in the drawer.(Solution: Prevent duplication listen)
      if(!this.listAll[evt.detail.index].markListen) {
        this.fire('change', this.listAll[evt.detail.index])
        this.listAll[evt.detail.index].markListen = true
      }
    })
  }

  onList = (evt: any) => {
    evt && this.fire('list' + evt.toElement.accessKey, evt)
  }

  render(props) {
    return (
      <div class={classNames({'m-drawer-frame-root': props.frame})}>
        <aside {...extractClass(props, 'mdc-drawer', {
          'mdc-drawer--dismissible': props.dismissible,
          'mdc-drawer--modal': props.modal,
          'mdc-drawer--open': this.initShow
        })}>
          {(props.heading || props.subHeading) &&
          <div class='mdc-drawer__header'>
            {props.heading && <h3 class='mdc-drawer__title'>{props.heading}</h3>}
            {props.subHeading && <h6 class='mdc-drawer__subtitle'>{props.subHeading}</h6>}
          </div>}
          {props.lists &&
          <div class='mdc-drawer__content'>
            <nav class='mdc-list'>
              {props.lists.map((item, index) => {
                if(item.divider) {
                  return <hr accessKey={index.toString()} class='mdc-list-divider' />
                } else if(item.subheader) {
                  return <h6 accessKey={index.toString()} class='mdc-list-group__subheader'>{item.subheader}</h6>
                } else {
                  this.listAll.push(item)
                  return <a accessKey={index.toString()}
                    class={classNames('mdc-list-item', {
                      'mdc-list-item--activated': item.focus
                    })}
                    href={item.href}
                    tabindex={`${item.focus ? '0' : '-1'}`}
                    aria-selected={`${item.focus ? true : false}`}
                    target={item.target && '_blank'}
                    onClick={this.onList}>
                    {item.icon &&
                    <m-icon
                      accessKey={index.toString()}
                      {...item.icon}
                      class='mdc-list-item__graphic'
                      css={`
                        ${!(item.icon.path || item.icon.paths) && `
                          .m-icon svg {
                            display: none;
                          }
                        `}
                      `}>
                      {!(item.icon.path || item.icon.paths) && item.icon.text}
                    </m-icon>}
                    {item.text}
                  </a>
                }
              })}
            </nav>
          </div>}
          {/* solve the problem that the content focus is empty */}
          <a class='m-drawer-content-focus' href="#"></a>
        </aside>
        {props.modal && <div class='mdc-drawer-scrim'></div>}
        {props.frame ?
        <div class={classNames('mdc-drawer-app-content', {'transition-mode1': props.dismissibleSmooth})}>
          <slot name='m-drawer-header'></slot>
          <div id='m-drawer-content' class='m-drawer-content'>
            <slot name='m-drawer-content'></slot>
          </div>
          <slot></slot>
        </div> :
        <slot></slot>}
      </div>
    )
  }
}
