import { define } from 'omi'

let defineEl = define
if (global && global.Omi && global.Omi.definePage) {
  defineEl = global.Omi.definePage
} else {
  defineEl = define
}

export default function (v) {
  return function (Element) {
    // if (Element instanceof WeElement) {
    const name = Element.name.replace(/([A-Z])/g, '-$1').substr(1).toLowerCase()
    defineEl(name, Element, v)
  }
}
