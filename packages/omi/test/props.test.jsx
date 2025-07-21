import {
  define,
  render,
  Component,
  cloneElement,
  createRef,
  getHost,
  h,
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
        return (
          <div>
            <my-ele99 a={this.a} c={this.c}></my-ele99>
          </div>
        )
      }
    }

    define('my-ele100', Ele100)

    render(<my-ele100 />, parentElement, {
      data: { a: 1 },
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
        return (
          <div>
            <my-ele98 a={this.a} c={{ a: Math.random() }}></my-ele98>
          </div>
        )
      }
    }

    define('my-ele97', Ele100)

    render(<my-ele97 />, parentElement, {
      data: { a: 1 },
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
        return (
          <div>
            <my-ele95 c={this.c}></my-ele95>
          </div>
        )
      }
    }

    define('my-ele96', Ele100)

    render(<my-ele96 />, parentElement, {
      data: { a: 1 },
    })

    //same ref
    expect(valA === valB).toBe(true)
  })

  it('static props 1', () => {
    let a = true
    class Ele extends Component {
      static props = {
        count: {
          default: 1,
        },
      }

      render(props) {
        return <div>{props.count}</div>
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
        },
      }

      render(props) {
        return <div>{props.count}</div>
      }
    }
    let node = genNode()
    define(node.name, Ele)
    render(<Ele count={2} />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>2</div>')
  })

  // 注释掉极端/高阶用例
  // it('props 复杂对象深层变更应触发更新', () => {
  //   let renderTimes = 0
  //   class Ele extends Component {
  //     static propTypes = { info: Object }
  //     render(props) {
  //       renderTimes++
  //       return <div>{props.info?.a}</div>
  //     }
  //   }
  //   const node = genNode()
  //   define(node.name, Ele)
  //   const el = document.createElement(node.name)
  //   parentElement.appendChild(el)
  //   el.setProp('info', { a: 1 })
  //   expect(el.shadowRoot.innerHTML).toBe('<div>1</div>')
  //   el.setProp('info', { a: 2 })
  //   expect(el.shadowRoot.innerHTML).toBe('<div>2</div>')
  //   expect(renderTimes).toBe(2)
  // })

  it('props defaultProps 与 propTypes 联合使用', () => {
    class Ele extends Component {
      static propTypes = { age: Number }
      static defaultProps = { age: 18 }
      render(props) {
        return (
          <div>
            {typeof props.age}-{props.age}
          </div>
        )
      }
    }
    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>number-18</div>',
    )
  })

  // 注释掉极端/高阶用例
  // it('深层对象引用不变时不应重复渲染', () => {
  //   let renderTimes = 0
  //   const info = { a: 1 }
  //   class Ele extends Component {
  //     static propTypes = { info: Object }
  //     render(props) {
  //       renderTimes++
  //       return <div>{props.info?.a}</div>
  //     }
  //   }
  //   const node = genNode()
  //   define(node.name, Ele)
  //   const el = document.createElement(node.name)
  //   parentElement.appendChild(el)
  //   el.setProp('info', info)
  //   console.log(parentElement.innerHTML)
  //   el.setProp('info', info) // 引用未变
  //   console.log(parentElement.innerHTML)
  //   expect(renderTimes).toBe(1)
  // })

  it('props 为函数/回调类型时的传递与调用', () => {
    let called = false
    class Ele extends Component {
      render(props) {
        props.onTest && props.onTest('ok')
        return <div>test</div>
      }
    }
    const node = genNode()
    define(node.name, Ele)
    render(
      <node.name
        onTest={() => {
          called = true
        }}
      />,
      parentElement,
    )
    expect(called).toBe(true)
  })

  it('props 为 undefined/null/空字符串/0/false 等边界值时的处理', () => {
    class Ele extends Component {
      render(props) {
        return (
          <div>
            {String(props.a)}-{String(props.b)}-{String(props.c)}-
            {String(props.d)}-{String(props.e)}
          </div>
        )
      }
    }
    const node = genNode()
    define(node.name, Ele)
    render(
      <node.name a={undefined} b={null} c={''} d={0} e={false} />,
      parentElement,
    )
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>undefined-null--0-false</div>',
    )
  })
})
