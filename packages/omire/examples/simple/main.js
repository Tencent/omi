import { define, render, WeElement } from '../../src/omi'

import HelloMessage from './hello-message'

define('my-app', class extends WeElement {


  static css = `
         div{
             color: green;
         }`

  name = 'Reomi'
  name2 = 'Reomi2'
  onClick = () => {
    this.name = 'React + Omi'
    this.name2 = 'abc'
    this.update()
  }

  render(props, data) {
    return (
      <div onClick={this.onClick}>
        <HelloMessage name={this.name} />
        <HelloMessage name={this.name2} />
      </div>
    )
  }
})

render(
  <my-app />,
  document.body
);