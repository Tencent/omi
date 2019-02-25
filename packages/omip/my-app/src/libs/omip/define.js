
export function define(name, ctor) {
  const ins = new ctor
  const config = {}
  Object.keys(ins).forEach(key => {
    config[key] = ins[key]
  })

  config.ready = function () {
    ins._weappRef = this
  }

  config.properties = {

  }
  config.$usedState.forEach(prop => {
    config.properties[prop] = null
  })
  
  Component(config)
}
