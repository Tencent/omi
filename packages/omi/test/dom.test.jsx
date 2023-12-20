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

  it('form', () => {
    class Ele extends Component {
    
      state = {
        show: true,
        value1: 'volvo',
        value2: '',
      }    

      installed() {
        this.state.show = false
        this.update()
      }
     
      render(props) {
        return <div>
        {this.state.show && <select id="cars" value={this.state.value1} onChange={this.onChange} name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>}

        <select id="cars2" value={this.state.value2} name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

      </div>
      }
    }

    const node = genNode()
    define(node.name, Ele)
    render(<node.name />, parentElement)

    expect(parentElement.firstChild.shadowRoot.querySelector('select').value).toBe('')
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
