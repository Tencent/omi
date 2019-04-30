import { define, WeElement } from '../../src/omi'

define('my-element', class extends WeElement {
  static css = `h1{
    color:red;
  }`

  render() {
    return (
      <div><h1>ABC</h1></div>
    )
  }
})
