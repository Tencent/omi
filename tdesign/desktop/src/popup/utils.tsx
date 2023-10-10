import { Placement } from '@popperjs/core'
import { TdPopupProps } from './type'

const triggers = ['click', 'hover', 'focus', 'context-menu'] as const

function getPopperPlacement(placement: TdPopupProps['placement']) {
  return placement.replace(/-(left|top)$/, '-start').replace(/-(right|bottom)$/, '-end') as Placement
}

function attachListeners(elm: Element) {
  const offs: Array<() => void> = []
  return {
    add<K extends keyof HTMLElementEventMap>(type: K, listener: (ev: HTMLElementEventMap[K]) => void) {
      if (elm && type && listener) {
        elm.addEventListener(type, listener)
      }
      offs.push(() => () => {
        if (elm && type) {
          elm.removeEventListener(type, listener)
        }
      })
    },
    clean() {
      offs.forEach((handler) => handler?.())
      offs.length = 0
    },
  }
}

export { getPopperPlacement, attachListeners, triggers }
