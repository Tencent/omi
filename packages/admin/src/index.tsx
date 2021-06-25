import { WeElement, render, h, options, tag } from 'omi'

options.ignoreAttrs = true

import { route } from 'omi-router'
import './hello-omi'
import './index.css'

import '@omiu/button'
import './components/admin-header'
import './components/admin-left-panel'
import './components/admin-main'
import './components/admin-main-welcome'
import './components/admin-main-error'
import './components/admin-main-warning'
import './components/admin-main-table'

import { create, cssomSheet } from 'twind'
const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet })


@tag('my-app')
export default class extends WeElement {

  static css = sheet.target

  data = {
    tagName: 'admin-main-welcome'
  }

  install() {
    route('/', () => {
      this.update()
    })

    route('/welcome', () => {
      this.data.tagName = 'admin-main-welcome'
      this.update()
    })

    route('/table', () => {
      this.data.tagName = 'admin-main-table'
      this.update()
    })

    route('/error', () => {
      this.data.tagName = 'admin-main-error'
      this.update()
    })

    route('/warning', () => {
      this.data.tagName = 'admin-main-warning'
      this.update()
    })


    route('*', function () {
      console.log('not found')
    })
  }

  abc: string

  onAbc = (evt: CustomEvent) => {
    this.abc = ` by ${evt.detail.name}`
    this.update()
  }

  render(props) {
    return (
      <div >
        <admin-header class={tw`h-12 block`}></admin-header>

        <div class={tw`flex flex-row`}>
          <admin-left-panel class={tw`w-64`}></admin-left-panel>
          <admin-main class={tw`flex-1`}>
            <this.data.tagName></this.data.tagName>
          </admin-main>
        </div>



      </div>
    )
  }
}

render(<my-app name='Omi'></my-app>, '#root')
