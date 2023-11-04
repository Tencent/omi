import { registerDirective, Component } from 'omi'

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout | null
  return function (...args: any[]) {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args)
    }, wait)
  }
}

registerDirective('transition', (dom: HTMLElement | Component, options: { name: string; delay?: number }) => {
  const { name, delay = 0 } = options
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'show') {
        const show =
          dom.getAttribute('show') === 'true' ||
          dom.getAttribute('show') === '1' ||
          (dom as Component<{ show: boolean }>).props?.show
        updateClasses(dom, name, show, delay)
      }
    })
  })

  observer.observe(dom, { attributes: true })

  const onTransitionEnd = () => {
    dom.classList.remove(name + '-enter-active')
    dom.classList.remove(name + '-leave-active')
  }

  dom.addEventListener('transitionend', debounce(onTransitionEnd, 0))
  dom.addEventListener('animationend', debounce(onTransitionEnd, 0))

  const show =
    dom.getAttribute('show') === 'true' ||
    dom.getAttribute('show') === '1' ||
    (dom as Component<{ show: boolean }>).props?.show

  updateClasses(dom, name, show, delay)
})

function updateClasses(dom: HTMLElement, name: string, show: boolean, delay: number) {
  if (show) {
    dom.classList.remove(name + '-leave-to')
    dom.classList.remove(name + '-leave-active')
    dom.classList.add(name + '-enter-from')
    requestAnimationFrame(() => {
      setTimeout(() => {
        dom.classList.remove(name + '-enter-from')
        dom.classList.add(name + '-enter-to')
        dom.classList.add(name + '-enter-active')
      }, 1 + delay)
    })
  } else {
    dom.classList.remove(name + '-enter-to')
    dom.classList.remove(name + '-enter-active')
    dom.classList.add(name + '-leave-from')
    requestAnimationFrame(() => {
      setTimeout(() => {
        dom.classList.remove(name + '-leave-from')
        dom.classList.add(name + '-leave-to')
        dom.classList.add(name + '-leave-active')
      }, 1 + delay)
    })
  }
}
