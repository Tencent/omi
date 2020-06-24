import { obaa } from './obaa'
import { getPath, needUpdate, fixPath } from './path'
import createLogger from './plugins/logger'

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
        if (key !== 'replaceState') {
          removeItem(this, store[key].components)
          removeItem(this, store[key].updateSelfComponents)
        }
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
  store._subscribers = []

  if (store.logPlugin) {
    store.plugins = store.plugins
      ? [...store.plugins, createLogger()]
      : [createLogger()]
  }

  // 启动插件
  const { plugins = [] } = store
  if (plugins.length) {
    plugins.forEach(plugin => plugin(store))
  }

  // 非 window 环境下不需要观察数据
  if (typeof window === 'undefined') return

  obaa(store.data, (prop, val, old, path) => {
    const patch = {}

    patch[fixPath(path + '-' + prop)] = true

    store._subscribers.forEach(sub =>
      sub({ type: path + '-' + prop, value: val }, store.data)
    )

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
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1)
      break
    }
  }
}

export function render(app, renderTo, initStore, options) {
  if (!Vue) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line
      console.error(
        '[Omiv] has not been installed yet. Vue.use(Omiv) should be called first.'
      )
    }
    return
  }
  // fix: 如果是在子节点通过 $ 注入的 store， 在 根实例中拿不到 $store
  initStore = initStore || store
  reset(initStore)

  return new Vue(
    Object.assign(
      {
        render: h => h(app)
      },
      options,
      initStore ? { store: initStore } : {}
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
  } else {
    // 为了测试用例正确执行的特殊处理，测试用例中多次执行 Omiv.render
    // 导致 store 变量存储的是上一个用例的 store，使得再次调用 Omiv.render(Component, '#app')
    // 不传 store 的时候，会被污染，导致用例执行异常。正常项目中应该不会走到这里的逻辑。
    store = undefined
  }
}

// Vue.use 会判断是否重复安装
export function install(_Vue) {
  Vue = _Vue
  applyMixin(Vue)
}

function applyMixin(Vue) {
  const omivComputed = {
    $state() {
      if (isMultiStore) {
        let state = {}
        Object.keys(this.$store).forEach(k => {
          state[k] = store[k].data
        })
        return state
      }
      return this.$store.data
    }
  }

  function omivInit() {
    const options = this.$options
    const use = options.use
    const useSelf = options.useSelf

    // TODO: 可能要处理一下在不同地方注入多个 store ？

    if (options.store) {
      this.$store =
        typeof options.store === 'function' ? options.store() : options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }

    // 在 ssr 中用于替换 store
    if (this.$store && !this.$store.replaceState) {
      this.$store.replaceState = (store = {}) => {
        Object.keys(store).forEach(key => {
          // 过滤观察字段
          if (!key.startsWith('_')) {
            this.$store.data[key] = store[key]
          }
        })
      }
    }

    // 修复不是在 main.js 中注入 store 的问题
    if (this.$store && !store) {
      reset(this.$store)
    }

    if (isMultiStore) {
      if (use) {
        let updatePath = {}
        for (let storeName in use) {
          getPath(use[storeName], updatePath, storeName)
          this.$store[storeName].components.push(this)
        }
        this.__$updatePath_ = updatePath
      }

      if (useSelf) {
        let updateSelfPath = {}
        for (let storeName in useSelf) {
          getPath(useSelf[storeName], updateSelfPath, storeName)
          this.$store[storeName].updateSelfComponents.push(this)
        }
        this.__$updateSelfPath_ = updateSelfPath
      }
    } else {
      if (use) {
        // { count: true }
        this.__$updatePath_ = getPath(use)
        // 依赖 store 的组件，压入了一个 vm 实例
        this.$store.components.push(this)
      }
      if (useSelf) {
        this.__$updateSelfPath_ = getPath(useSelf)
        this.$store.updateSelfComponents.push(this)
      }
    }
  }

  function omivDestroyed() {
    if (this.$store) { //防止其他组件库 this.$store undefined 进入 omivDestroyed 报错
      if (isMultiStore) {
        for (let key in this.$store) {
          if (key !== 'replaceState') {
            removeItem(this, this.$store[key].components)
            removeItem(this, this.$store[key].updateSelfComponents)
          }
        }
      } else {
        removeItem(this, this.$store.updateSelfComponents)
        removeItem(this, this.$store.components)
      }
    }
  }

  Vue.mixin({
    beforeCreate: omivInit,
    computed: omivComputed,
    destroyed: omivDestroyed
  })
}
