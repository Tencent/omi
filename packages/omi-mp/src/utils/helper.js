export function setData(info) {
  Object.keys(info).forEach(key => {
    updateByPath(this.data, key, info[key])
  })
  this.update()
}

function updateByPath(origin, path, value) {
  const arr = path
    .replace(/]/g, '')
    .replace(/\[/g, '.')
    .split('.')
  let current = origin
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i === len - 1) {
      current[arr[i]] = value
    } else {
      current = current[arr[i]]
    }
  }
}

export function fixProps(properties){
  let props = {}
  for(let key in properties){
    if(properties[key].hasOwnProperty('value')){
      props[key] = properties[key].value
    }
  }
  return props
}

// 代理input
export function helpInputEvent(fn, e){
  if(!e.detail){
    Object.defineProperty(e,'detail',{
      value: {},
      writable: false,
      configurable : true
    });
  }

  Object.defineProperty(e.detail,'value',{
    value: e.target.value,
    writable: false,
    configurable : true
  });

  fn && fn(e)
}
