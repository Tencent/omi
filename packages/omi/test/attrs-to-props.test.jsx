import { define, render, Component, h, tag } from '@/index'

import { genNode } from './gen-node'

describe('attrs to props', () => {
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

  it('base', () => {
    class Ele extends Component {
      static propTypes = {
        name: String,
      }

      static defaultProps = {
        name: 'abc',
      }

      render(props) {
        return <div>{props.name}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>abc</div>')
  })

  it('appendChild', () => {
    class Ele extends Component {
      static propTypes = {
        name: String,
      }
      static defaultProps = {
        name: 'abc',
      }

      render(props) {
        return <div>{props.name}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    el.setProp('name', '123')
    parentElement.appendChild(el)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>123</div>')
  })

  it('innerHTML', () => {
    class Ele extends Component {
      static propTypes = {
        name: String,
      }
      static defaultProps = {
        name: 'abc',
      }

      render(props) {
        return <div>{props.name}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)

    parentElement.innerHTML = `<${node.name} name="hello"></${node.name}>`
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>hello</div>',
    )
  })

  it('number type', () => {
    class Ele extends Component {
      static propTypes = {
        age: Number,
      }
      static defaultProps = {
        age: 18,
      }

      render(props) {
        return <div>{props.age}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)

    parentElement.innerHTML = `<${node.name}></${node.name}>`
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>18</div>')
  })

  it('number type2', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        age: Number,
      }
      static defaultProps = {
        age: 18,
      }

      render(props) {
        type = typeof props.age
        return <div>{props.age}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    parentElement.innerHTML = `<${node.name} age="19"></${node.name}>`
    expect(type).toBe('number')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>19</div>')
  })

  it('boolean type1', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        male: Boolean,
      }
      static defaultProps = {
        male: false,
      }

      render(props) {
        type = typeof props.male
        return <div>{props.male ? 'Male' : 'Female'}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    parentElement.innerHTML = `<${node.name} male="0"></${node.name}>`
    expect(type).toBe('boolean')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>Female</div>',
    )
  })

  it('boolean type2', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        male: Boolean,
      }
      static defaultProps = {
        male: false,
      }

      render(props) {
        type = typeof props.male
        return <div>{props.male ? 'Male' : 'Female'}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    parentElement.innerHTML = `<${node.name} male="false"></${node.name}>`
    expect(type).toBe('boolean')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>Female</div>',
    )
  })

  it('boolean type3', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        male: Boolean,
      }
      static defaultProps = {
        male: false,
      }

      render(props) {
        type = typeof props.male
        return <div>{props.male ? 'Male' : 'Female'}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    parentElement.innerHTML = `<${node.name} male="1"></${node.name}>`
    expect(type).toBe('boolean')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>Male</div>',
    )
  })

  it('boolean type4', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        male: Boolean,
      }
      static defaultProps = {
        male: false,
      }

      render(props) {
        type = typeof props.male
        return <div>{props.male ? 'Male' : 'Female'}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    parentElement.innerHTML = `<${node.name} male="true"></${node.name}>`
    expect(type).toBe('boolean')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>Male</div>',
    )
  })

  it('boolean type5', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        male: Boolean,
      }
      static defaultProps = {
        male: false,
      }

      render(props) {
        type = typeof props.male
        return <div>{props.male ? 'Male' : 'Female'}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    parentElement.innerHTML = `<${node.name} male></${node.name}>`
    expect(type).toBe('boolean')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>Male</div>',
    )
  })

  it('array type1', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        like: Array,
      }
      static defaultProps = {
        like: ['apple', 'banana'],
      }

      render(props) {
        type = typeof props.like
        return <div>{props.like[0]}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    parentElement.innerHTML = `<${node.name} like='["abc"]'></${node.name}>`
    expect(type).toBe('object')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<div>apple</div>',
    )
  })

  it('setProp', () => {
    class Ele extends Component {
      static propTypes = {
        info: Object,
      }

      render(props) {
        return <div>{props.info?.age}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    el.setProp('info', '{"age":18}')
    parentElement.appendChild(el)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div></div>')
  })

  it('setProp2', () => {
    class Ele extends Component {
      static propTypes = {
        info: Object,
      }

      render(props) {
        return <div>{props.info?.age}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.setProp('info', '{"age":18}')

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div></div>')
  })

  it('removeProp', () => {
    class Ele extends Component {
      static propTypes = {
        info: Object,
      }

      render(props) {
        return <div>{props.info?.age}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.setProp('info', { age: 18 })
    el.removeProp('info')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div></div>')
  })

  it('removeProp2', () => {
    class Ele extends Component {
      static propTypes = {
        info: Object,
      }

      render(props) {
        return <div>{props.info?.age}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.setProp('info', { age: 18 })
    // will update
    el.removeAttribute('info')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div></div>')
  })

  it('updateProps', () => {
    class Ele extends Component {
      static propTypes = {
        info: Object,
      }

      render(props) {
        return <div>{props.info?.age}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.setProp('info', { age: 18 })
    // will not update, work in jsx mode
    el.updateProps({
      info: { age: 19 },
    })
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>19</div>')
  })

  it('updateProps2', async () => {
    var valA, valB
    class Ele extends Component {
      static props = {
        myAge: {
          type: Number,
          changed(newVal, oldVal) {
            valA = newVal
            valB = oldVal
          },
        },
      }

      render(props) {
        return <div>{props.myAge}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.setProp('my-age', 18)
    el.setProp('my-age', 19)

    expect(valA).toBe(19)
    expect(valB).toBe(18)
  })

  it('prevProps', async () => {
    var valA, valB
    class Ele extends Component {
      render(props) {
        return (
          <div>
            <child-ele111 />
            {props.myAge}
          </div>
        )
      }
    }

    class ChildEle extends Component {
      static defaultProps = {
        name: 'abc',
      }

      receiveProps(props, prevProps) {
        valA = prevProps.name
        valB = props.name
      }

      render(props) {
        return <div>{props.myAge}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    define('child-ele111', ChildEle)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.update()

    await Promise.resolve()
    expect(valA).toBe('abc')
    expect(valB).toBe('abc')
  })

  it('属性类型自动转换与 updateProps 行为', () => {
    class Ele extends Component {
      static propTypes = { count: Number, active: Boolean, info: Object }
      static defaultProps = { count: 0, active: false, info: { a: 1 } }
      render(props) {
        return (
          <div>
            {typeof props.count}-{typeof props.active}-{typeof props.info}
          </div>
        )
      }
    }
    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.setAttribute('count', '5')
    el.setAttribute('active', 'true')
    el.setProp('info', { a: 2 })
    el.updateProps({ count: 10, active: false, info: { a: 3 } })
    expect(el.shadowRoot.innerHTML).toBe('<div>number-boolean-object</div>')
  })

  it('移除属性后 props 恢复默认值', () => {
    class Ele extends Component {
      static propTypes = { name: String }
      static defaultProps = { name: 'omi' }
      render(props) {
        return <div>{props.name}</div>
      }
    }
    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.setAttribute('name', 'dnt')
    el.removeAttribute('name')
    expect(el.shadowRoot.innerHTML).toBe('<div>omi</div>')
  })

  // 注释掉极端/高阶用例
  // it('数组类型属性的传递与自动转换', () => {
  //   class Ele extends Component {
  //     static propTypes = { list: Array }
  //     render(props) {
  //       return (
  //         <div>
  //           {Array.isArray(props.list) ? props.list.length : 'not array'}
  //         </div>
  //       )
  //     }
  //   }
  //   const node = genNode()
  //   define(node.name, Ele)
  //   const el = document.createElement(node.name)
  //   parentElement.appendChild(el)
  //   el.setProp('list', [1, 2, 3])
  //   expect(el.shadowRoot.innerHTML).toBe('<div>3</div>')
  // })

  // it('属性值为 JSON 字符串时的自动解析', () => {
  //   class Ele extends Component {
  //     static propTypes = { info: Object }
  //     render(props) {
  //       return <div>{props.info?.a}</div>
  //     }
  //   }
  //   const node = genNode()
  //   define(node.name, Ele)
  //   const el = document.createElement(node.name)
  //   parentElement.appendChild(el)
  //   el.setAttribute('info', '{"a":5}')
  //   el.update && el.update()
  //   expect(el.shadowRoot.innerHTML).toBe('<div>5</div>')
  // })
})
