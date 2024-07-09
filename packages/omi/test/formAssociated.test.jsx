import { define, render, Component, h, tag, mixin, registerDirective } from '@/index'

import { component } from '../src/define'

describe('formAssociated', () => {

  it('render', () => {

    @component({tagName:'my-input',formAssociated:true})
    class MyInput extends Component { 
      static props = {
        name: String,
        value:String
      } 
      render() {
        return (
          <div><input type='text' name="x" value='1'/></div>
        )
      }
    } 
    const formElement = document.createElement('form')
    document.body.appendChild(formElement)

    render(<my-input />, formElement)
    const formData = new FormData(formElement)   
    expect(formData.has('x')).toBe(true)
  })
 

})

