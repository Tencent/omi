import { WeElement } from 'omi'
import { genNavTree, NavTree } from './nav-tree'
import { getNotifications } from './service/notifications'
import { resetId } from './util/id'
import { route } from 'omi-router'
import type { Language } from './modules/i18n'
import { i18n } from './index'

class Store {
  themeColor: string
  installed: (store: Store) => void
  locale: Language
  isLeftPanelClosed: boolean
  ignoreAttrs: boolean
  ui: {
    baseLayout?: WeElement
    myApp?: WeElement
  }
  markdown: string
  html: string
  isInstalled: boolean
  tabs: {
    label?: string
    href?: string
    closable?: boolean
    id: number
  }[]
  tabsActiveIndex: number
  treeData: NavTree
  notifications: {
    id: number
    content?: string
    category?: string
    time?: string
    status: number
  }[]

  constructor(options) {
    this.themeColor = '#07c160'

    this.installed = options.installed
    this.locale = options.locale

    this.isLeftPanelClosed = window.innerWidth < 640

    this.ignoreAttrs = true

    this.ui = {}

    this.markdown = ''
    this.html = ''

    this.setLocals(this.locale, () => {
      this.tabs = [
        {
          label: i18n.t('Welcome'),
          href: '#/welcome',
          closable: false,
          id: 2
        }
      ]

      this.tabsActiveIndex = 0

      this.notifications = getNotifications()
    })

    this.isInstalled = false

    route.before = (evt) => {
      if (window.innerWidth <= 640) {
        this.closeLeftPanel()
      }
    }
  }

  setLocals(locale: Language, callback?) {
    resetId()

    this.locale = locale
    i18n.setLocale(locale)

    callback && callback()

    this.treeData = genNavTree()

    this.tabs.forEach((tab) => {
      tab.label = this.getTabLabelById(tab.id)
    })

    if (!this.isInstalled) {
      this.installed(this)
      this.isInstalled = true
    } else {
      this.ui.myApp.update()
    }
  }

  getTabLabelById(id) {
    const node = this.treeData.find((node) => node.id === id)
    if (node) {
      return node.label
    } else {
      for (let i = 0, len = this.treeData.length; i < len; i++) {
        if (this.treeData[i].children) {
          const childNode = this.treeData[i].children.find(
            (childNode) => childNode.id === id
          )
          if (childNode) {
            return childNode.label
          }
        }
      }
    }
  }

  toggleLeftPanel() {
    this.isLeftPanelClosed = !this.isLeftPanelClosed
    this.ui.baseLayout.update()
  }

  openLeftPanel() {
    this.isLeftPanelClosed = false
    this.ui.baseLayout.update()
  }

  closeLeftPanel() {
    this.isLeftPanelClosed = true
    this.ui.baseLayout.update()
  }

  selectTreeNodeById(id) {
    this.treeData.forEach((node) => {
      this.deselect(node, id)
    })
  }

  deselect(node, id) {
    node.selected = false
    node.children &&
      node.children.forEach((child) => {
        child.selected = false
        this.deselect(child, id)
      })

    if (node.id === id) {
      node.selected = true
    }
  }
}

export default Store
