import { WeElement, h, tag } from 'omi'

import '../index.css'

import '@omiu/button'
import '@omiu/tabs'

import './components/layout-header'
import './components/layout-left-panel'

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
`
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
  }

  render() {
    return (
      <h.f>
        <layout-header class={tw`h-12 block`}></layout-header>

        <div class={tw`flex flex-row`}>
          <layout-left-panel
            class={tw`${this.store.isLeftPanelClosed ? 'sm:w-0 -translate-x-full' : 'sm:w-64 w-3/4 translate-x-0'
              } flex-none overflow-hidden bg-white z-50 transition-all duration-500 ease-in-out  sm:relative fixed `}
          ></layout-left-panel>
          <layout-container class={tw`flex-1`}>
            <div class={tw`overflow-auto`} style={{ width: (window.innerWidth - 256) + 'px' }}>
              <o-tabs
                closable
                type="card"
                list={this.store.tabs}
                onchange={this.onChange}
                onremove={this.onRemove}
                active-index={this.store.tabsActiveIndex}
              ></o-tabs>
            </div>

            <div style={`height:calc(100vh - 90px);`} class={tw`overflow-auto`}>
              <slot></slot>
            </div>
          </layout-container>
        </div>
      </h.f>
    )
  }
}
