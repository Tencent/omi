import { WeElement, h, tag } from 'omi'

import '@omiu/button'
import '@omiu/tabs'
import '@omiu/hamburger-menu'
import './components/layout-header'
import './components/layout-left-panel'

import * as css from '../index.scss'
import * as basicLayoutCss from './basic-layout.scss'

import { tw, sheet } from 'omi-twind'

interface Props { }

const tagName = 'basic-layout'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement {
  static css = [
    sheet.target,
    `
.is-closed{
  width: 0;
  transform: translateX(-100%);
}

`,
    css.default,
    basicLayoutCss.default
  ]

  store

  onChange = (evt) => {
    const tab = this.store.tabs.find((tab) => tab.id === evt.detail.tab.id)
    this.store.tabsActiveIndex = this.store.tabs.indexOf(tab)
    this.store.selectTreeNodeById(evt.detail.tab.id)
    location.hash = evt.detail.tab.href
  }

  onRemove = (evt) => {
    let index = evt.detail.index
    if (this.store.tabsActiveIndex === evt.detail.index) {
      index = index - 1
      if (index < 0) index = 0
      this.store.tabsActiveIndex = index
    } else if (this.store.tabsActiveIndex > index) {
      this.store.tabsActiveIndex -= 1
    }

    const tab = this.store.tabs[this.store.tabsActiveIndex]

    this.store.selectTreeNodeById(tab.id)

    location.hash = tab.href
  }

  installed() {
    this.store.ui.baseLayout = this

    window.addEventListener('resize', () => {
      this.update()
    })
  }

  getMainContentWidth() {
    if (window.innerWidth > 640) {
      return window.innerWidth - (this.store.isLeftPanelClosed ? 0 : 208) + 'px'
    } else {
      return window.innerWidth
    }
  }

  onMenuChange = (evt) => {
    this.store.isLeftPanelClosed = evt.detail
    if (this.store.isLeftPanelClosed) {
      this.store.openLeftPanel()
    } else {
      this.store.closeLeftPanel()
    }
  }

  render() {
    return (
      <h.f>
        <layout-header class={tw`h-12 block`}></layout-header>

        <div class={tw`flex flex-row`}>
          <layout-left-panel
            class={tw`${this.store.isLeftPanelClosed
              ? 'sm:w-0 -translate-x-full'
              : 'sm:w-52 w-3/4 translate-x-0'
            } flex-none border-r-1 dark:(border-gray-600) overflow-x-hidden overflow-y-auto z-50 transition-all duration-500 ease-in-out  sm:relative fixed `}
          ></layout-left-panel>
          <layout-container class={tw`flex-1 flex-grow`}>
            <div
              class={tw`overflow-auto flex pt-0.5`}
              style={{ width: this.getMainContentWidth() }}
            >
              {this.store.isLeftPanelClosed && (
                <o-hamburger-menu
                  class={tw`mt-1.5 ml-1 scale-75 flex-row`}
                  color="rgb(107, 114, 128)"
                  active={!this.store.isLeftPanelClosed}
                  onchange={this.onMenuChange}
                ></o-hamburger-menu>
              )}
              <o-tabs
                class={tw`w-full `}
                closable
                type="card"
                tabs={this.store.tabs}
                onChange={this.onChange}
                onRemove={this.onRemove}
                active-index={this.store.tabsActiveIndex}
              ></o-tabs>
            </div>

            <div
              ref={(el) => (this.store.containerEl = el)}
              style={{
                height: 'calc(100vh - 90px)',
                width: this.getMainContentWidth()
              }}
              class={tw`overflow-auto`}
            >
              <slot></slot>
            </div>
          </layout-container>
        </div>
      </h.f>
    )
  }
}
