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
        return <ul>
          {this.like.map(item => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<ul><li>sum</li><li>bobby</li><li>john</li></ul>')
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
        return <ul>
          {this.like.map(item => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<ul><li>sum</li><li>john</li></ul>')
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
        return <ul>
          {this.like.map(item => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<ul><li>bobby</li><li>john</li><li>sum</li><li>lili</li></ul>')
  })

})
