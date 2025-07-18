import { render, signal, tag, Component, h, registerDirective } from '@/index'

const show = signal(true)

registerDirective(
  'transition',
  (dom: HTMLElement, options: { name: string; delay?: number }) => {
    const { name, delay = 0 } = options

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'show'
        ) {
          const show =
            dom.getAttribute('show') === 'true' ||
            dom.getAttribute('show') === '1' ||
            dom.props?.show
          updateClasses(dom, name, show, delay)
        }
      })
    })

    observer.observe(dom, { attributes: true })
    const show =
      dom.getAttribute('show') === 'true' ||
      dom.getAttribute('show') === '1' ||
      dom.props?.show
    updateClasses(dom, name, show, delay)
  },
)

function updateClasses(
  dom: HTMLElement,
  name: string,
  show: boolean,
  delay: number,
) {
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

@tag('my-el')
class MyEl extends Component {
  static css = `
:host{
  display: block;
}`

  render() {
    return <div>abc</div>
  }
}

@tag('my-app')
class MyAPP extends Component {
  static css = `
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
  transform: translateX(15px);
}

.fade-leave-active,
.fade-enter-active {
  transition: all 500ms ease-in;
}`

  installed() {
    setInterval(() => {
      show.value = !show.value
    }, 2000)
  }

  render() {
    return (
      <>
        <my-el
          show={show.value}
          o-transition={{
            name: 'fade',
            delay: 300,
          }}
        >
          aaaa
        </my-el>
      </>
    )
  }
}

render(<my-app />, document.body)
