import { tag, h, WeElement, extractClass } from 'omi'
import * as css from './index.scss'
import { MDCTabBar } from '@material/tab-bar'
import '../icon'

//@ts-ignore
import { theme } from '../theme.ts'


interface Props {
  defaultActive: string,
  width: string,
  align: 'start' | 'end' | 'center', // 三种可能值  start | end | center
  useMinWidth: boolean,
}

interface Data {

}

@tag('m-tab')
export default class Tab extends WeElement<Props, Data>{
  static css = theme() + css

  data = {
    active: null,
    tabBar: null
  }

  installed() {
    this.data.tabBar = new MDCTabBar(this.shadowRoot.querySelector('.mdc-tab-bar'));
    this.data.tabBar.listen('MDCTabBar:activated', (e) => {
      let item = this.props.children[e.detail.index]
      this.fire('tabChange', item.attributes)
    })
  }

  uninstall() {
    this.data.tabBar.destory()
  }

  activateTab(prop) {
    // @ts-ignore
    let index = [].findIndex(this.props.children, (item => item.attributes.prop === prop))
    this.data.tabBar.activateTab(index)
  }

  renderButton( vnode, activeProp ) {
    const { attributes: props } = vnode
    const isActive = activeProp === props.prop
    return (
      <button {...extractClass(props,'mdc-tab',{'mdc-tab--active': isActive, 'mdc-tab--min-width': this.props.useMinWidth })} role="tab" aria-selected={ isActive }>
        <span class="mdc-tab__content">
          { props.icon && <span class="mdc-tab__icon" aria-hidden="true"><m-icon {...props.icon}></m-icon></span> }
          <span class="mdc-tab__text-label">{ vnode.attributes.label }</span>
        </span>
        <span {...extractClass(props,'mdc-tab-indicator',{'mdc-tab-indicator--active': isActive })}>
          <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
        </span>
        <span class="mdc-tab__ripple"></span>
      </button>
    )
  }

  render(props) {
    const { children, defaultActive, width, align } = props
    const style = { width: width || '100%' }
    const alignClass = align && 'mdc-tab-scroller--align-' + align
    const scrollerClasses = extractClass(props, 'mdc-tab-scroller', alignClass)
    return (
      <div class="mdc-tab-bar" style={ style } role="tablist">
        <div { ...scrollerClasses }>
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">
              { children.map(vnode => this.renderButton(vnode, defaultActive)) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
