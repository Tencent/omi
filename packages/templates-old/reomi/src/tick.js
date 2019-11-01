const callbacks = []
const nextTickCallback = []

export function tick(fn, scope) {
  callbacks.push({ fn, scope })
}

export function fireTick() {
  callbacks.forEach(item => {
    item.fn.call(item.scope)
  })

  nextTickCallback.forEach(nextItem => {
    nextItem.fn.call(nextItem.scope)
  })
  nextTickCallback.length = 0
}

export function nextTick(fn, scope) {
  nextTickCallback.push({ fn, scope })
}
