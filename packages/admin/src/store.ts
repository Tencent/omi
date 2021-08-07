import { getDocsList } from './components/docs/config'
import { WeElement } from 'omi'
import { getIntroductionNode, getThemeNode } from './components/components/docs/config'

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
    })

    this.isInstalled = false
  }

  setLocals(locale, callback?) {
    this.locale = locale
    import(`./l10n/${locale}/base.ts`).then((localeMap) => {
      this.localeMap = localeMap

      callback && callback()

      this.treeData = [
        {
          label: localeMap.base.ManagerWorkbench,
          sign: '●',
          expanded: true,
          id: 1,
          icon: 'ac-unit-outlined',

          children: [
            {
              sign: 'M',
              label: localeMap.base.WelcomePage,
              icon: 'emoji-people',
              color: '#07c160',
              selected: true,
              href: '#/welcome',
              id: 2
            },

            {
              label: localeMap.base.Dashboard,
              icon: 'pie-chart',
              href: '#/dashboard',
              id: 3
            },

            {
              label: localeMap.base.BasicTable,
              icon: 'grid-on',
              href: '#/table/basic',
              id: 4
            },
            {
              label: localeMap.base.TableDeleteAnimation,
              icon: 'grid-on',
              href: '#/table/pagination',
              id: 5
            },
            {
              label: localeMap.base.InlineEditing,
              icon: 'grid-on',
              href: '#/table/edit',
              id: 6
            },
            {
              label: localeMap.base.Form,
              expanded: true,
              id: 7,
              href: '#/form',
              icon: 'list-alt'
            },
            {
              label: localeMap.base.MarkdownEditor,
              icon: 'grid-on',
              href: '#/md-editor',
              id: 8
            },
            {
              label: localeMap.base.MasonryList,
              expanded: true,
              id: 9,
              href: '#/masonry-list',
              icon: 'dashboard'
            }
          ]
        },
        {
          label: localeMap.base.Results,
          expanded: true,
          id: 10,
          icon: 'ac-unit-outlined',

          children: [
            {
              label: localeMap.base.BrowserIncompatible,
              id: 11,
              icon: 'ac-unit-outlined',
              href: '#/results/browser-incompatible'
            },
            {
              label: localeMap.base.NetworkError,
              id: 12,
              icon: 'ac-unit-outlined',
              href: '#/results/network-error'
            },
            {
              label: localeMap.base.NotFound,
              id: 13,
              icon: 'ac-unit-outlined',
              href: '#/results/not-found'
            },
            {
              label: localeMap.base.PermissionDenied,
              id: 14,
              icon: 'ac-unit-outlined',
              href: '#/results/permission-denied'
            },
            {
              label: localeMap.base.ServerError,
              id: 15,
              icon: 'ac-unit-outlined',
              href: '#/results/server-error'
            }
          ]
        },
        {
          label: localeMap.base.Components,
          expanded: true,
          id: 16,
          icon: 'ac-unit-outlined',

          children: [
            getIntroductionNode(locale, localeMap),
            getThemeNode(locale,localeMap),
            {
              label: localeMap.base.MaterialIcons,
              expanded: true,
              id: 17,
              href: '#/icon',
              // icon: 'sentiment-satisfied-alt'
            },
            {
              label: localeMap.base.Loading,
              id: 18,
              icon: 'ac-unit-outlined',
              href: '#/loading-component'
            },
            {
              label: localeMap.base.Toast,
              id: 19,
              icon: 'ac-unit-outlined',
              href: '#/toast-component'
            },
            {
              label: localeMap.base.Card,
              id: 20,
              icon: 'ac-unit-outlined',
              href: '#/card-component'
            },
            {
              label: localeMap.base.Slider,
              id: 21,
              icon: 'ac-unit-outlined',
              href: '#/slider-component'
            }
          ]
        },
        {
          label: localeMap.base.Others,
          sign: '●',
          expanded: true,
          id: 22,
          icon: 'ac-unit-outlined',
          children: [
            {
              sign: '90020',
              label: localeMap.base.Error,
              icon: 'error',
              color: '#F56C6C',
              href: '#/error',
              id: 23
            },
            {
              sign: '993',
              label: localeMap.base.Warning,
              icon: 'warning',
              color: '#E6A23C',
              href: '#/warning',
              id: 24
            },
            {
              sign: '993',
              label: localeMap.base.Comment,
              icon: 'comment',
              href: '#/comment',
              id: 25
            },
            {
              label: localeMap.base.ExternalLink,
              icon: 'insert-link',
              href: 'https://github.com/Tencent/omi',
              id: 26,
              target: '_blank'
            },
            {
              label: localeMap.base.MindMap,
              icon: 'ac-unit',
              href: '#/mind-map',
              id: 27
            }
          ]
        },
        {
          label: localeMap.base.MarkdownDocs,
          expanded: true,
          id: 6,
          icon: 'ac-unit-outlined',
          children: getDocsList(localeMap)
        },
       
        
        {
          label: localeMap.base.ManyThanksTo,
          id: 28,
          href: '#/thanks',
          icon: 'people-alt'
        },
      ]

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
        const childNode = this.treeData[i].children.find(
          (childNode) => childNode.id === id
        )
        if (childNode) {
          return childNode.label
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
