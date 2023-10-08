import { define, render, Component, h, tag, createRef } from '@/index'

import { genNode } from './gen-node'

describe('dom', () => {
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
    
     
      render(props) {
        return <div style={{color: 'red'}}>a</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div style="color: red;">a</div>')
  })

  it('createRef', () => {
    class Ele extends Component {
    
      myRef = createRef()

      installed() {
        expect(this.myRef.current.nodeName).toBe('DIV')
      }
      render(props) {
        return <div ref={this.myRef} style={{color: 'red'}}>a</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

  })

  it('unsafeHTML', () => {
    class Ele extends Component {
    
      content = '<span>abc</span>'

     
      render(props) {
        return <div unsafeHTML={this.content}>a</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div><span>abc</span></div>')
  })

  it('string style', () => {
    class Ele extends Component {
    
     
      render(props) {
        return <div style="color: red">a</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div style="color: red;">a</div>')
  })
  
  it('class', () => {
    class Ele extends Component {
    
     
      render(props) {
        return <div class='a' style="color: red">a</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div class="a" style="color: red;">a</div>')
  })
 
  it('className', () => {
    class Ele extends Component {
    
     
      render(props) {
        return <div className='a' style="color: red">a</div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div class="a" style="color: red;">a</div>')
  })
 



})
