import isString from 'lodash/isString'
export const removeDom = (el: HTMLElement) => {
  if (el.remove) {
    el.remove()
  } else {
    // ie
    el.parentNode.removeChild(el)
  }
}

export const getAttach = (node: any, triggerNode?: any): HTMLElement => {
  const attachNode = typeof node === 'function' ? node(triggerNode) : node
  if (!attachNode) {
    return document.body
  }
  if (isString(attachNode)) {
    return document.querySelector(attachNode)
  }
  if (attachNode instanceof HTMLElement) {
    return attachNode
  }
  return document.body
}
