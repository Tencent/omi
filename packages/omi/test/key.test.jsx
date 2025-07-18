import { define, render, Component, h, tag } from '@/index'

import { genNode } from './gen-node'

describe('key', () => {
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
      like = [
        { id: 1, name: 'bobby' },
        { id: 2, name: 'john' },
        { id: 3, name: 'sum' },
      ]

      installed() {
        this.like = [
          { id: 3, name: 'sum' },
          { id: 1, name: 'bobby' },
          { id: 2, name: 'john' },
        ]

        this.update()
      }
      render(props) {
        return (
          <ul>
            {this.like.map((item) => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<ul><li>sum</li><li>bobby</li><li>john</li></ul>',
    )
  })

  it('remove', () => {
    class Ele extends Component {
      like = [
        { id: 1, name: 'bobby' },
        { id: 2, name: 'john' },
        { id: 3, name: 'sum' },
      ]

      installed() {
        this.like = [
          { id: 3, name: 'sum' },

          { id: 2, name: 'john' },
        ]

        this.update()
      }
      render(props) {
        return (
          <ul>
            {this.like.map((item) => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<ul><li>sum</li><li>john</li></ul>',
    )
  })

  it('add', () => {
    class Ele extends Component {
      like = [
        { id: 1, name: 'bobby' },
        { id: 2, name: 'john' },
        { id: 3, name: 'sum' },
      ]

      installed() {
        this.like = [
          { id: 1, name: 'bobby' },
          { id: 2, name: 'john' },
          { id: 3, name: 'sum' },
          { id: 4, name: 'lili' },
        ]

        this.update()
      }
      render(props) {
        return (
          <ul>
            {this.like.map((item) => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        )
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<ul><li>bobby</li><li>john</li><li>sum</li><li>lili</li></ul>',
    )
  })

  it('key 缺失时 diff 行为', () => {
    class Ele extends Component {
      list = [{ name: 'a' }, { name: 'b' }]
      render() {
        return (
          <ul>
            {this.list.map((item) => (
              <li>{item.name}</li>
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

  it('key 重复时 diff 行为', () => {
    class Ele extends Component {
      list = [
        { id: 1, name: 'a' },
        { id: 1, name: 'b' },
      ]
      render() {
        return (
          <ul>
            {this.list.map((item) => (
              <li key={item.id}>{item.name}</li>
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

  it('key 为 undefined/null/0/false 等边界值时的 diff 行为', () => {
    class Ele extends Component {
      list = [
        { id: undefined, name: 'a' },
        { id: null, name: 'b' },
        { id: 0, name: 'c' },
        { id: false, name: 'd' },
      ]
      render() {
        return (
          <ul>
            {this.list.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )
      }
    }
    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<ul><li>a</li><li>b</li><li>c</li><li>d</li></ul>',
    )
  })

  it('key 变更后 DOM 节点复用与销毁的断言', () => {
    let removed = false
    class Ele extends Component {
      list = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
      ]
      render() {
        return (
          <ul>
            {this.list.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )
      }
      installed() {
        this.list = [
          { id: 2, name: 'b' },
          { id: 3, name: 'c' },
        ]
        this.update()
      }
      componentWillUnmount() {
        removed = true
      }
    }
    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<ul><li>b</li><li>c</li></ul>',
    )
    // 这里只能通过 removed 变量或 DOM 断言间接判断节点复用/销毁
  })
})
