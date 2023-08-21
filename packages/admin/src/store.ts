import { WeElement } from 'omi'
import { genNavTree, NavTree } from './nav-tree'
import { getNotifications } from './service/notifications'
import { resetId } from './util/id'
import { route } from 'omi-router'
import { setTheme } from '@omiu/common'

import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'


class Store {

  themeColor: string
  installed: (store: Store) => void
  isLeftPanelClosed: boolean
  ignoreAttrs: boolean
  ui: {
    baseLayout?: WeElement
    myApp?: WeElement
  }
  markdown: string
  html: string
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

    // this.themeColor = '#07c160'
    this.themeColor = '#13C395'

    setTheme('primary', this.themeColor)
    this.installed = options.installed

    this.isLeftPanelClosed = window.innerWidth < 640

    this.ui = {}
    this.treeData = []
    this.tabs = []
    this.markdown = ''
    this.html = ''

    this.setLocale('en', () => {
      this.tabs = [
        {
          label: i18next.t('Welcome'),
          href: '#/welcome',
          closable: false,
          id: 2
        }
      ]

      this.tabsActiveIndex = 0

      this.notifications = getNotifications()
    })

    route.before = (evt) => {
      if (window.innerWidth <= 640) {
        this.closeLeftPanel()
      }
    }
  }

  async setLocale(locale, callback?: () => void) {
    resetId()

    await i18next
      .use(resourcesToBackend((language, namespace, callback) => {
        import(`./i18n/${locale}/base.ts`)
          .then((resources) => {
            callback(null, resources.base.translation)
          })
          .catch((error) => {
            callback(error, null)
          })
      }))
      .init({
        lng: locale
      })
    // .then(() => {
    //   console.log(i18next.t('ManagerWorkbench'))
    // })

    callback && callback()
    this.treeData = genNavTree(i18next)

    this.tabs &&
      this.tabs.forEach((tab) => {
        tab.label = this.getTabLabelById(tab.id)
      })

    this.ui.myApp.update()

    if (location.hash) {
      this.routeTo(location.hash)
    }
  }

  routeTo(hash) {

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
