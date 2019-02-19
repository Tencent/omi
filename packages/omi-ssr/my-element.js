const Omi = require('omio')
const { WeElement, h, define } = Omi

define('my-element', class extends WeElement {
    install() {
      this.data = { liked: false }
    }

    render() {
      if (this.data.liked) {
        return 'You liked this.'
      }

      return h(
        'button',
        {
          onClick: () => {
            this.data.liked = true
            this.update()
          }
        },
        'Like'
      )
    }
  })
