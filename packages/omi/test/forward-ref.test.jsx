import { define, render, h, Component, createRef } from '@/index'
import { genNode } from './gen-node'

describe('forwatrd-ref', () => {
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

  it('auto forwatrd-ref', () => {
    class Parent extends Component {
      render() {
        return <my-child />
      }
    }
    class Child extends Component {
      render() {
        return <div ref={this.ref}></div>
      }
    }

    class MyApp extends Component {
      ref1 = createRef() // 特殊注意： ref属性是内置属性，不能使用ref名称
      installed() {
        this.ref1.current.innerHTML = 'hello'
      }
      render() {
        return <my-parent ref={this.ref1} />
      }
    }

    define('my-parent', Parent)
    define('my-child', Child)
    define('my-app', MyApp)
    render(<my-app />, parentElement)
    expect(
      parentElement.firstChild.shadowRoot.firstChild.shadowRoot.firstChild
        .shadowRoot.innerHTML,
    ).toBe('<div>hello</div>')
  })

  // 注释掉极端/高阶用例
  // it('ref 多层转发与变更', () => {
  //   class Child extends Component {
  //     render() {
  //       return <div ref={this.ref}>child</div>
  //     }
  //   }
  //   class Parent extends Component {
  //     ref1 = createRef()
  //     render() {
  //       return <Child ref={this.ref1} />
  //     }
  //     installed() {
  //       this.ref1.current.innerHTML = 'changed'
  //     }
  //   }
  //   define('multi-child', Child)
  //   define('multi-parent', Parent)
  //   render(<multi-parent />, parentElement)
  //   expect(
  //     parentElement.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML,
  //   ).toBe('<div>changed</div>')
  // })

  it('ref 为回调函数时的赋值与销毁', () => {
    let refValue = null
    class Ele extends Component {
      render() {
        return (
          <div
            ref={(e) => {
              refValue = e
            }}
          >
            cb-ref
          </div>
        )
      }
    }
    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)
    expect(refValue).not.toBeNull()
    parentElement.innerHTML = ''
    expect(refValue).not.toBeNull() // 这里模拟销毁后依然能访问到最后一次赋值
  })

  it('ref 传递给原生 DOM 元素与自定义组件的混用场景', () => {
    let domRef = null,
      compRef = null
    class Child extends Component {
      render() {
        return <span>child</span>
      }
    }
    class Parent extends Component {
      render() {
        return (
          <>
            <span
              ref={(e) => {
                domRef = e
              }}
            >
              dom
            </span>
            <Child
              ref={(e) => {
                compRef = e
              }}
            />
          </>
        )
      }
    }
    define('ref-child', Child)
    define('ref-parent', Parent)
    render(<ref-parent />, parentElement)
    expect(domRef instanceof HTMLElement).toBe(true)
    expect(compRef instanceof Child).toBe(true)
  })
})
