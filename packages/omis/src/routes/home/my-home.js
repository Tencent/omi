import { WeElement, define } from 'omio'

define('my-home', class extends WeElement {
  install() {
    this.data = { liked: false }
  }

  static css = require('./_my-home.css')

  render() {
    if (this.data.liked) {
      return 'You liked omi.'
    }

    return <button onClick={() => {
      this.data.liked = true
      this.update()
    }} >{this.store.name}</button>
  }
})
