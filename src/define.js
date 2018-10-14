export function define(name, ctor) {
  customElements.define(name, ctor)
}

function getUpdatePath(data){
  const result = {}
  dataToPath(data, result)
  return result
}

function dataToPath(data, result){
  Object.keys(data).forEach(key => {
      result[key] = true
      const type = Object.prototype.toString.call(data[key])
      if(type === OBJECTTYPE){
          _dataToPath(data[key], key, result)
      } 
  })
}

function _dataToPath(data, path, result){
  Object.keys(data).forEach(key => {
      result[path+'.'+key] = true
      const type = Object.prototype.toString.call(data[key])
      if(type === OBJECTTYPE){
          _dataToPath(data[key], path+'.'+key, result)
      } 
  })
}