import { define, WeElement } from 'omi'
import style from './_index.css'

define('hello-element', class extends WeElement {
  installed() {
    setTimeout(() => {
      this.store.name = 'Good Job!'
      this.update()
    }, 1000)
  }
  css() {
    return style
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
