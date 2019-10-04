import { render, h } from 'preact'

function Counter() {
 
  return (

      <div>Hello Preact X</div>
     
  )
}

render(<Counter />, document.querySelector('#root'))
