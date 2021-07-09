import { WeElement, render, h, tag } from 'omi'

import { route } from 'omi-router'

import '@omiu/icon/delete'
import '@omiu/icon/insert-link'
import '@omiu/icon/error'
import '@omiu/icon/warning'
import '@omiu/icon/sentiment-satisfied-alt'
import '@omiu/icon/table-chart'
import '@omiu/icon/description'
import '@omiu/icon/list-alt'
import '@omiu/icon/grid-on'
import '@omiu/icon/comment'

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
  transition: all 300ms ease-in;
}
`

@tag('my-app')
export default class extends WeElement {
  static css = [sheet.target, fadeCSS]

  data = {
    tagName: 'admin-main-welcome'
  }

  transition

  payload

  getMdByName(name, children) {
    const href = `#/docs/${name}`
    const node = children.find((item) => item.href === href)
    if (node) return node.md

    for (let i = 0, length = children.length; i < length; i++) {
      if (children[i].children) {
        const subNode = this.findNodeByHash(href, children[i].children)
        if (subNode) return subNode.md
      }
    }
  }

  async transitionTo(tagName) {
    await this.transition.leave()
    this.data.tagName = tagName
    this.update()
    await this.transition.enter()
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
      import('./components/table/basic-table').then(() =>
        this.transitionTo('basic-table')
      )
    })

    route('/docs/:name', (evt) => {
      //lazy load
      const md = this.getMdByName(evt.params.name, this.store.treeData)
      md.then((e) => {
        this.payload = { mdContent: e.default }
        import('./components/docs/admin-docs').then(() =>
          this.transitionTo('admin-docs')
        )
      })
    })

    route('/table/pagination', () => {
      //lazy load
      import('./components/table/pagination-table').then(() =>
        this.transitionTo('pagination-table')
      )
    })

    route('/form', () => {
      //lazy load
      import('./components/admin-form').then(() =>
        this.transitionTo('admin-form')
      )
    })

    route('/comment', () => {
      //lazy load
      import('./components/comment/admin-comment').then(() =>
        this.transitionTo('admin-comment')
      )
    })

    route('/icon', () => {
      //lazy load
      import('./components/admin-icon').then(() =>
        this.transitionTo('admin-icon')
      )
    })

    route('/error', () => {
      //lazy load
      import('./components/status/status-error').then(() =>
        this.transitionTo('status-error')
      )
    })

    route('/loading-component', () => {
      //lazy load
      import('./components/components/loading-component').then(() =>
        this.transitionTo('loading-component')
      )
    })


    route('/toast-component', () => {
      //lazy load
      import('./components/components/toast-component').then(() =>
        this.transitionTo('toast-component')
      )
    })


    route('/warning', () => {
      //lazy load
      import('./components/status/status-warning').then(() =>
        this.transitionTo('status-warning')
      )
    })

    route('*', function () {
      console.log('not found')
    })

    if (location.hash) {
      this.routeTo(location.hash)
    }
  }

  store

  findNodeByHash(hash, children) {
    const node = children.find((item) => item.href === hash)
    if (node) return node

    for (let i = 0, length = children.length; i < length; i++) {
      if (children[i].children) {
        const subNode = this.findNodeByHash(hash, children[i].children)
        if (subNode) return subNode
      }
    }
  }

  routeTo(hash: string) {
    const node: {
      children: []
      id: number
      label: string
      href: string
      md: any
    } = this.findNodeByHash(hash, this.store.treeData)

    this.store.selectTreeNodeById(node.id)

    if (!node.children) {
      const tab = this.store.tabs.find((tab) => tab.id === node.id)
      if (tab) {
        this.store.tabsActiveIndex = this.store.tabs.indexOf(tab)
      } else {
        if (node.id !== 9) {
          this.store.tabs.push({
            label: node.label,
            closeable: false,
            id: node.id,
            href: node.href
          })
          this.store.tabsActiveIndex = this.store.tabs.length - 1
        }
      }
    }
    // @ts-ignore
    node.md &&
      node.md.then((e) => {
        this.store.markdown = e.default
      })
  }

  render(props) {
    return (
      <basic-layout>
        <o-transition ref={(_) => (this.transition = _)} appear name="fade">
          <this.data.tagName
            {...this.payload}
            class={tw`block`}
          ></this.data.tagName>
        </o-transition>
      </basic-layout>
    )
  }
}

render(<my-app name="Omi"></my-app>, '#root', store)
