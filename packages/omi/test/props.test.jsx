import {
  define,
  render,
  Component,
  cloneElement,
  createRef,
  getHost,
  h
} from '@/index'
import { genNode } from './gen-node'

describe('props', () => {
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


  it('simple', () => {
    var valA, valB, valC, valD
    class Ele extends Component {
      receiveProps(prop, old) {

        valA = prop.a.b
        valB = old.a.b

        valC = prop.c
        valD = old.c
      }
      render() {
        return <div>{this.store.data.a}</div>
      }
    }

    define('my-ele99', Ele)
    class Ele100 extends Component {
      a = { b: 1 }
      c = 3
      installed() {
        this.c = 4
        this.a.b = 2
        this.update()
      }
      render() {
        return <div><my-ele99 a={this.a} c={this.c}></my-ele99></div>
      }
    }

    define('my-ele100', Ele100)

    render(<my-ele100 />, parentElement, {
      data: { a: 1 }
    })

    expect(valA).toBe(2)
    //same ref
    expect(valB).toBe(2)
    expect(valC).toBe(4)
    expect(valD).toBe(3)
  })

  it('receiveProps', () => {
    var valA, valB, valC, valD
    class Ele extends Component {
      receiveProps(prop, old) {

        valA = prop.c.a
        valB = old.c.a

      }
      render() {
        return <div>{this.store.data.a}</div>
      }
    }

    define('my-ele98', Ele)
    class Ele100 extends Component {
      a = { b: 1 }
      c = 3
      installed() {
        this.c = 4
        this.a.b = 2
        this.update()
      }
      render() {
        return <div><my-ele98 a={this.a} c={{ a: Math.random() }}></my-ele98></div>
      }
    }

    define('my-ele97', Ele100)


    render(<my-ele97 />, parentElement, {
      data: { a: 1 }
    })

    //diffient ref
    expect(valA === valB).toBe(false)
  })

  it('receiveProps2', () => {
    var valA, valB, valC, valD
    class Ele extends Component {
      receiveProps(prop, old) {

        valA = prop.c.a
        valB = old.c.a

      }
      render() {
        return <div>{this.store.data.a}</div>
      }
    }

    define('my-ele95', Ele)
    class Ele100 extends Component {
      c = { a: Math.random() }
      installed() {
        this.c.a = Math.random()
        this.update()
      }
      render() {
        return <div><my-ele95 c={this.c}></my-ele95></div>
      }
    }

    define('my-ele96', Ele100)


    render(<my-ele96 />, parentElement, {
      data: { a: 1 }
    })

    //same ref
    expect(valA === valB).toBe(true)
  })

  it('static props 1', () => {
    let a = true
    class Ele extends Component {
      static props = {
        count: {
          default: 1
        }
      }
      
      render(props) {
        return (
          <div>{props.count}</div>
        )
      }
    }
    let node = genNode()
    define(node.name, Ele)
    render(<Ele />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>1</div>')

  })

  it('static props 2', () => {
    let a = true
    class Ele extends Component {
      static props = {
        count: {
          default: 1,
        }
      }
      
      render(props) {
        return (
          <div>{props.count}</div>
        )
      }
    }
    let node = genNode()
    define(node.name, Ele)
    render(<Ele count={2} />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>2</div>')

  })

})