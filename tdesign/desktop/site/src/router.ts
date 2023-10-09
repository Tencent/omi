import { WeElement } from 'omi'
import { route } from 'omi-router'
import getMetaData from './meta'

/**
 * demo components:
  - 通过把组件名加入到 `components` 数组中，可以自动注册 demo 路由
  - demo 的入口文件为 `./components/web/${componentName}/index.tsx`
 */
const components = [
  'button',
  'icon',
  'link',
  'divider',
  'space',
  'input',
  'input-adornment',
  'slider',
  'textarea',
  'comment',
  'rate',
  'alert',
  'message',
  'notification',
  'popup',
  'dropdown',
  'list',
  'back-top',
  'grid',
  'loading',
  'avatar',
  'card',
  'tag',
  'tag-input',
  'drawer',
  'image',
  'switch',
  'progress',
  'badge',
  'skeleton',
  'timeline',
]

export function registerRouting(rootEl: any) {
  route('/', () => {
    import('../docs/overview').then(() => {
      rootEl.data.tagName = 'page-overview'
      rootEl.update()
    })
  })

  route('/welcome', () => {
    import('../docs/overview').then(() => {
      rootEl.data.tagName = 'page-overview'
      rootEl.update()
    })
  })

  components.map((componentName: string) =>
    route(`/${componentName}`, () => {
      import(`./components/web/${componentName}/index.tsx`).then(() => {
        rootEl.data.tagName = `page-${componentName}`
        rootEl.data.pageName = componentName
        const metaData = getMetaData(componentName)
        rootEl.data.pageTitle = metaData.title
        rootEl.data.pageDescription = metaData.description
        rootEl.update()
      })
    }),
  )

  route('*', function () {
    console.log('not found')
  })
}
