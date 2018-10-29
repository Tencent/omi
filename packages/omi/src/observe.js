import JSONProxy from './proxy'

export function observe(target) {
  target.observable = true
}

export function proxyUpdate(ele) {
  let timeout = null
  ele.data = new JSONProxy(ele.data).observe(false, () => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      ele.update()
    }, 16.6)
  })
}
