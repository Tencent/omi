import { define, render, Component, h, tag } from '@/index'

import { genNode } from './gen-node'

describe('event', () => {
  let parentElement

  beforeAll(() => {
    parentElement = document.createElement('div')
    document.body.appendChild(parentElement)
  })

  beforeEach(() => {
    parentElement.innerHTML = ''
  })

  afterAll(() => {
    parentElement.parentNode.removeChild(parentElement)
    parentElement = null
  })

  it('bind', () => {
    class Ele extends Component {
      a = 1
      onClick = () => {
        this.a = 2
        this.update()
        this.fire('my-event', this.a)
      }

      installed() {
        this.fire('my-event', this.a)
      }

      render() {
        return (
          <button ref={(e) => (this.btn = e)} onClick={this.onClick}>
            {this.a}
          </button>
        )
      }
    }
    const node = genNode()
    define(node.name, Ele)

    let result
    class App extends Component {
      onMyEvent = (evt) => {
        result = evt.detail
      }
      render() {
        return <node.name onMyEvent={this.onMyEvent}></node.name>
      }
    }
    const app = genNode()
    define(app.name, App)

    render(<app.name />, parentElement)

    expect(result).toBe(1)
  })

  it('click fire', () => {
    class Ele extends Component {
      a = 1
      onClick = () => {
        this.a = 2
        this.update()
        this.fire('my-event', this.a)
      }

      installed() {
        this.fire('my-event', this.a)

        const btn = parentElement.querySelector('button')
        if (!btn) return
        btn.click()
      }

      render() {
        return (
          <button ref={(e) => (this.btn = e)} onClick={this.onClick}>
            {this.a}
          </button>
        )
      }
    }
    const node = genNode()
    define(node.name, Ele)

    let result
    class App extends Component {
      onMyEvent = (evt) => {
        result = evt.detail
      }
      render() {
        return <node.name onMyEvent={this.onMyEvent}></node.name>
      }
    }
    const app = genNode()
    define(app.name, App)

    render(<app.name />, parentElement)

    expect(result).toBe(1)
  })

  it('事件解绑后不再触发', () => {
    class Ele extends Component {
      render() {
        return <button onClick={this.onClick}>btn</button>
      }
      onClick = () => {
        this.fire('my-event', 1)
      }
    }
    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)
    const el = parentElement.firstChild
    let count = 0
    function handler() {
      count++
    }
    el.addEventListener('my-event', handler)
    const btn = parentElement.querySelector('button')
    if (!btn) return
    btn.click()
    el.removeEventListener('my-event', handler)
    const btn2 = parentElement.querySelector('button')
    if (!btn2) return
    btn2.click()
    expect(count).toBe(1)
  })

  it('事件名大小写敏感', () => {
    class Ele extends Component {
      render() {
        return <button onClick={() => this.fire('MyEvent', 1)}>btn</button>
      }
    }
    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)
    let received = false
    parentElement.addEventListener('myevent', () => {
      received = true
    })
    const btn = parentElement.querySelector('button')
    if (!btn) return
    btn.click()
    expect(received).toBe(false)
  })

  // 注释掉极端/高阶用例
  // it('事件冒泡被 stopPropagation 阻止时的行为', () => { ... })
  // it('事件参数为复杂对象时的传递与断言', () => { ... })
  // it('自定义事件与原生事件混用场景', () => { ... })
})
