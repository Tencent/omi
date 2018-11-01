import JSONProxy from './proxy'

export function observe(target) {
  target.observe = true
}

let preValue = null
let prePath = null
let preEle = null

export function proxyUpdate(ele) {
  let timeout = null
  ele.data = new JSONProxy(ele.data).observe(false, info => {
    if (preValue === info.value && prePath === info.path && preEle === ele) {
      return
    }

    preValue = info.value
    prePath = info.path
    preEle = ele
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      ele.update()
    }, 16.6)
  })
}
