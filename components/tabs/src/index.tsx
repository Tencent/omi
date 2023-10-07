import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'

interface Props {
  tabs?: any[]
  activeIndex: number
  type?: 'card' | 'border-card'
  position?: 'left' | 'right' | 'top' | 'bottom'
  closable?: boolean
  addable?: boolean
}

const readyCallbacks = []
document.addEventListener('DOMContentLoaded', () => {
  domReady.done = true
  readyCallbacks.forEach(callback => {
    callback()
  })
})

function domReady(callback) {
  if (domReady.done) {
    callback()
    return
  }
  readyCallbacks.push(callback)
}

domReady.done = false

@tag('o-tabs')
export default class Tabs extends WeElement<Props>{
  static css = css

  static defaultProps = {
    position: 'top',
    closable: false,
    addable: false
  }

  static propTypes = {
    tabs: Array,
    activeIndex: Number,
    type: String,
    position: String,
    closable: Boolean,
    addable: Boolean
  }

  _x
  _width
  baseRect
  onTabClick = (evt, index) => {
    this.setActiveBar(evt.currentTarget, index)
    this.fire('change', {
      tab: this.props.tabs[index],
      index: index
    })
  }

  setActiveBar(ele, index) {
    if (!ele) return
    const rect = ele.getBoundingClientRect()
    this._x = rect.left - this.baseRect.left
    this._width = rect.width
    if (index === 0) {
      this._x = 0
      this._width -= 20
    } else if (index === this.props.tabs.length - 1) {
      this._x += 20
      this._width -= 20
    } else {
      this._x += 20
      this._width -= 40
    }
    this.updateProps({
      activeIndex: index
    })
  }

  installed() {
    this.baseRect = this.rootElement.getBoundingClientRect()
    this.setActiveBar(this['$tab' + this.props.activeIndex], this.props.activeIndex)

    domReady(() => {
      this.baseRect = this.rootElement.getBoundingClientRect()
      this.setActiveBar(this['$tab' + this.props.activeIndex], this.props.activeIndex)
    })
  }

  removeTab(index) {
    const tab = this.props.tabs.splice(index, 1)[0]
    if (index <= this.props.activeIndex) {
      this.props.activeIndex -= 1
    }
    if (this.props.activeIndex < 0) {
      this.props.activeIndex = 0
    }
    this.forceUpdate()

    this.setActiveBar(this['$tab' + this.props.activeIndex], this.props.activeIndex)

    this.fire('remove', {
      tab: tab,
      index: index
    })
  }

  addTab(tab) {
    this.props.tabs.push(tab)
    this.forceUpdate()
  }

  onAddIconClick() {
    this.fire('add-icon-click')
  }

  _tempTagName: string

  render(props) {

    const activeBarStyle = (props.position === 'left' || props.position === 'right') ? {
      height: `40px`,
      transform: `translateY(${props.activeIndex * 40}px)`
    } : {
      width: `${this._width}px`,
      transform: `translateX(${this._x}px)`
    }

    return (
      <div {...extractClass(props, 'o-tabs', {
        [`o-tabs--${props.position}`]: props.position,
        [`o-tabs--${props.type}`]: props.type
      })}>
        <div class={classNames('o-tabs__header', {
          [`is-${props.position}`]: props.position
        })} >
          <div class={classNames('o-tabs__nav-wrap', {
            [`is-${props.position}`]: props.position
          })}  >
            <div class="o-tabs__nav-scroll">
              <div role="tablist" class={classNames('o-tabs__nav', {
                [`is-${props.position}`]: props.position
              })} >
                {!props.type && <div
                  class={classNames('o-tabs__active-bar', {
                    [`is-${props.position}`]: props.position
                  })} style={activeBarStyle}></div>}

                {props.tabs.map((tab, index) => {
                  this._tempTagName = 'o-icon-' + tab.icon
                  return <div ref={e => { this['$tab' + index] = e }} role="tab" onClick={evt => props.activeIndex !== index && this.onTabClick(evt, index)} tabindex={props.activeIndex === index ? '0' : -1}
                    {...extractClass(props, 'o-tabs__item', {
                      [`is-${props.position}`]: props.position,
                      'is-active': props.activeIndex === index,
                      'is-closable': props.closable && tab.closable !== false
                    })}
                  >{tab.icon && <this._tempTagName />}{tab.label}{props.closable && tab.closable !== false && <svg onClick={evt => { evt.stopPropagation(); this.removeTab(index) }} class="o-icon-close" style={props.activeIndex === index && `visibility: visible;`} fill="currentColor" width="1em" height="1em" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>}</div>
                })}

              </div>

              {props.addable && <svg class="o-icon-add" fill="currentColor" width="1em" height="1em" focusable="false"
                viewBox="0 0 24 24" aria-hidden="true"
                onClick={this.onAddIconClick}
              ><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
