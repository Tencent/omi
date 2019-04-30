import { define, WeElement } from '../../src/omi'

define('hello-element', class extends WeElement {
  static css = 'div{color:red;}'
  
  render() {
    return (
      <div >
        ABC
      </div>
    )
  }
})
