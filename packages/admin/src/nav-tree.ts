import { getDocsList } from './components/docs/config'
import {
  getIntroductionNode,
  getThemeNode,
  getContribution
} from './components/components/docs/config'
import { genId } from './util/id'

interface NavTree {
  label?: string
  expanded?: boolean
  id?: number
  children?: NavTree[]
  [key: string]: any
}

interface ComponentChild {
  label: string
  icon?: string
  id: number
  href: string
}

export function genNavTree(localeMap, locale) {
  const navTree: NavTree = [
    {
      label: localeMap.base.ManagerWorkbench,
      expanded: true,
      id: genId(),
      children: [
        {
          sign: '💗',
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
          label: localeMap.base.BasicList,
          icon: 'grid-on',
          href: '#/basic-list',
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
          label: localeMap.base.StepsForm,
          expanded: true,
          id: genId(),
          href: '#/steps-form',
          icon: 'list-alt'
        },
        {
          label: localeMap.base.MarkdownEditor,
          icon: 'edit',
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
          id: genId(),
          href: '#/notification-list',
          icon: 'notifications'
        },
        {
          label: localeMap.base.PersonalCenter,
          expanded: true,
          id: genId(),
          href: '#/personal-center',
          icon: 'account-box'
        }
      ]
    },
    {
      label: localeMap.base.Results,
      expanded: true,
      id: genId(),

      children: [
        {
          label: localeMap.base.Success,
          // icon: 'error',
          href: '#/success',
          id: genId()
        },
        {
          label: localeMap.base.Failure,
          // icon: 'warning',
          href: '#/failure',
          id: genId()
        },
        {
          label: localeMap.base.BrowserIncompatible,
          id: genId(),
          href: '#/results/browser-incompatible'
        },
        {
          label: localeMap.base.NetworkError,
          id: genId(),
          href: '#/results/network-error'
        },
        {
          label: localeMap.base.NotFound,
          id: genId(),
          href: '#/results/not-found'
        },
        {
          label: localeMap.base.PermissionDenied,
          id: genId(),
          href: '#/results/permission-denied'
        },
        {
          label: localeMap.base.ServerError,
          id: genId(),
          href: '#/results/server-error'
        }
      ]
    },
    {
      label: localeMap.base.Components,
      expanded: true,
      id: genId(),

      children: [
        getIntroductionNode(locale, localeMap),
        getThemeNode(locale, localeMap),
        getContribution(locale, localeMap),

        {
          label: localeMap.base.MaterialIcons,
          id: genId(),
          href: '#/icon'
          // icon: 'sentiment-satisfied-alt'
        }
      ]
    },
    {
      label: localeMap.base.Others,
      sign: '●',
      expanded: true,
      id: genId(),
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
      children: getDocsList(localeMap)
    },

    {
      label: localeMap.base.ManyThanksTo,
      id: genId(),
      href: '#/thanks',
      icon: 'people-alt'
    }
  ]

  const omiuComponents = [
    'button',
    'card',
    'slider',
    'loading',
    'toast',
    'tag',
    'progress',
    'cascader',
    'timepicker'
    // 'rate'
  ]

  omiuComponents.forEach((component) => {
    navTree[2].children.push({
      label: localeMap.base[component[0].toUpperCase() + component.slice(1)],
      id: genId(),
      href: `#/${component}-component`
    })
  })

  navTree[2].children = navTree[2].children.concat([
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
    }
  ])

  return navTree
}
