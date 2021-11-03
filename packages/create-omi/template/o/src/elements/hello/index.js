import { define, WeElement } from 'omi'
import css from './_index.css'

define('hello-element', class extends WeElement {
  use = ['name']

  installed() {
    setTimeout(() => {
      this.store.data.name = 'Good Job!'
    }, 1000)
  }

  static css = css

  render() {
    return (
      <div class="hello">
        <h1> {this.store.data.name} </h1>
        <div> I am hello element.</div>
        <div class="omi" />
      </div>
    )
  }
})
