const { h, render, define } = Omi

class LikeButton extends Omi.WeElement {
  install() {
    this.data = { liked: false }
  }

  render() {
    if (this.data.liked) {
      return 'You liked this.'
    }

    return h(
      'button',
      { onClick: () => {
        this.data.liked = true
        this.update()
      } },
      'Like'
    )
  }
}

define('like-button', LikeButton)

render(h('like-button'), '#like_button_container')