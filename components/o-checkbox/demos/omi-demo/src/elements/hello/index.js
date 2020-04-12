import { define, WeElement } from 'omi'

define('hello-element', class extends WeElement {
  static css = require('./_index.css')

  static use = ['name']

  installed() {
    setTimeout(() => {
      this.store.rename('Good Job!')
    }, 1000)
  }

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
