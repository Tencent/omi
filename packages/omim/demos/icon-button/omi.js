import '../../src/icon-button/index.tsx'

import { define, WeElement, render, h } from 'omi'

define('my-app', class extends WeElement {

  onChange = (evt) => {
    this.result = evt.detail.isOn
    this.update()
  }

  result = false

  render() {
    return (
      <div>
        <p>The switch is {this.result? 'on' : 'off'}.</p>
        <m-icon-button color="red" icons={['favorite', 'favorite_border']} onChange={this.onChange}></m-icon-button>
      </div>
    )
  }
})
render(<my-app />, 'body')
