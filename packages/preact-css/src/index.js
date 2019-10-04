import { render, h } from 'preact'
import './preact-css'


function Counter() {

  return (

    <div>Hello Preact X</div>

  )
}

render(<Counter />, document.querySelector('#root'))
