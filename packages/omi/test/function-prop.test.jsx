import { define, render, Component, h } from '@/index'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))

describe('props: Function 类型', () => {
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

  it('声明为 Function 的 prop 会生成 DOM Property 访问器', () => {
    class Ele extends Component {
      static props = {
        beforeChange: { type: Function, default: null },
      }
      render() {
        return <div>ele</div>
      }
    }
    define('fn-prop-accessor', Ele)

    const el = document.createElement('fn-prop-accessor')
    parentElement.appendChild(el)

    // Function 无法通过 attribute 传递，必须走 DOM Property，否则外部框架
    // （Vue/React）直接赋值会覆盖实例属性，props 里永远是默认值 null
    expect(
      Object.getOwnPropertyDescriptor(el, 'beforeChange'),
    ).not.toBeUndefined()
    expect('beforeChange' in el).toBe(true)
  })

  it('外部直接赋值函数时能写入 props 并触发重渲染', async () => {
    let rendered = null
    class Ele extends Component {
      static props = {
        beforeChange: { type: Function, default: null },
      }
      render(props) {
        rendered = props.beforeChange
        return <div>{typeof props.beforeChange}</div>
      }
    }
    define('fn-prop-assign', Ele)

    const el = document.createElement('fn-prop-assign')
    parentElement.appendChild(el)

    const fn = () => true
    el.beforeChange = fn

    expect(el.props.beforeChange).toBe(fn)
    await flush()
    expect(rendered).toBe(fn)
  })

  it('通过 JSX 传递的回调能被组件接收', () => {
    let received = null
    class Ele extends Component {
      static props = {
        beforeChange: { type: Function, default: null },
      }
      installed() {
        received = this.props.beforeChange
      }
      render() {
        return <div>ele</div>
      }
    }
    define('fn-prop-jsx', Ele)

    const fn = () => true
    class App extends Component {
      render() {
        return <fn-prop-jsx beforeChange={fn}></fn-prop-jsx>
      }
    }
    define('fn-prop-jsx-app', App)

    render(<fn-prop-jsx-app></fn-prop-jsx-app>, parentElement)

    expect(received).toBe(fn)
  })

  it('组件自身重渲染后函数 prop 不会被重置为默认值', async () => {
    let rendered = null
    class Ele extends Component {
      static props = {
        beforeChange: { type: Function, default: null },
      }
      render(props) {
        rendered = props.beforeChange
        return <div>{typeof props.beforeChange}</div>
      }
    }
    define('fn-prop-update', Ele)

    const fn = () => 'keep-me'
    class App extends Component {
      static isLightDOM = true
      render() {
        return <fn-prop-update beforeChange={fn}></fn-prop-update>
      }
    }
    define('fn-prop-update-app', App)

    render(<fn-prop-update-app></fn-prop-update-app>, parentElement)
    const el = parentElement.querySelector('fn-prop-update')

    // 模拟组件内部状态变化引发的自更新，此时 attrsToProps 会重新读取 props
    el.updateSelf()
    await flush()

    expect(el.props.beforeChange).toBe(fn)
    expect(rendered).toBe(fn)
  })

  it('以 on 开头的 key 不参与复杂类型处理', () => {
    class Ele extends Component {
      static props = {
        label: { type: String, default: '' },
      }
      render(props) {
        return <div>{props.label}</div>
      }
    }
    define('fn-prop-undeclared', Ele)

    const el = document.createElement('fn-prop-undeclared')
    parentElement.appendChild(el)

    expect(Object.getOwnPropertyDescriptor(el, 'onClick')).toBeUndefined()
  })
})
