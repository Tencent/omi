const components = []

export function $v(options) {

  const beforeCreate = options.beforeCreate
  const destroyed = options.destroyed
  options.beforeCreate = function () {
    components.push(this)
    beforeCreate && beforeCreate.apply(this, arguments)
  }
  options.destroyed = function () {
    for (let i = 0, len = components.length; i < len; i++) {
      if (components[i] === this) {
        components.splice(i, 1)
        break
      }
    }

    destroyed && destroyed.apply(this, arguments)
  }
}

