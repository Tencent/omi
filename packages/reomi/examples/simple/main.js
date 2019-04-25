import { define, render, WeElement } from '../../src/omi'

import HelloMessage from './hello-message'

define('my-app', class extends WeElement {


  static css = `
         div{
             color: green;
         }`

  name = 'Reomi'

  onClick = () => {
    this.name = 'React + Omi'
    this.update()
  }

  render(props, data) {
    return (
      <div onClick={this.onClick}>
        <HelloMessage name={this.name} />
      </div>
    )
  }
})

render(
  <my-app />,
  document.body
);