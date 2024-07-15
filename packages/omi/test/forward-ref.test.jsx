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
      ref1=createRef()  // 特殊注意： ref属性是内置属性，不能使用ref名称
      installed(){
        this.ref1.current.innerHTML='hello'
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

