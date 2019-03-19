
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
    ins._weappRef = this
    config.$$refs.forEach(ref => {
      if (ref.type === 'component') {
        if (ref.fn) {
          ref.fn(this.selectComponent('#' + ref.id))
        } else {
          ins[ref.refName] = this.selectComponent('#' + ref.id)
        }
      }
    })
    ins.props = this.properties
    ins.install()
    ins.beforeRender && ins.beforeRender()
  }

  config.properties = ctor.properties

  Object.keys(ctor.properties).forEach(key => {
    ctor.properties[key].observer = function (newVal, oldVal, changedPath) {
      ins.props[key] = newVal
      ins._createData()
    }
  })

  config.attached = function () {

  }

  config.moved = function () {

  }

  config.ready = function () {
    ins.installed()
  }

  config.detached = function () {
    ins.uninstall()
  }

  config.data = ins._createData()

  Component(config)
}
