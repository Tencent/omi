import * as Preact from 'preact'
import './preact-css'


function Comp() {
  return (
    <>
      <h1>Hello Preact X</h1>
      <div>Hello Preact CSS</div>
    </>
  )
}

Comp.css = `
h1{
  color: red;
}
`

Preact.render(<Comp />, document.querySelector('#root'))


//Test Multiple rendering only append style once
Preact.render(<Comp />, document.querySelector('#root2'))



