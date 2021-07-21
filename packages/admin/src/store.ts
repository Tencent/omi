import { getDocsList } from './components/docs/config'
import { WeElement } from 'omi'

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
  localeMap: {}
  isInstalled: boolean
  tabs: {}[]
  tabsActiveIndex: number
  treeData: {}[]

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

    this.setLocals(this.locale)
    this.isInstalled = false
  }

  setLocals(locale) {
    this.locale = locale
    import(`./l10n/${locale}/base.ts`).then(localeMap => {

      this.localeMap = localeMap
      this.tabs = [{
        label: localeMap.base.Welcome,
        href: "#/welcome",
        closable: false,
        id: 2
      }]
      this.tabsActiveIndex = 0

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
              label: localeMap.base.BasicTable,
              icon: 'grid-on',
              href: '#/table/basic',
              id: 4,
            },
            {
              label: localeMap.base.TableDeleteAnimation,
              icon: 'grid-on',
              href: '#/table/pagination',
              id: 5,
            },

            {
              label: localeMap.base.Form,
              expanded: true,
              id: 9,
              href: '#/form',
              icon: 'list-alt'

            },
            {
              label: localeMap.base.MaterialIcons,
              expanded: true,
              id: 10,
              href: '#/icon',
              icon: 'sentiment-satisfied-alt'
            }
          ]
        },
        {
          label: localeMap.base.Others,
          sign: '●',
          expanded: true,
          id: 6,
          icon: 'ac-unit-outlined',
          children: [
            {
              sign: '90020',
              label: localeMap.base.Error,
              icon: 'error',
              color: '#F56C6C',
              href: '#/error',
              id: 7,
            },
            {
              sign: '993',
              label: localeMap.base.Warning,
              icon: 'warning',
              color: '#E6A23C',
              href: '#/warning',
              id: 8,
            },
            {
              sign: '993',
              label: localeMap.base.Comment,
              icon: 'comment',
              href: '#/comment',
              id: 120,
            },
            {
              label: localeMap.base.ExternalLink,
              icon: 'insert-link',
              href: 'https://github.com/Tencent/omi',
              id: 119,
              target: '_blank'
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
          label: localeMap.base.Components,
          expanded: true,
          id: 11,
          icon: 'ac-unit-outlined',
          children: [{
            label: localeMap.base.Loading,
            id: 12,
            icon: 'ac-unit-outlined',
            href: '#/loading-component',
          }, {
            label: localeMap.base.Toast,
            id: 13,
            icon: 'ac-unit-outlined',
            href: '#/toast-component',
          }]
        }
      ]

      if (!this.isInstalled) {
        this.installed(this)
        this.isInstalled = true
      } else {
        this.ui.myApp.update()
      }
    })
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
    this.treeData.forEach(node => {
      this.deselect(node, id)
    })
  }

  deselect(node, id) {
    node.selected = false
    node.children && node.children.forEach(child => {
      child.selected = false
      this.deselect(child, id)
    })

    if (node.id === id) {
      node.selected = true
    }
  }
}


export default Store
