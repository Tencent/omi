import JSONProxy from './proxy'
import { fireTick } from './tick'

export function observe(target) {
  target.observe = true
}

let idMap = {}
let elements = []

export function proxyUpdate(ele) {
  let timeout = null
  ele.data = new JSONProxy(ele.data).observe(false, info => {
    if (!idMap[ele.__elementId]) {
      idMap[ele.__elementId] = true
      elements.push(ele)
      clearTimeout(timeout)

      timeout = setTimeout(() => {
        updateElements()
      }, 0)
    }
  })
}

function updateElements() {
  elements.forEach(ele => {
    ele.update()
  })
  fireTick()
  elements.length = 0
  idMap = {}
}
