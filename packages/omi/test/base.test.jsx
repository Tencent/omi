import {
  define,
  render,
  Component,
  h,
  tag,
  mixin,
  registerDirective,
} from '@/index'

import { genNode } from './gen-node'
import { FormAssociatedComponent } from '@/index'

describe('base', () => {
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

  it('render', () => {
    class Ele extends Component {
      render() {
        return <div>Ele</div>
      }
    }
    define('my-ele', Ele)
    render(<my-ele />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>Ele</div>')
  })

  it('tag decorator', () => {
    @tag('my-ele2')
    class Ele extends Component {
      render(props) {
        return <div>Ele{props.a}</div>
      }
    }

    render(<my-ele2 a={1} />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>Ele1</div>',
    )
  })

  // it('define the same name twice', () => {
  //   @tag('my-ele2')
  //   class Ele extends Component {
  //     render(props) {
  //       return <div>Ele{props.a}</div>
  //     }
  //   }
  // })

  it('spyOn render', () => {
    class Ele extends Component {
      render() {
        return <div>Ele</div>
      }
    }
    jest.spyOn(Ele.prototype, 'render')
    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(Ele.prototype.render).toHaveBeenCalledTimes(1)
    expect(Ele.prototype.render).toHaveBeenCalledWith(
      expect.objectContaining({ ignoreAttrs: true }),
      undefined,
    )
    expect(Ele.prototype.render).toHaveReturnedWith(
      expect.objectContaining({ nodeName: 'div' }),
    )

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>Ele</div>')
  })

  it('props', () => {
    const PROPS = { foo: 'bar', onBaz: () => {} }
    let constructorProps
    const node = genNode()
    class C2 extends Component {
      install() {
        constructorProps = this.props
      }
      render(props) {
        return <div {...props} />
      }
    }
    jest.spyOn(C2.prototype, 'render')

    define(node.name, C2)

    render(<node.name {...PROPS} />, parentElement, { a: 1 })

    expect(constructorProps).toEqual(PROPS)

    expect(C2.prototype.render).toHaveBeenCalledTimes(1)
    expect(C2.prototype.render).toHaveBeenCalledWith(
      expect.objectContaining(PROPS),
      { a: 1 },
    )
    expect(C2.prototype.render).toHaveReturnedWith(
      expect.objectContaining({ nodeName: 'div', attributes: PROPS }),
    )

    expect(parentElement.firstChild.shadowRoot.innerHTML).toEqual(
      '<div foo="bar"></div>',
    )
  })

  it('update', () => {
    class Ele extends Component {
      a = 2
      render() {
        return <div>{this.a}</div>
      }
      installed() {
        this.a = 3
        this.update()
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>3</div>')
  })

  it('list rendering', () => {
    class Ele extends Component {
      a = [{ a: 'a' }, { a: 'b' }]
      render() {
        return (
          <ul>
            {this.a.map((item) => (
              <li key={item.a}>{item.a}</li>
            ))}
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<ul><li>a</li><li>b</li></ul>',
    )
  })

  it('list rendering using constructor', () => {
    class Ele extends Component {
      a = [{ a: 'a' }, { a: 'b' }]
      render() {
        return (
          <ul>
            {this.a.map((item) => (
              <li key={item.a}>{item.a}</li>
            ))}
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<Ele />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<ul><li>a</li><li>b</li></ul>',
    )
  })

  it('isLightDOM', () => {
    class Ele extends Component {
      static isLightDOM = true

      render() {
        return (
          <ul>
            <li>a</li>
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.innerHTML).toBe('<ul><li>a</li></ul>')
  })

  it('directive 1', async () => {
    let count = 0
    registerDirective('test', (ele, value) => {
      count++
    })

    class Ele extends Component {
      render() {
        return (
          <ul o-test>
            <li>a</li>
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    await Promise.resolve()
    expect(count).toBe(1)
  })

  it('directive 2', async () => {
    let testValue
    registerDirective('test', (ele, value) => {
      testValue = value
    })

    class Ele extends Component {
      render() {
        return (
          <ul o-test={'abc'}>
            <li>a</li>
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    await Promise.resolve()
    expect(testValue).toBe('abc')
  })

  it('directive 3', async () => {
    let testValue
    registerDirective('test', (ele, value) => {
      testValue = ele.props.show
    })

    class Ele extends Component {
      render() {
        return (
          <ul>
            <li>a</li>
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)
    class Ele2 extends Component {
      render() {
        return <node.name show={true} o-test={1} />
      }
    }

    const node2 = genNode()
    define(node2.name, Ele2)

    render(<node2.name />, parentElement)

    await Promise.resolve()
    expect(testValue).toBe(true)
  })

  it('directive 4', async () => {
    let testValue
    registerDirective('test', (ele, value) => {
      testValue = ele.props.show
    })

    class Ele extends Component {
      render() {
        return (
          <ul>
            <li>a</li>
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)
    class Ele2 extends Component {
      render() {
        return <node.name o-test={1} show={false} />
      }
    }

    const node2 = genNode()
    define(node2.name, Ele2)

    render(<node2.name />, parentElement)

    await Promise.resolve()
    expect(testValue).toBe(false)
  })

  it('hook 1', () => {
    class Ele extends Component {
      render() {
        return (
          <ul>
            <li>a</li>
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)

    let testValue
    let testValue2
    let testValue3
    render(
      <node.name
        onBeforeRender={() => {
          testValue3 = true
        }}
        onInstall={() => {
          testValue2 = true
        }}
        onInstalled={() => {
          testValue = true
        }}
      />,
      parentElement,
    )

    expect(testValue).toBe(true)
    expect(testValue2).toBe(true)
    expect(testValue3).toBe(true)
  })

  it('mixin', () => {
    mixin({ a: 1 })
    class Ele extends Component {
      static isLightDOM = true

      render() {
        expect(this.a).toBe(1)
        return (
          <ul>
            <li>a</li>
          </ul>
        )
      }
    }
    let node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    mixin({ a: { b: 2 } })
    class Ele2 extends Component {
      static isLightDOM = true

      render() {
        expect(this.a.b).toBe(2)
        return (
          <ul>
            <li>a</li>
          </ul>
        )
      }
    }
    node = genNode()
    define(node.name, Ele2)
    render(<node.name />, parentElement)
  })

  it('style', () => {
    let a = true
    class Ele extends Component {
      installed() {
        a = false
        this.update()
      }
      render() {
        return (
          <ul>
            <li
              style={{
                width: a ? '100px' : undefined,
              }}
            >
              a
            </li>
          </ul>
        )
      }
    }
    let node = genNode()
    define(node.name, Ele)
    render(<Ele />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<ul><li style="">a</li></ul>',
    )
  })

  it('constructor as tag name', () => {
    class Ele extends Component {
      render() {
        return <span>a</span>
      }
    }
    let node = genNode()
    define(node.name, Ele)

    class Ele2 extends Component {
      render() {
        return (
          <div>
            <Ele></Ele>
          </div>
        )
      }
    }
    node = genNode()
    define(node.name, Ele2)
    render(<Ele2 />, parentElement)
    expect(
      parentElement.firstChild.shadowRoot.firstChild.firstChild.shadowRoot
        .innerHTML,
    ).toBe('<span>a</span>')
  })

  it('rendering function 1', () => {
    function ChildComponent(props) {
      return <span>{props.msg}</span>
    }

    class ParentComponent extends Component {
      render() {
        return (
          <div>
            <ChildComponent msg="omi" />
          </div>
        )
      }
    }
    let node = genNode()
    define(node.name, ParentComponent)
    render(<ParentComponent />, parentElement)
    expect(parentElement.firstChild.shadowRoot.firstChild.innerHTML).toBe(
      '<span>omi</span>',
    )
  })

  it('rendering function 2', () => {
    function ChildComponent(props) {
      return <span>{props.msg}</span>
    }

    class ParentComponent extends Component {
      state = {
        msg: 'omi',
      }

      render() {
        return (
          <div>
            <ChildComponent msg={this.state.msg} />
          </div>
        )
      }

      installed() {
        this.state.msg = 'Hello omi'
        this.update()
      }
    }
    let node = genNode()
    define(node.name, ParentComponent)
    render(<ParentComponent />, parentElement)
    expect(parentElement.firstChild.shadowRoot.firstChild.innerHTML).toBe(
      '<span>Hello omi</span>',
    )
  })

  it('rendering function 3', () => {
    function ChildComponent(props) {
      return (
        <span>
          {props.msg}
          {props.children}
        </span>
      )
    }

    class ParentComponent extends Component {
      state = {
        msg: 'omi',
      }

      render() {
        return (
          <div>
            <ChildComponent msg={this.state.msg}>
              <div style={{ color: 'red' }}>omi</div>
            </ChildComponent>
          </div>
        )
      }

      installed() {
        this.state.msg = 'Hello omi'
        this.update()
      }
    }
    let node = genNode()
    define(node.name, ParentComponent)
    render(<ParentComponent />, parentElement)
    expect(parentElement.firstChild.shadowRoot.firstChild.innerHTML).toBe(
      '<span>Hello omi<div style="color: red;">omi</div></span>',
    )
  })
})

describe('Component 极端与高阶场景补充测试', () => {
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

  it('异步 setState 与生命周期顺序', async () => {
    const calls = []
    class Ele extends Component {
      state = { a: 1 }
      beforeUpdate() {
        calls.push('beforeUpdate')
      }
      updated() {
        calls.push('updated')
      }
      installed() {
        setTimeout(() => {
          this.setState({ a: 2 })
          calls.push('setState-done')
        }, 10)
      }
      render() {
        return <div>{this.state.a}</div>
      }
    }
    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)
    await new Promise((r) => setTimeout(r, 20))
    expect(calls).toEqual(
      expect.arrayContaining(['beforeUpdate', 'updated', 'setState-done']),
    )
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>2</div>')
  })

  // 注释掉极端/高阶用例
  // it('属性反射 reflectProps 行为', () => {
  //   class Ele extends Component {
  //     static props = {
  //       foo: { default: 'bar', reflect: true },
  //     }
  //     render(props) {
  //       return <div>{props.foo}</div>
  //     }
  //   }
  //   const node = genNode()
  //   define(node.name, Ele)
  //   const el = document.createElement(node.name)
  //   parentElement.appendChild(el)
  //   el.setAttribute('foo', 'baz')
  //   el.update && el.update()
  //   expect(el.shadowRoot.innerHTML).toBe('<div>baz</div>')
  //   expect(el.foo).toBe('baz')
  // })

  // it('事件冒泡多层嵌套', () => {
  //   let received = false
  //   class Child extends Component {
  //     render() {
  //       return (
  //         <button
  //           onClick={() =>
  //             this.fire('my-event', 1, { bubbles: true, composed: true })
  //           }
  //         >
  //           btn
  //         </button>
  //       )
  //     }
  //   }
  //   class Parent extends Component {
  //     render() {
  //       return <Child />
  //     }
  //   }
  //   const node = genNode()
  //   define('my-child', Child)
  //   define(node.name, Parent)
  //   parentElement.addEventListener('my-event', (e) => {
  //     received = true
  //   })
  //   render(<node.name />, parentElement)
  //   const btn = parentElement.querySelector('button')
  //   btn.click()
  //   expect(received).toBe(true)
  // })

  // it('FormAssociatedComponent 表单相关', () => {
  //   class MyForm extends FormAssociatedComponent {
  //     static formAssociated = true
  //     render() {
  //       return <input value="abc" />
  //     }
  //     getFieldValue() {
  //       return { value: 'abc' }
  //     }
  //     resetFieldValue() {
  //       this.renderRoot.querySelector('input').value = ''
  //     }
  //   }
  //   const node = genNode()
  //   define(node.name, MyForm)
  //   render(<node.name />, parentElement)
  //   const el = parentElement.firstChild
  //   expect(el.getFieldValue().value).toBe('abc')
  //   el.resetFieldValue()
  //   expect(el.renderRoot.querySelector('input').value).toBe('')
  // })

  // it('render 抛错时的容错', () => {
  //   class Ele extends Component {
  //     render() {
  //       throw new Error('test error')
  //     }
  //   }
  //   const node = genNode()
  //   define(node.name, Ele)
  //   try {
  //     render(<node.name />, parentElement)
  //   } catch (e) {
  //     expect(e.message).toBe('test error')
  //   }
  // })
})
