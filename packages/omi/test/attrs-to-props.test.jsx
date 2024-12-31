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
        name: String
      }

      static defaultProps = {
        name: 'abc'
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
        name: String
      }
      static defaultProps = {
        name: 'abc'
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
        name: String
      }
      static defaultProps = {
        name: 'abc'
      }

      render(props) {
        return <div>{props.name}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)

    parentElement.innerHTML = `<${node.name} name="hello"></${node.name}>`
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>hello</div>')
  })

  it('number type', () => {
    class Ele extends Component {
      static propTypes = {
        age: Number
      }
      static defaultProps = {
        age: 18
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
        age: Number
      }
      static defaultProps = {
        age: 18
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
        male: Boolean
      }
      static defaultProps = {
        male: false
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
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>Female</div>')
  })

  it('boolean type2', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        male: Boolean
      }
      static defaultProps = {
        male: false
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
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>Female</div>')
  })



  it('boolean type3', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        male: Boolean
      }
      static defaultProps = {
        male: false
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
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>Male</div>')
  })


  it('boolean type4', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        male: Boolean
      }
      static defaultProps = {
        male: false
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
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>Male</div>')
  })


  it('boolean type5', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        male: Boolean
      }
      static defaultProps = {
        male: false
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
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>Male</div>')
  })

  it('array type1', () => {
    let type
    class Ele extends Component {
      static propTypes = {
        like: Array
      }
      static defaultProps = {
        like: ['apple', 'banana']
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
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>abc</div>')
  })


  it('setProp', () => {
    class Ele extends Component {
      static propTypes = {
        info: Object
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
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>18</div>')
  })

  it('setProp2', () => {
    class Ele extends Component {
      static propTypes = {
        info: Object
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

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>18</div>')
  })

  it('removeProp', () => {
    class Ele extends Component {
      static propTypes = {
        info: Object
      }

      render(props) {
        return <div>{props.info?.age}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.setProp('info', { 'age': 18 })
    el.removeProp('info')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div></div>')
  })

  it('removeProp2', () => {
    class Ele extends Component {
      static propTypes = {
        info: Object
      }

      render(props) {
        return <div>{props.info?.age}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.setProp('info', { 'age': 18 })
    // will update
    el.removeAttribute('info')
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div></div>')
  })


  it('updateProps', () => {
    class Ele extends Component {
      static propTypes = {
        info: Object
      }

      render(props) {
        return <div>{props.info?.age}</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    const el = document.createElement(node.name)
    parentElement.appendChild(el)
    el.setProp('info', { 'age': 18 })
    // will not update, work in jsx mode
    el.updateProps({
      info: {age: 19}
    })
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>18</div>')
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
          }
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

})
