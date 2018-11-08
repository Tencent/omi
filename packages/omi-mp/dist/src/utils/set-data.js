export function setData(info) {
  Object.keys(info).forEach(key => {
    updateByPath(this.data, key, info[key])
  })
  console.log(this.data)
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
