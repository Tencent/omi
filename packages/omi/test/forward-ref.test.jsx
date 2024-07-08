import { define, render, Component,createRef, h, tag, mixin, registerDirective } from '@/index'

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
    class Parent extends Component{
      render(props){
          return <my-child ref={props.ref}/>
      } 
    }
    class Child extends Component{ 
      render(props){
        return <div ref={props.ref}></div>
      }
    }     
     
    class MyApp extends Component{
      ref=createRef()
      installed(){
        this.ref.current.innerHTML='hello'
      }
      render(){
          return <my-parent ref={this.ref}/> 
      }
    }    

    define('my-parent', Parent)
    define('my-child', Child)
    define('my-app', MyApp)    
    render(<my-app />, parentElement)
    expect(parentElement.firstChild.shadowRoot.firstChild.shadowRoot.firstChild.shadowRoot.innerHTML).toBe('<div>hello</div>')
  })
 
})

