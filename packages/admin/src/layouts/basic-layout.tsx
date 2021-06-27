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
  static css = sheet.target

  store

  onChange = (evt) => {
    const tab = this.store.tabs.find(tab => tab.id === evt.detail.tab.id)
    this.store.tabsActiveIndex = this.store.tabs.indexOf(tab)
    this.store.selectTreeNodeById(evt.detail.tab.id)
    location.hash = evt.detail.tab.href
    console.error(this.store.treeData)
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

  render() {
    return (
      <h.f>
        <layout-header class={tw`h-12 block`}></layout-header>

        <div class={tw`flex flex-row`}>
          <layout-left-panel class={tw`w-64`}></layout-left-panel>
          <layout-container class={tw`flex-1`}>
            <o-tabs
              closable
              type="card"
              list={this.store.tabs}
              onchange={this.onChange}
              onremove={this.onRemove}
              active-index={this.store.tabsActiveIndex}>
            </o-tabs>

            <div style={`height:calc(100vh - 6rem);`} class={tw`overflow-auto`}>
              <slot></slot>
            </div>
          </layout-container>
        </div>
      </h.f>
    )
  }
}
