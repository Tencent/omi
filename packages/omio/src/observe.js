import obaa from '../obaa'
import { fireTick } from './tick'

export function proxyUpdate(ele) {
  let timeout = null
  obaa(ele.data, () => {
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
