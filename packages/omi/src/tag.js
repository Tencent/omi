import { define } from "./define"
import WeElement from './we-element'

const FUNCTION = "function"

export function tag(name, pure) {
  if (typeof pure === FUNCTION) {
    if (window.Reflect === undefined) {
      throw 'Do not use pure element in browsers that do not support Reflect.'
    }

    function CustomElement() {
      return Reflect.construct(WeElement, [], CustomElement)
    }

    CustomElement.pure = true
    CustomElement.prototype.render = pure
    Object.setPrototypeOf(CustomElement.prototype, WeElement.prototype)
    Object.setPrototypeOf(CustomElement, WeElement)

    customElements.define(name, CustomElement)
  } else {
    return function (target) {
      target.pure = pure
      define(name, target)
    }
  }
}