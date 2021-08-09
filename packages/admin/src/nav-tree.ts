import { getDocsList } from './components/docs/config'
import {
  getIntroductionNode,
  getThemeNode
} from './components/components/docs/config'
import { genId } from './util/id'

export function genNavTree(localeMap, locale) {
  return [
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
        }
      ]
    },
    {
      label: localeMap.base.Results,
      expanded: true,
      id: genId(),

      children: [
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
        {
          label: localeMap.base.Button,
          id: genId(),
          href: '#/button',
          // icon: 'sentiment-satisfied-alt'
        },
        {
          label: localeMap.base.MaterialIcons,
          id: genId(),
          href: '#/icon'
          // icon: 'sentiment-satisfied-alt'
        },
        {
          label: localeMap.base.Loading,
          id: genId(),
          href: '#/loading-component'
        },
        {
          label: localeMap.base.Toast,
          id: genId(),
          href: '#/toast-component'
        },
        {
          label: localeMap.base.Card,
          id: genId(),
          href: '#/card-component'
        },
        // 待完善再显示
        {
          label: localeMap.base.Slider,
          id: genId(),
          href: '#/slider-component'
        },

        {
          label: localeMap.base.Progress,
          id: genId(),
          href: '#/progress-component'
        },
        // 待优化
        {
          label: localeMap.base.Timepicker,
          id: genId(),
          href: '#/time-picker-component',
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
}
