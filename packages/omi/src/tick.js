const callbacks = []

export function tick(fn, scope) {
  callbacks.push({ fn, scope })
}

export function fireTick() {
  callbacks.forEach(item => {
    item.fn.call(item.scope)
  })
}
