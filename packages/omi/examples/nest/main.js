import { define, render, WeElement, createRef } from '../../src/omi'
import './hello-element'

define('my-app', class extends WeElement {
  data = { abc: 'abc', passToChild: 123 }

  install() {
    this.dd = { a: 1 }

    this.a = createRef()
    this.b = createRef()
  }

  onMyEvent = evt => {
    this.data.abc = ' by ' + evt.detail.name
    this.data.passToChild = 1234
    this.dd.a++
    this.update()
  }

  static css =`
         div{
             color: green;
         }`
  

  installed(){
    console.log(this.a)
    console.log(this.b)
  }
  render(props, data) {
    return (
      <div>
       <div ref={this.a}>Hello {props.name} {data.abc} {this.dd.a}</div>
        <hello-element ref={this.b}
          onMyEvent={this.onMyEvent}
          propFromParent={data.passToChild}
          dd={this.dd}
          msg="WeElement"
        />
      </div>
    )
  }
})

render(<my-app name="Omi v4.0" />, 'body')
