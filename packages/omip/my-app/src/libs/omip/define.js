
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
    ins.install()
    ins.beforeRender && ins.beforeRender()
  }

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

  config.$usedState && config.$usedState.forEach(prop => {
    if(!config.data || (config.data && !config.data.hasOwnProperty(prop))){
      config.properties[prop] = null
    }
  })
  
  Component(config)
}
