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
