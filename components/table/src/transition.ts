
export async function enter(el, effect, delay?: number) {
  return new Promise((resolve) => {


    el.classList.remove(effect + '-leave-active')
    el.classList.remove(effect + '-leave-to')
    el.classList.add(effect + '-enter-from')
    el.classList.add(effect + '-enter-active')

    const callback = function () {
      el.classList.remove(effect + '-enter-active')
      resolve(1)
    }
    once(el, 'transitionend', callback)
    once(el, 'animationend', callback)

    window.setTimeout(function () {
      el.classList.remove(effect + '-enter-from')
      el.classList.add(effect + '-enter-to')
    }, delay)

  })
}

export async function leave(el, effect, delay?: number) {
  return new Promise((resolve) => {

    el.classList.remove(effect + '-enter-active')
    el.classList.remove(effect + '-enter-to')
    el.classList.add(effect + '-leave-from')
    el.classList.add(effect + '-leave-active')

    const callback = function (e) {

      el.classList.remove(effect + '-leave-active')

      // if (autoRemove && el.parentNode) {
      //   el.parentNode.removeChild(el)
      // }

      resolve(1)
    }

    once(el, 'transitionend', callback)
    once(el, 'animationend', callback)

    window.setTimeout(function () {
      el.classList.remove(effect + '-leave-from')
      el.classList.add(effect + '-leave-to')
    }, delay)

  })
}

function once(el, name, callback) {
  const wrapCall = function () {
    this.removeEventListener(name, wrapCall)
    callback()
  }.bind(el)
  el.addEventListener(name, wrapCall)
}