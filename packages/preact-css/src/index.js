import * as Preact from 'preact'

import './preact-css'


function Counter() {

  return (
    <>
      <div>Hello Preact X</div>
      <div>Hello Preact CSS</div>
    </>
  )
}

Preact.render(<Counter />, document.querySelector('#root'))
