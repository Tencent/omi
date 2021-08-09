import { WeElement } from 'omi'
import { genNavTree } from './nav-tree'
import { getNotifications } from './notifications'
import { resetId } from './util/id'

interface treeNode {
  id: number
  label: string
  sign?: string
  expanded?: boolean
  icon?: string
  color?: string
  selected?: boolean
  href?: string
  target?: string
  children?: treeNode[]
}

class Store {
  themeColor: string
  installed: (store: Store) => void
  locale: 'en' | 'zh'
  isLeftPanelClosed: boolean
  ignoreAttrs: boolean
  ui: {
    baseLayout?: WeElement
    myApp?: WeElement
  }
  markdown: string
  html: string
  localeMap: {
    base?: {
      Welcome: string
    }
  }
  isInstalled: boolean
  tabs: {
    label?: string
    href?: string
    closable?: boolean
    id: number
  }[]
  tabsActiveIndex: number
  treeData: treeNode[]
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

    this.localeMap = {}

    this.setLocals(this.locale, () => {
      this.tabs = [
        {
          label: this.localeMap.base.Welcome,
          href: '#/welcome',
          closable: false,
          id: 2
        }
      ]

      this.tabsActiveIndex = 0

      this.notifications = getNotifications()
    })

    this.isInstalled = false
  }

  setLocals(locale, callback?) {
    resetId()
    this.locale = locale
    import(`./l10n/${locale}/base.ts`).then((localeMap) => {
      this.localeMap = localeMap

      callback && callback()

      this.treeData = genNavTree(localeMap, locale)

      this.tabs.forEach((tab) => {
        tab.label = this.getTabLabelById(tab.id)
      })

      if (!this.isInstalled) {
        this.installed(this)
        this.isInstalled = true
      } else {
        this.ui.myApp.update()
      }
    })
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
