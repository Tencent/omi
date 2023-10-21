import { pathToRegexp, Key } from 'path-to-regexp'
import { tag, Component, render } from 'omi'
import './router-view'

export class Router {
  constructor(options) {
    this.el = render(<router-view routes={options.routes} />, options.renderTo, options.store)
  }

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