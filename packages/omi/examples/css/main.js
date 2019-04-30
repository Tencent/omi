import { define, render, WeElement, createRef } from '../../src/omi'
import './hello-element'

define('my-app', class extends WeElement {
  
  myCSS = `
  div{
    color:green;
  }`

  onClick = ()=>{
    this.myCSS =  `
    div{
      color:blue;
    }`
    this.update()
  }
  
  render(props, data) {

  

    return (
      <div onClick={this.onClick}>
       
        <hello-element css={this.myCSS}/>
      </div>
    )
  }
})

render(<my-app name="Omi v4.0" />, 'body')
