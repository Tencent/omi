import React from 'react'
import obaa from './obaa'
import {
  getPath,
  needUpdate,
  fixPath
} from './path'

const components = []
const patch = {}

export default function omis(options) {
  if (options.store) {
    omis.store = options.store
    obaa(omis.store.data, (prop, val, old, path) => {

      components.forEach(component => {

        patch[fixPath(path + '-' + prop)] = true

        if (component.__$updatePath_ && needUpdate(patch, component.__$updatePath_)) {
          component.forceUpdate()
        }
      })

    })
  }

  const updatePath = options.use ? getPath(options.use) : null

  return class extends React.Component {
    constructor(props) {
      super(props)
      components.push(this)
      this.__$updatePath_ = updatePath
    }

    render() {
      return options.render.apply(this, arguments)
    }
  }

}
