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
          <button ref={e => this.btn = e} onClick={this.onClick}>{this.a}</button>
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
        return (
          <node.name onMyEvent={this.onMyEvent}></node.name>
        )
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

        this.btn.click()
      }

      render() {
        return (
          <button ref={e => this.btn = e} onClick={this.onClick}>{this.a}</button>
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
        return (
          <node.name onMyEvent={this.onMyEvent}></node.name>
        )
      }
    }
    const app = genNode()
    define(app.name, App)


    render(<app.name />, parentElement)

    expect(result).toBe(2)
  })
})
