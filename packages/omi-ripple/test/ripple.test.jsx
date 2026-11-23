import { define, Component, h } from 'omi'
import '@/index'

const tick = () => new Promise((resolve) => setTimeout(resolve, 20))

define(
  'test-ripple-host',
  class extends Component {
    color = 'red'
    label = 'ripple'
    render() {
      return (
        <button id='target' o-ripple={{ color: this.color }}>
          {this.label}
        </button>
      )
    }
  },
)

describe('o-ripple directive', () => {
  let host, root, target

  const rippleStyles = () =>
    Array.from(root.querySelectorAll('style')).filter((style) => style.textContent.includes('.ripple')).length

  const ripples = () => target.querySelectorAll('.ripple')

  const finishRippleAnimations = () => {
    ripples().forEach((ripple) => ripple.dispatchEvent(new Event('animationend')))
  }

  beforeEach(async () => {
    document.body.innerHTML = ''
    host = document.createElement('test-ripple-host')
    document.body.appendChild(host)
    await tick()
    root = host.shadowRoot || host
    target = root.querySelector('#target')
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should make the host positioned and inject the stylesheet once', () => {
    expect(target.style.position).toBe('relative')
    expect(rippleStyles()).toBe(1)
  })

  it('should create one ripple per click with the configured color', async () => {
    target.click()
    await tick()

    expect(ripples().length).toBe(1)
    expect(ripples()[0].style.backgroundColor).toBe('red')
  })

  it('should remove the ripple when its animation ends', async () => {
    target.click()
    await tick()
    expect(ripples().length).toBe(1)

    finishRippleAnimations()
    await tick()

    expect(ripples().length).toBe(0)
  })

  it('should not inject the stylesheet again when the directive is applied again', async () => {
    host.label = 'updated'
    host.update()
    await tick()

    expect(rippleStyles()).toBe(1)
  })

  it('should not bind another click listener when the directive is applied again', async () => {
    target.click()
    await tick()
    finishRippleAnimations()
    await tick()
    expect(ripples().length).toBe(0)

    host.label = 'updated'
    host.update()
    await tick()

    target.click()
    await tick()

    expect(ripples().length).toBe(1)
  })

  it('should use the latest color after the directive is applied again', async () => {
    host.color = 'blue'
    host.label = 'updated'
    host.update()
    await tick()

    target.click()
    await tick()

    expect(ripples()[0].style.backgroundColor).toBe('blue')
  })
})
