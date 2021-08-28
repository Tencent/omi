import { WeElement } from 'omi'
import { genNavTree, NavTree } from './nav-tree'
import { getNotifications } from './service/notifications'
import { resetId } from './util/id'
import { route } from 'omi-router'
import type { I18nType, Language } from './modules/i18n'

class Store {
  i18n: I18nType
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
  _isInstalled: boolean
  tabs: {
    label?: string
    href?: string
    closable?: boolean
    id: number
  }[]
  tabsActiveIndex: number
  treeData: NavTree[]
  notifications: {
    id: number
    content?: string
    category?: string
    time?: string
    status: number
  }[]

  constructor(options) {
    this.i18n = options.i18n

    this.themeColor = '#07c160'

    this.installed = options.installed

    this.isLeftPanelClosed = window.innerWidth < 640

    this.ignoreAttrs = true

    this.ui = {}

    this.markdown = ''
    this.html = ''

    this.setLocale(this.i18n.locale, () => {
      this.tabs = [
        {
          label: this.i18n.t('Welcome'),
          href: '#/welcome',
          closable: false,
          id: 2
        }
      ]

      this.tabsActiveIndex = 0

      this.notifications = getNotifications()
    })

    this._isInstalled = false

    route.before = (evt) => {
      if (window.innerWidth <= 640) {
        this.closeLeftPanel()
      }
    }
  }

  setLocale(locale: Language, callback?: () => void) {
    resetId()
    this.i18n.setLocale(locale)
    callback && callback()
    this.treeData = genNavTree(this.i18n)

    this.tabs &&
      this.tabs.forEach((tab) => {
        tab.label = this.getTabLabelById(tab.id)
      })
  }

  getTabLabelById(id) {
    const node = this.treeData.find((node) => node.id === id)
    if (node) {
      return node.label
    } else {
      for (let i = 0, len = this.treeData.length; i < len; i++) {
        const tree = this.treeData[i]
        if (tree.children) {
          const childNode = tree.children.find(
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
