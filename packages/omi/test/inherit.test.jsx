import { define, render, Component, h, tag, mixin, registerDirective } from '@/index'

import { genNode } from './gen-node'

describe('inherit', () => {
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

  it('render', () => {

    class Animal extends Component { 
      static props = {
        name: String    
      }
      renderHead(){
        return <>head</>
      }
      renderLimbs(){
        return <>limbs</>
      }
      renderBody(){
        return <>body</>
      }
      render() {
        return (
          <div>{this.renderHead()}{this.renderLimbs()}{this.renderBody()}</div>
        )
      }
    } 
    
    class Dog extends Animal { 
      renderHead(){
        return <>
          {super.renderHead()}🐶 
          </>
      }
      renderLimbs(){
        return <>
        {super.renderLimbs()}🐶 
        </>
      }
      renderBody(){
        return <>
        {super.renderBody()}🐶 
        </>
      }
      render() {
        return <><div>{super.render()}</div>
        </>
      }
    }
    
    define('my-dog', Dog)
    render(<my-dog />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div><div>head🐶limbs🐶body🐶</div></div>')
  })

    
  it('render inherited props default value', () => {
    class Animal extends Component { 
      static props = {
        name: {
          type:String ,
          default:"🐶"
        }
      }
      render() {
        return (
          <div>{this.renderHead()}{this.renderLimbs()}{this.renderBody()}</div>
        )
      }
    }     
    class Dog extends Animal { 
      render(props) {
        return <div>{props.name}</div>
      }
    }
    define('my-dog2', Dog)
    render(<my-dog2 />, parentElement)
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe('<div>🐶</div>')
  }) 

})

