import { define, render, WeElement } from '../../src/omi'

import Timer from './timer'

define('my-app', class extends WeElement {


  render(props, data) {
    return (
      <div onClick={this.onClick}>
        <Timer />
      </div>
    )
  }
})

render(
  <my-app />,
  document.body
);