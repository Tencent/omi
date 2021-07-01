import { WeElement, render, h, tag } from 'omi'

import { route } from 'omi-router'

import '@omiu/icon/delete'
import '@omiu/icon/insert-link'
import '@omiu/icon/error'
import '@omiu/icon/warning'
import '@omiu/icon/sentiment-satisfied-alt'
import '@omiu/icon/table-chart'

import '@omiu/transition'

import './index.css'

import './layouts/basic-layout'
import './layouts/components/layout-container'
import './components/admin-main-welcome'

import { tw, sheet } from 'omi-twind'
import store from './store'

const fadeCSS = `.fade-leave-to,
.fade-enter {
  opacity: 0;
  transform: translateX(15px);
}

.fade-leave-active,
.fade-enter-active {
  transition: all 500ms ease-in;
}
`

@tag('my-app')
export default class extends WeElement {
  static css = [sheet.target, fadeCSS]

  data = {
    tagName: 'admin-main-welcome'
  }

  transition

  async transitionTo(tagName) {
    await this.transition.leave()
    this.data.tagName = tagName
    this.update()
    this.transition.enter()
  }

  installed() {

    route('/', () => {
      this.update()
    })

    route('/welcome', () => {
      this.transitionTo('admin-main-welcome')
    })

    route('/table/basic', () => {
      //lazy load
      import('./components/table/basic-table').then(() => this.transitionTo('basic-table')
      )

    })

    route('/table/pagination', () => {
      //lazy load
      import('./components/table/pagination-table').then(() => this.transitionTo('pagination-table')
      )
    })

    route('/form', () => {
      //lazy load
      import('./components/admin-form').then(() => this.transitionTo('admin-form'))
    })


    route('/icon', () => {
      //lazy load
      import('./components/admin-icon').then(() => this.transitionTo('admin-icon'))
    })


    route('/error', () => {
      //lazy load
      import('./components/status/status-error').then(() => this.transitionTo('status-error'))
    })

    route('/warning', () => {
      //lazy load
      import('./components/status/status-warning').then(() => this.transitionTo('status-warning'))
    })

    route('*', function () {
      console.log('not found')
    })
  }

  render(props) {
    return (
      <basic-layout>
        <o-transition ref={_ => this.transition = _} appear name="fade">
          <this.data.tagName class={tw`block`}></this.data.tagName>
        </o-transition>
      </basic-layout>
    )
  }
}

render(<my-app name="Omi"></my-app>, '#root', store)
