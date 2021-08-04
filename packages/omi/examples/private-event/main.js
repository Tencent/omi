import { define, render, WeElement } from '../../src/omi'

define('o-button', class extends WeElement {
  render() {
    return (
      <button {...this.props}><slot></slot></button>
    )
  }
})

define('my-app', class extends WeElement {
  render() {
    return (
      <o-button onclick={evt => {
        //onclick trigger twice, _onclick trigger once
        console.log(1)
      }}>button</o-button>
    )
  }
})


render(<my-app />, 'body')