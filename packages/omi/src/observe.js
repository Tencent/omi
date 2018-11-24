import JSONProxy from './proxy'
import { fireTick } from './tick'

export function observe(target) {
  target.observe = true
}

export function proxyUpdate(ele) {
  let timeout = null
  ele.data = new JSONProxy(ele.data).observe(false, info => {
    if (
      ele._willUpdate ||
      (info.op === 'replace' && info.oldValue === info.value)
    ) {
      return
    }

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      ele.update()
      fireTick()
    }, 0)
  })
}
