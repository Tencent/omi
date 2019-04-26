import { define, render, WeElement } from '../../src/omi'

import Todo from './todo'

define('my-app', class extends WeElement {


  render(props, data) {
    return (
      <div onClick={this.onClick}>
        <Todo />
      </div>
    )
  }
})

render(
  <my-app />,
  document.body
);