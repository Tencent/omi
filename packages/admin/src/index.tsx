import { WeElement, render, h, tag } from 'omi'

import { route } from 'omi-router'

import '@omiu/icon/delete'
import './index.css'

import './layouts/basic-layout'
import './layouts/components/layout-container'
import './components/admin-main-welcome'

import { tw, sheet } from 'omi-twind'

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

    route('/table/basic', () => {
      //lazy load
      import('./components/table/basic-table')
      this.data.tagName = 'basic-table'
      this.update()
    })

    route('/table/pagination', () => {
      //lazy load
      import('./components/table/pagination-table')
      this.data.tagName = 'pagination-table'
      this.update()
    })

    route('/error', () => {
      //lazy load
      import('./components/status/status-error')
      this.data.tagName = 'status-error'
      this.update()
    })

    route('/warning', () => {
      //lazy load
      import('./components/status/status-warning')
      this.data.tagName = 'status-warning'
      this.update()
    })

    route('*', function () {
      console.log('not found')
    })
  }

  render(props) {
    return (
      <basic-layout>
        <this.data.tagName></this.data.tagName>
      </basic-layout>
    )
  }
}

render(<my-app name="Omi"></my-app>, '#root', {
  ignoreAttrs: true
})
