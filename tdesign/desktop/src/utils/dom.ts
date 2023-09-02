import raf from 'raf'

import { easeInOutCubic, EasingFunction } from '../utils/easing'
import { AttachNode, AttachNodeReturnValue } from '../common'
// 用于判断是否可使用 dom
export const canUseDocument = !!(typeof window !== 'undefined' && window.document && window.document.createElement)

// 获取 css vars
export const getCssVarsValue = (name: string, element?: HTMLElement) => {
  if (!canUseDocument) return

  const el = element || document.documentElement
  return getComputedStyle(el).getPropertyValue(name)
}

function isWindow(obj: any) {
  return obj && obj === obj.window
}

type ScrollTarget = HTMLElement | Window | Document

export function getScroll(target: ScrollTarget, isLeft?: boolean): number {
  // node环境或者target为空
  if (typeof window === 'undefined' || !target) {
    return 0
  }
  const method = isLeft ? 'scrollLeft' : 'scrollTop'
  let result = 0
  if (isWindow(target)) {
    result = (target as Window)[isLeft ? 'pageXOffset' : 'pageYOffset']
  } else if (target instanceof Document) {
    result = target.documentElement[method]
  } else if (target) {
    result = (target as HTMLElement)[method]
  }
  return result
}

interface ScrollTopOptions {
  container?: ScrollTarget
  duration?: number
  easing?: EasingFunction
}

export const scrollTo = (target: number, opt: ScrollTopOptions) => {
  const { container = window, duration = 450, easing = easeInOutCubic } = opt
  const scrollTop = getScroll(container)
  const startTime = Date.now()
  return new Promise((res) => {
    const fnc = () => {
      const timestamp = Date.now()
      const time = timestamp - startTime
      const nextScrollTop = easing(Math.min(time, duration), scrollTop, target, duration)
      if (isWindow(container)) {
        ;(container as Window).scrollTo(window.pageXOffset, nextScrollTop)
      } else if (container instanceof HTMLDocument || container.constructor.name === 'HTMLDocument') {
        ;(container as HTMLDocument).documentElement.scrollTop = nextScrollTop
      } else {
        ;(container as HTMLElement).scrollTop = nextScrollTop
      }
      if (time < duration) {
        raf(fnc)
      } else {
        // 由于上面步骤设置了 scrollTop, 滚动事件可能未触发完毕
        // 此时应该在下一帧再执行 res
        raf(res)
      }
    }
    raf(fnc)
  })
}

export function getAttach(attach: AttachNode, triggerNode?: HTMLElement): AttachNodeReturnValue {
  if (!canUseDocument) return null

  let el: AttachNodeReturnValue
  if (typeof attach === 'string') {
    el = document.querySelector(attach)
  }
  if (typeof attach === 'function') {
    el = attach(triggerNode)
  }
  if (typeof attach === 'object' && attach instanceof window.HTMLElement) {
    el = attach
  }

  // fix el in iframe
  if (el && el.nodeType === 1) return el

  return document.body
}

export const addClass = function (el: Element, cls: string) {
  if (!el) return
  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ` ${clsName}`
    }
  }
  if (!el.classList) {
    // eslint-disable-next-line
    el.className = curClass
  }
}

const trim = (str: string): string => (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')

export const removeClass = function (el: Element, cls: string) {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ` ${el.className} `

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(` ${clsName} `, ' ')
    }
  }
  if (!el.classList) {
    // eslint-disable-next-line
    el.className = trim(curClass)
  }
}

export function hasClass(el: Element, cls: string) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  }
  return ` ${el.className} `.indexOf(` ${cls} `) > -1
}
