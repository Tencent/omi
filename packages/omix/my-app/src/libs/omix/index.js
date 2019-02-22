
import { h } from './h'

function define() {

}

class Component {
  constructor() {
    this.a = 1
  }
}


const WeElement = Component





function getGlobal() {
  if (
    typeof global !== 'object' ||
    !global ||
    global.Math !== Math ||
    global.Array !== Array
  ) {
    return (
      self ||
      window ||
      global ||
      (function () {
        return this
      })()
    )
  }
  return global
}

const root = getGlobal()
const mapping = {}
let config = {}

const definePage = function (name, ctor, path) {
  mapping[path] = {
    name,
    ctor
  }
}
const defineApp = function (a, b) {
  const ins = new b()
  config = ins.config
}

function render() {

}

root.Omi = {
  define,
  Component,
  WeElement,
  render,
  h,
  definePage,
  defineApp

}
root.omi = root.Omi
root.omix = root.Omi
root.Omix = root.Omi
root.create = {
  Page: function (options) {
    console.log(options)
    Page({})
  }
}

root.getOptions = function (path) {
  return mapping[path]
}

export {
  define,
  Component,
  WeElement,
  render,
  h,
  definePage,
  defineApp
}

export default {
  define,
  Component,
  WeElement,
  render,
  h,
  definePage,
  defineApp
}
