import { obaa } from './obaa'
import { getPath, needUpdate, fixPath } from './path'

let Vue
let store
let isMultiStore = false

export function $(options) {
  const beforeCreate = options.beforeCreate
  const destroyed = options.destroyed
  const use = options.use
  const useSelf = options.useSelf
  options.computed = options.computed || {}

  if (options.store) {
    reset(options.store)
  }

  options.beforeCreate = function () {
    this.$store = store
    if (isMultiStore) {
      if (use) {
        let updatePath = {}
        for (let storeName in use) {
          getPath(use[storeName], updatePath, storeName)
          store[storeName].components.push(this)
        }
        this.__$updatePath_ = updatePath
      }

      if (useSelf) {
        let updateSelfPath = {}
        for (let storeName in useSelf) {
          getPath(useSelf[storeName], updateSelfPath, storeName)
          store[storeName].updateSelfComponents.push(this)
        }
        this.__$updateSelfPath_ = updateSelfPath
      }
    } else {
      if (use) {
        this.__$updatePath_ = getPath(use)
        store.components.push(this)
      }
      if (useSelf) {
        this.__$updateSelfPath_ = getPath(useSelf)
        store.updateSelfComponents.push(this)
      }
    }
    beforeCreate && beforeCreate.apply(this, arguments)
  }

  options.destroyed = function () {
    if (isMultiStore) {
      for (let key in store) {
        removeItem(this, store[key].components)
        removeItem(this, store[key].updateSelfComponents)
      }
    } else {
      removeItem(this, store.updateSelfComponents)
      removeItem(this, store.components)
    }

    destroyed && destroyed.apply(this, arguments)
  }

  options.computed.state = function () {
    if (isMultiStore) {
      let state = {}
      Object.keys(store).forEach(k => {
        state[k] = store[k].data
      })
      return state
    }
    return store.data
  }

  options.computed.store = function () {
    return store
  }

  return options
}

function recUpdate(root) {
  root.$forceUpdate()
  root.$children.forEach(child => {
    recUpdate(child)
  })
}

function observe(store, storeName) {
  store.components = []
  store.updateSelfComponents = []

  obaa(store.data, (prop, val, old, path) => {
    const patch = {}

    patch[fixPath(path + '-' + prop)] = true
    store.components.forEach(component => {
      const p = component.__$updatePath_
      if (storeName) {
        if (p && p[storeName] && needUpdate(patch, p[storeName])) {
          recUpdate(component)
        }
      } else if (p && needUpdate(patch, p)) {
        recUpdate(component)
      }
    })

    store.updateSelfComponents.forEach(component => {
      const sp = component.__$updateSelfPath_
      if (storeName) {
        if (sp && sp[storeName] && needUpdate(patch, sp[storeName])) {
          component.$forceUpdate()
        }
      } else if (sp && needUpdate(patch, sp)) {
        component.$forceUpdate()
      }
    })
  })
}

function removeItem(item, arr) {
  for (let i = 0, len = arr.length;i < len;i++) {
    if (arr[i] === item) {
      arr.splice(i, 1)
      break
    }
  }
}

export function render(app, renderTo, store, options) {
  reset(store)
  if (!Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[Omiv] has not been installed yet. Vue.use(Omiv) should be called first.'
      )
    }
    return
  }
  new Vue(
    Object.assign(
      {
        render: h => h(app)
      },
      options,
      store ? { store } : {}
    )
  ).$mount(renderTo)
}

export function reset(s) {
  if (s) {
    store = s
    if (store.data) {
      isMultiStore = false
      observe(store)
    } else {
      isMultiStore = true
      for (let key in store) {
        if (store[key].data) {
          observe(store[key], key)
        }
      }
    }
  }
}

export function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[omiv] already installed. Vue.use(Omiv) should be called only once.'
      )
    }
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}

function applyMixin(Vue) {
  Vue.mixin({ beforeCreate: omivInit });

  function omivInit() {
    const options = this.$options;
    if (options.store) {
      this.$store =
        typeof options.store === "function" ? options.store() : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}
