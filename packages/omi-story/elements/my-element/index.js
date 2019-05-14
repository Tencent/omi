import { define, WeElement } from 'omi'

define('my-element', class extends WeElement {

 static css = `
      div {
        color: red;
      }`

  clickHanlder = ()=>{
    console.log(this)
  }

  render() {
    return (
      <div>
        <h1 onclick={this.clickHanlder}>I am red.</h1>
      </div>
    )
  }
})
