import { define, WeElement } from 'omi'

define('hello-element', class extends WeElement {
  css = require('./_index.css')
  
  installed() {
    setTimeout(() => {
      this.store.name = 'Good Job!'
      this.update()
    }, 1000)
  }

  render(props, data) {
    return (
      <div class="hello">
        <h1> {this.store.name} </h1>
        <div> I am hello element.</div>
        <div class="omi" />
      </div>
    )
  }
})
