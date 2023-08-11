import { WeElement, render, h, tag } from 'omi'
// 提前使用最新版本注册组件
import '@omiu/transition'
import { hashChange } from 'omi-router'
import { registerRouting } from './router'

import { showLoading, hideLoading } from '@omiu/toast'

import * as css from './index.scss'

// 提前使用最新版本注册组件
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
import '@omiu/icon/edit'
import '@omiu/icon/account-box'

import './layouts/basic-layout'
import './layouts/components/layout-container'
import './components/admin-main-welcome'

import { tw, sheet } from 'omi-twind'
import Store from './store'

const fadeCSS = `.fade-leave-to,
.fade-enter-from {
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
  static css = [sheet.target, fadeCSS, css.default ? css.default : css]

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

  transitionEnd: boolean
  transitionTimeout: number

  async transitionTo(tagName) {
    this.transitionEnd = false
    // 偶现，防止 o-transition 的 transitionEnd 事件不触发导致  await this.transition.leave() 执行完不执行下去
    this.transitionTimeout = setTimeout(async () => {
      if (!this.transitionEnd) {
        this.data.tagName = tagName
        this.update()
        await this.transition.enter()
        hideLoading()
        this.store.containerEl.scrollTop = 0
      }
    }, 500) // 500 大于 300 就可以，因为 transition: all 300ms ease-in;

    await this.transition.leave()

    this.transitionEnd = true
    clearTimeout(this.transitionTimeout)
    this.data.tagName = tagName
    this.update()
    // update 会执行 enter 动画所以手动enter没有必要
    // await this.transition.enter()
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

    this.store.routeTo = this.routeTo.bind(this)
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

    if (node) {
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

render(
  <my-app name="Omi"></my-app>,
  '#root',
  new Store({})
)
