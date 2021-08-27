import { WeElement, render, h, tag } from 'omi'

import { hashChange } from 'omi-router'
import { registerRouting } from './router'

import { showLoading, hideLoading } from '@omiu/toast'

//提前使用最新版本注册组件
import '@omiu/popover'
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
import '@omiu/icon/dashboard'
import '@omiu/icon/ac-unit'
import '@omiu/icon/people-alt'
import '@omiu/icon/pie-chart'
import '@omiu/transition'
import '@omiu/icon/edit'
import '@omiu/icon/account-box'

import './index.css'

import './layouts/basic-layout'
import './layouts/components/layout-container'
import './components/admin-main-welcome'

import { tw, sheet } from 'omi-twind'
import Store from './store'
import { install as i18nInstall } from './modules/i18n'

// install all modules
// Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.())

export const i18n = i18nInstall()

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

  i18n

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
    showLoading()
    await this.transition.leave()
    this.data.tagName = tagName
    this.update()
    await this.transition.enter()
    hideLoading()

    this.store.containerEl.scrollTop = 0
  }

  installed() {
    this.store.ui.myApp = this

    registerRouting(this)

    if (location.hash) {
      // safari 带hash刷新相当于会先执行 hashChange 导致报错
      // hashChange()
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
        this.store.tabs.push({
          label: node.label,
          closeable: false,
          id: node.id,
          href: node.href
        })
        this.store.tabsActiveIndex = this.store.tabs.length - 1
      }
    }
    // @ts-ignore
    node.md &&
      node.md.then((e) => {
        this.store.markdown = e.default
      })

    // 重新读取 hash 值
    hashChange()
  }

  render() {
    return (
      <basic-layout>
        <o-transition ref={(_) => (this.transition = _)} appear name="fade">
          <this.data.tagName
            // 加key 解决 safari diff 的 bug
            key={Math.random() + Date.now()}
            {...this.payload}
            class={tw`block`}
          ></this.data.tagName>
        </o-transition>
      </basic-layout>
    )
  }
}

new Store({
  locale: 'zh',
  installed(store) {
    render(<my-app name="Omi"></my-app>, '#root', store)
  }
})
