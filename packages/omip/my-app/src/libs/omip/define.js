const version = wx.getSystemInfoSync().SDKVersion

export function define(name, ctor) {
  const ins = new ctor
  const config = {
    properties: {

    },
    methods: {

    }
  }
  Object.keys(ins).forEach(key => {
    if (typeof ins[key] === 'function') {
      config.methods[key] = ins[key]
    } else {
      config[key] = ins[key]
    }
  })

  config.created = function () {
    ins.$scope = this
    config.$$refs.forEach(ref => {
      if (ref.type === 'component') {
        if (ref.fn) {
          ref.fn(this.selectComponent('#' + ref.id))
        } else {
          ins[ref.refName] = this.selectComponent('#' + ref.id)
        }
      }
    })
    //ins.props = this.properties
  }

  config.properties = ctor.properties

  //todo https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html
  //基础库 v2.6.1 使用 数据监听器
  if (compareVersion(version, '2.6.1') >= 0) {
    config.observers = {}
    Object.keys(ctor.properties).forEach(key => {
      config.observers[key] = function (newVal) {
        ins.props[key] = newVal
        ins.update()
      }
    })
  } else {
    Object.keys(ctor.properties).forEach(key => {
      ctor.properties[key].observer = function (newVal, oldVal, changedPath) {
        ins.props[key] = newVal
        ins.update()
      }
    })
  }

  config.attached = function () {
    //ins.props = this.properties
    ins.install.call(ins)
    ins.update()
  }

  config.moved = function () {

  }

  config.ready = function () {
    ins.installed()
  }

  config.detached = function () {
    ins.uninstall()
  }

  Component(config)
}

function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}
