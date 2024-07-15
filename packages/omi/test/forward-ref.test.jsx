import { define, render, h,Component,createRef } from '@/index'


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
    class Parent extends Component{
      render(){
          return <my-child/>
      } 
    }
    class Child extends Component{ 
      render(){
        return <div ref={this.ref}></div>
      }
    }     
     
    class MyApp extends Component{
      ref1=createRef()
      installed(){
        this.ref.current.innerHTML='hello'
      }
      render(){
          return <my-parent ref={this.ref1}/> 
      }
    }    

    define('my-parent', Parent)
    define('my-child', Child)
    define('my-app', MyApp)    
    render(<my-app />, parentElement) 
    expect(parentElement.firstChild.shadowRoot.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).toBe('<div>hello</div>')
  })
 
})

