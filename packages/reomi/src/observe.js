import JSONProxy from './proxy'
import { fireTick } from './tick'

export function observe(target) {
  target.observe = true
}

export function proxyUpdate(ele) {
  let timeout = null
  ele.data = new JSONProxy(ele.data).observe(false, () => {
    if (ele._willUpdate) {
      return
    }
    if (ele.constructor.mergeUpdate) {
      clearTimeout(timeout)

      timeout = setTimeout(() => {
        ele.update()
        fireTick()
      }, 0)
    } else {
      ele.update()
      fireTick()
    }
  })
}
