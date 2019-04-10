import { define } from 'omi'

let defineEl = define
if (global && global.Omi && global.Omi.defineApp) {
  defineEl = global.Omi.defineApp
} else {
  defineEl = define
}

export default function () {
  return function (Element) {
    // if (Element instanceof WeElement) {
    const name = Element.name.replace(/([A-Z])/g, '-$1').substr(1).toLowerCase()
    defineEl(name, Element)
  }
}
