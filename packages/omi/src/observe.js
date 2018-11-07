import JSONProxy from './proxy'

export function observe(target) {
  target.observe = true
}


export function proxyUpdate(ele) {
  let timeout = null
  ele.data = new JSONProxy(ele.data).observe(false, info => {
    if (info.oldValue === info.value) {
      return
    }

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      ele.update()
    }, 16.6)
  })
}
