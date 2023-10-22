import { render } from 'omi'
import './router-view'
import { Route, RouterView } from './router-view'

export class Router {
  el: RouterView

  constructor(options: { routes: Route[]; renderTo: string; store?: any }) {
    this.el = render(<router-view routes={options.routes} />, options.renderTo, options.store)
  }


  params: Record<string, unknown>  = {}
  query:  Record<string, unknown> = {} 
  hash: string = ''
  
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