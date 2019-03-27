import { WeElement, define } from 'omio'

define('my-element', class extends WeElement {
  install() {
    this.data = { liked: false }
  }

  static css = 'button{ color: red; }'

  render() {
    if (this.data.liked) {
      return 'You liked this.'
    }

    return <button onClick={() => {
      this.data.liked = true
      this.update()
    }} >Like</button>
  }
})
