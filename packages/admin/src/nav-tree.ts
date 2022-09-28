import { getDocsList } from './components/docs/config'
import {
  getIntroductionNode,
  getThemeNode,
  getContribution
} from './components/components/docs/config'
import { genId } from './util/id'

import '@omiu/icon/smartphone'

export interface NavTree {
  id?: number
  label?: string
  sign?: string
  expanded?: boolean
  icon?: string
  color?: string
  selected?: boolean
  href?: string
  target?: string
  children?: NavTree[]
  [key: string]: any
}

interface ComponentChild {
  label: string
  icon?: string
  id: number
  href: string
}

export function genNavTree(i18n) {
  const navTree: NavTree[] = [
    {
      label: i18n.t('ManagerWorkbench'),
      expanded: true,
      id: genId(),
      children: [
        {
          sign: '💗',
          label: i18n.t('WelcomePage'),
          icon: 'emoji-people',
          // color: '#07c160',
          selected: true,
          href: '#/welcome',
          id: genId()
        },
        {
          label: i18n.t('Dashboard'),
          icon: 'pie-chart',
          href: '#/dashboard',
          id: genId()
        },
        {
          label: i18n.t('BasicList'),
          icon: 'grid-on',
          href: '#/basic-list',
          id: genId()
        },
        {
          label: i18n.t('Form'),
          expanded: true,
          id: genId(),
          href: '#/form',
          icon: 'list-alt'
        },
        {
          label: i18n.t('StepsForm'),
          expanded: true,
          id: genId(),
          href: '#/steps-form',
          icon: 'list-alt'
        },
        {
          label: i18n.t('MarkdownEditor'),
          icon: 'edit',
          href: '#/md-editor',
          id: genId()
        },
        {
          label: i18n.t('MasonryList'),
          expanded: true,
          id: genId(),
          href: '#/masonry-list',
          icon: 'dashboard'
        },
        {
          label: i18n.t('NotificationList'),
          expanded: true,
          id: genId(),
          href: '#/notification-list',
          icon: 'notifications'
        },
        {
          label: i18n.t('PersonalCenter'),
          expanded: true,
          id: genId(),
          href: '#/personal-center',
          icon: 'account-box'
        },
        {
          sign: '993',
          label: i18n.t('Comment'),
          icon: 'comment',
          href: '#/comment',
          id: genId()
        },

        {
          label: i18n.t('MindMap'),
          icon: 'ac-unit',
          href: '#/mind-map',
          id: genId()
        },
        {
          label: i18n.t('ExternalLink'),
          icon: 'insert-link',
          href: 'https://github.com/Tencent/omi',
          id: genId(),
          target: '_blank'
        },
        {
          label: i18n.t('MobileShow'),
          icon: 'smartphone',
          href: '#/mobile',
          id: genId()
        },
      ]
    },
    {
      label: i18n.t('Results'),
      expanded: true,
      id: genId(),

      children: [
        {
          label: i18n.t('Success'),
          // icon: 'error',
          href: '#/success',
          id: genId()
        },
        {
          label: i18n.t('Failure'),
          // icon: 'warning',
          href: '#/failure',
          id: genId()
        },
        {
          label: i18n.t('BrowserIncompatible'),
          id: genId(),
          href: '#/results/browser-incompatible'
        },
        {
          label: i18n.t('NetworkError'),
          id: genId(),
          href: '#/results/network-error'
        },
        {
          label: i18n.t('NotFound'),
          id: genId(),
          href: '#/results/not-found'
        },
        {
          label: i18n.t('PermissionDenied'),
          id: genId(),
          href: '#/results/permission-denied'
        },
        {
          label: i18n.t('ServerError'),
          id: genId(),
          href: '#/results/server-error'
        }
      ]
    },
    {
      label: i18n.t('Components'),
      expanded: true,
      id: genId(),

      children: [
        getIntroductionNode(),
        getThemeNode(),
        getContribution(),

        {
          label: i18n.t('MaterialIcons'),
          id: genId(),
          href: '#/icon'
          // icon: 'sentiment-satisfied-alt'
        }
      ]
    },

    {
      label: i18n.t('Chart'),
      expanded: true,
      id: genId(),

      children: []
    },
    {
      label: i18n.t('Others'),
      sign: '●',
      expanded: true,
      id: genId(),
      children: [
        {
          sign: '90020',
          label: i18n.t('Error'),
          icon: 'error',
          color: '#F56C6C',
          href: '#/error',
          id: genId()
        },
        {
          sign: '993',
          label: i18n.t('Warning'),
          icon: 'warning',
          color: '#E6A23C',
          href: '#/warning',
          id: genId()
        },
        ...getDocsList()

      ]
    },
    // {
    //   label: i18n.t('MarkdownDocs'),
    //   expanded: true,
    //   id: genId(),
    //   children: getDocsList()
    // },

    // {
    //   label: i18n.t('ManyThanksTo'),
    //   id: genId(),
    //   href: '#/thanks',
    //   icon: 'people-alt'
    // }
  ]

  const omiuComponents = [
    'tabs',
    'breadcrumb',
    'bottom-nav',
    'button',
    'badge',
    'checkbox',
    'card',
    'hamburger-menu',
    'slider',
    'input',
    'kanban',
    'loading',
    'link',
    'toast',
    'toggle-icon',
    'tag',
    'tree',
    'radio',
    'progress',
    'pagination',
    'cascader',
    'color-picker',
    'time-picker',
    'rate',
    'dialog',
    'avatar',
    'action-sheet',
    'switch',
    'collapse'
  ]

  omiuComponents.forEach((component) => {
    navTree[2].children.push({
      label: i18n.t(
        component
          .split('-')
          .map((str) => {
            return str[0].toUpperCase() + str.slice(1)
          })
          .join('')
      ),
      id: genId(),
      href: `#/${component}-component`
    })
  })

  navTree[2].children = navTree[2].children.concat([
    {
      label: i18n.t('BasicTable'),
      icon: 'grid-on',
      href: '#/table/basic',
      id: genId()
    },
    {
      label: i18n.t('TableDeleteAnimation'),
      icon: 'grid-on',
      href: '#/table/pagination',
      id: genId()
    },
    {
      label: i18n.t('InlineEditing'),
      icon: 'grid-on',
      href: '#/table/edit',
      id: genId()
    }
  ])

  const omiuChart = [
    'bar',
    'line',
    'scatter',
    'pie',
    'doughnut',
    'radar',
    'polar-area',
    'bubble',
    'barline'
  ]

  omiuChart.forEach((chart) => {
    navTree[3].children.push({
      label: i18n.t(
        chart
          .split('-')
          .map((str) => {
            return str[0].toUpperCase() + str.slice(1)
          })
          .join('')
      ),
      id: genId(),
      href: `#/${chart}-chart`
    })
  })

  return navTree
}
