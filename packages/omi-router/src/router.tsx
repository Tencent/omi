import { render } from 'omi'
import './router-view'
import { Route, RouterView } from './router-view'

type Module = { default: string }
type CSSItem = CSSStyleSheet | Module | string

export class Router {
  el: RouterView

  constructor(options: { routes: Route[]; renderTo: string, css?: CSSItem[] }) {
    this.el = render((
      <router-view
        onInstall={(evt: CustomEvent) => {
          // @ts-ignore
          evt.detail.constructor.css = options.css
        }}
        routes={options.routes}
      />
    ), options.renderTo)
  }

  params: Record<string, unknown> = {}
  query: Record<string, unknown> = {}
  hash: string = ''
  currentRoute: Route | null = null

  beforeEach(callback: Function) {
    this.el.beforeEach(callback)
  }

  afterEach(callback: Function) {
    this.el.afterEach(callback)
  }

  push(path: string) {
    this.el.push(path)
  }

  replace(path: string) {
    this.el.replace(path)
  }

  go(n: number) {
    this.el.go(n)
  }

  back() {
    this.el.back()
  }

  forward() {
    this.el.forward()
  }
}
