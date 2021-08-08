import { getDocsList } from './components/docs/config'
import { WeElement } from 'omi'
import { getIntroductionNode, getThemeNode } from './components/components/docs/config'
import { genId } from './id'

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

      this.notifications = [
        {
          id: 1,
          content: '【换换口味】8月6日中午员工餐厅上新宫保鸡丁，欢迎品尝！',
          category: '餐厅动态',
          time: '2021-8-6 10:00',
          status: 1
        },
        {
          id: 2,
          content: '【国家电网线下签约仪式】今天于南山中心举行，请提前15分钟前往会议中心签到！',
          category: '会议通知',
          time: '2021-8-6 15:00',
          status: 1
        },
        {
          id: 3,
          content: '【OMIG-后端开发-胡来】申请8月7日下午请假半天-理由:陪孩子参加幼儿园亲子运动会。',
          category: '部门消息',
          time: '2021-8-7 12:00',
          status: 0
        },
        {
          id: 4,
          content: '【时间调整】8月6日起，餐厅打烊时间调整为晚9点！',
          category: '餐厅动态',
          time: '2021-8-7 10:00',
          status: 1
        },
        {
          id: 5,
          content: '【技术开放签约仪式】今天于线上腾讯会议举行，会议信息详见邮件通知！',
          category: '会议通知',
          time: '2021-8-7 15:00',
          status: 0
        },
        {
          id: 6,
          content: '【OMIG-前端开发-郭靖】申请8月8日下午请假半天-理由:送老丈人去机场。',
          category: '部门消息',
          time: '2021-8-7 12:00',
          status: 0
        },
        {
          id: 7,
          content: '腾讯大楼一期改造施工项目 已通过审核！',
          category: '合同动态',
          time: '2021-8-8 9:00',
          status: 1
        },
        {
          id: 8,
          content: '三季度生产原材料采购项目 开票成功！',
          category: '票务动态',
          time: '2021-8-8 10:00',
          status: 0
        },
        {
          id: 9,
          content: '【OMI conf】于8月10日下午2:00线下举行，活动信息详见邮件通知！',
          category: '活动备忘',
          time: '2021-8-8 15:00',
          status: 0
        },
        {
          id: 10,
          content: '【OMIG  Q3 All hands meeting】在8月9日下午企鹅中心一楼举行，请提前15分钟现场签到！',
          category: '部门消息',
          time: '2021-8-8 7:00',
          status: 1
        }
      ]
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
          id: genId(),
          icon: 'ac-unit-outlined',

          children: [
            {
              sign: 'M',
              label: localeMap.base.WelcomePage,
              icon: 'emoji-people',
              color: '#07c160',
              selected: true,
              href: '#/welcome',
              id: genId()
            },

            {
              label: localeMap.base.Dashboard,
              icon: 'pie-chart',
              href: '#/dashboard',
              id: genId()
            },

            {
              label: localeMap.base.BasicTable,
              icon: 'grid-on',
              href: '#/table/basic',
              id: genId()
            },
            {
              label: localeMap.base.TableDeleteAnimation,
              icon: 'grid-on',
              href: '#/table/pagination',
              id: genId()
            },
            {
              label: localeMap.base.InlineEditing,
              icon: 'grid-on',
              href: '#/table/edit',
              id: genId()
            },
            {
              label: localeMap.base.Form,
              expanded: true,
              id: genId(),
              href: '#/form',
              icon: 'list-alt'
            },
            {
              label: localeMap.base.StepForm,
              expanded: true,
              id: genId(),
              href: '#/step-form',
              icon: 'list-alt'
            },
            {
              label: localeMap.base.MarkdownEditor,
              icon: 'grid-on',
              href: '#/md-editor',
              id: genId()
            },
            {
              label: localeMap.base.MasonryList,
              expanded: true,
              id: genId(),
              href: '#/masonry-list',
              icon: 'dashboard'
            },
            {
              label: localeMap.base.NotificationList,
              expanded: true,
              href: '#/notification-list',
              icon: 'grid-on',
              id: 29
            }
          ]
        },
        {
          label: localeMap.base.Results,
          expanded: true,
          id: genId(),
          icon: 'ac-unit-outlined',

          children: [
            {
              label: localeMap.base.BrowserIncompatible,
              id: genId(),
              icon: 'ac-unit-outlined',
              href: '#/results/browser-incompatible'
            },
            {
              label: localeMap.base.NetworkError,
              id: genId(),
              icon: 'ac-unit-outlined',
              href: '#/results/network-error'
            },
            {
              label: localeMap.base.NotFound,
              id: genId(),
              icon: 'ac-unit-outlined',
              href: '#/results/not-found'
            },
            {
              label: localeMap.base.PermissionDenied,
              id: genId(),
              icon: 'ac-unit-outlined',
              href: '#/results/permission-denied'
            },
            {
              label: localeMap.base.ServerError,
              id: genId(),
              icon: 'ac-unit-outlined',
              href: '#/results/server-error'
            }
          ]
        },
        {
          label: localeMap.base.Components,
          expanded: true,
          id: genId(),
          icon: 'ac-unit-outlined',

          children: [
            getIntroductionNode(locale, localeMap),
            getThemeNode(locale, localeMap),
            {
              label: localeMap.base.MaterialIcons,
              expanded: true,
              id: genId(),
              href: '#/icon',
              // icon: 'sentiment-satisfied-alt'
            },
            {
              label: localeMap.base.Loading,
              id: genId(),
              icon: 'ac-unit-outlined',
              href: '#/loading-component'
            },
            {
              label: localeMap.base.Toast,
              id: genId(),
              icon: 'ac-unit-outlined',
              href: '#/toast-component'
            },
            {
              label: localeMap.base.Card,
              id: genId(),
              icon: 'ac-unit-outlined',
              href: '#/card-component'
            },
            {
              label: localeMap.base.Slider,
              id: genId(),
              icon: 'ac-unit-outlined',
              href: '#/slider-component'
            }
          ]
        },
        {
          label: localeMap.base.Others,
          sign: '●',
          expanded: true,
          id: genId(),
          icon: 'ac-unit-outlined',
          children: [
            {
              sign: '90020',
              label: localeMap.base.Error,
              icon: 'error',
              color: '#F56C6C',
              href: '#/error',
              id: genId()
            },
            {
              sign: '993',
              label: localeMap.base.Warning,
              icon: 'warning',
              color: '#E6A23C',
              href: '#/warning',
              id: genId()
            },
            {
              sign: '993',
              label: localeMap.base.Comment,
              icon: 'comment',
              href: '#/comment',
              id: genId()
            },
            {
              label: localeMap.base.ExternalLink,
              icon: 'insert-link',
              href: 'https://github.com/Tencent/omi',
              id: genId(),
              target: '_blank'
            },
            {
              label: localeMap.base.MindMap,
              icon: 'ac-unit',
              href: '#/mind-map',
              id: genId()
            }
          ]
        },
        {
          label: localeMap.base.MarkdownDocs,
          expanded: true,
          id: genId(),
          icon: 'ac-unit-outlined',
          children: getDocsList(localeMap)
        },


        {
          label: localeMap.base.ManyThanksTo,
          id: genId(),
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
