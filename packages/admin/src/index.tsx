import { WeElement, render, h, options, tag } from 'omi'

options.ignoreAttrs = true

import { route } from 'omi-router'
import './index.css'

import './layouts/basic-layout'

import './components/admin-main'
import './components/admin-main-welcome'
import './components/admin-main-error'
import './components/admin-main-warning'
import './components/table/basic-table'
import './components/table/pagination-table'

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
      this.data.tagName = 'basic-table'
      this.update()
    })


    route('/table/pagination', () => {
      this.data.tagName = 'pagination-table'
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

  render(props) {
    return (
      <basic-layout><this.data.tagName></this.data.tagName></basic-layout>
    )
  }
}

render(<my-app name='Omi'></my-app>, '#root')
