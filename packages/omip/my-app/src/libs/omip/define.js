
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

  config.ready = function () {
    ins._weappRef = this
  }

  config.$usedState && config.$usedState.forEach(prop => {
    if(!config.data || (config.data && !config.data.hasOwnProperty(prop))){
      config.properties[prop] = null
    }
  })
  
  Component(config)
}
