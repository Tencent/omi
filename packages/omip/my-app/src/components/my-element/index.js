import { WeElement, define } from 'omi'

define('my-element', class extends WeElement {
  render() {
    return (
      <text>Hello, Element!</text>
    )
  }
})