import { pathToRegexp, Key } from 'path-to-regexp'
import { tag, Component, mixin } from 'omi'

// 先保证有 router 属性挂在 this 上
mixin({
  router: null,
})

export interface Route {
  path: string
  render?: Function
  beforeEnter?: Function
  meta?: object
  transition?: string
  keys?: Key[]
  regex?: RegExp
  redirect?: string
}

interface Props {
  routes: Route[]
  base?: string
}

@tag('router-view')
export class RouterView extends Component<Props> {
  currentRoute: Route | null = null
  routes: Route[] = []
  beforeEachCallback: Function | undefined
  afterEachCallback: Function | undefined
  isHashMode: boolean = true

  params: Record<string, unknown> = {}
  query: Record<string, unknown> = {}
  hash: string = ''
  base: string = ''

  install() {
    // 修改组件内部的 this.router 为当前 router-view 的实例
    mixin({
      router: this,
    })
    this.base = this.props.base || ''

    this.routes = this.props.routes.map((route) => {
      const keys: Key[] = []
      if (route.render) {
        route.render = route.render.bind(this)
      }
      if (route.path === '*') {
        return { ...route, regex: /(.*)/ }
      }
      const regex = pathToRegexp(route.path, keys)
      return { ...route, keys, regex }
    })

    window.onpopstate = (event) => {
      this.matchAndRender(this.getRoutePath())
    }

    this.matchAndRender(this.getRoutePath())
  }

  getRoutePath() {
    return this.isHashMode ? window.location.hash.split('?')[0].replace('#', '') || '/' : window.location.pathname
  }

  getQueryPath() {
    return this.isHashMode ? window.location.hash.split('?')[1] : window.location.search
  }

  beforeEach(callback: Function) {
    // 返回 false 以取消导航
    // return false
    // 返回一个字符串以进行导航
    // return '/login'
    this.beforeEachCallback = callback
  }

  afterEach(callback: Function) {
    this.afterEachCallback = callback
  }

  push(path: string) {
    history.pushState({}, '', this.isHashMode ? `#${path}` : path)
    this.matchAndRender(path)
  }

  replace(path: string) {
    history.replaceState({}, '', path)
    this.matchAndRender(path)
  }

  go(n: number) {
    history.go(n)
  }

  back() {
    history.back()
  }

  forward() {
    history.forward()
  }

  private matchAndRender(path: string) {
    for (const route of this.routes) {
      const match = route.regex?.exec(path)
      if (match) {
        if (route.redirect) {
          if (this.isHashMode) {
            window.location.hash = route.redirect
          } else {
            const newPath = this.base + route.redirect
            window.location.href = window.location.origin + newPath
          }
          return
        }
        if (route.beforeEnter) {
          const shouldProceed = route.beforeEnter({ path }, { path: window.location.pathname })
          if (shouldProceed === false) {
            return
          }
        }
        this.currentRoute = route
        // 解析路径参数
        this.params = {}
        route.keys?.forEach((key, index) => {
          this.params![key.name]! = match[index + 1]
        })

        // 解析查询参数
        const params = new URLSearchParams(this.getQueryPath())
        this.query = {}
        Array.from(params.entries()).forEach(([key, value]) => {
          this.query[key] = value
        })
        // 获取哈希值
        this.hash = window.location.hash

        if (this.afterEachCallback) {
          this.afterEachCallback({ path }, { path: window.location.pathname })
        }
        this.update()
        break
      }
    }
  }

  render() {
    return this.currentRoute && this.currentRoute.render ? this.currentRoute.render(this) : null
  }
}
