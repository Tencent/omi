import React from 'react'
import { obaa } from './obaa'
import { getPath, needUpdate, fixPath } from './path'

const components = []
const updateSelfComponents = []

let isSelf = false
let currentComponent = null

export function $(options) {
  if (options.store) {
    $.store = options.store
    obaa($.store.data, (prop, val, old, path) => {
      const patch = {}

      patch[fixPath(path + '-' + prop)] = true
      components.forEach(component => {
        if (
          component.__$updatePath_ &&
          needUpdate(patch, component.__$updatePath_)
        ) {
          component.setState({ __$id_: component.state.__$id_++ })

          isSelf = false
        }
      })

      updateSelfComponents.forEach(component => {
        if (
          component.__$updateSelfPath_ &&
          needUpdate(patch, component.__$updateSelfPath_)
        ) {
          component.setState({ __$id_: component.state.__$id_++ })
          isSelf = true
          currentComponent = component
        }
      })
    })
  }

  const updatePath = options.use && getPath(options.use)
  const updateSelfPath = options.useSelf && getPath(options.useSelf)

  return class extends React.Component {
    state = {
      __$id_: 0
    }

    constructor(props) {
      super(props)
      if (updatePath) {
        components.push(this)
        this.__$updatePath_ = updatePath
      }
      if (updateSelfPath) {
        updateSelfComponents.push(this)
        this.__$updateSelfPath_ = updateSelfPath
      }
    }

    shouldComponentUpdate() {
      if (currentComponent === this) return true
      return !isSelf
    }

    componentWillUnmount() {
      for (let i = 0, len = components.length; i < len; i++) {
        if (components[i] === this) {
          components.splice(i, 1)
          break
        }
      }

      for (let i = 0, len = updateSelfComponents.length; i < len; i++) {
        if (updateSelfComponents[i] === this) {
          updateSelfComponents.splice(i, 1)
          break
        }
      }
    }  

    render() {
      return options.render.apply(this, arguments)
    }
  }
}
