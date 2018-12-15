import { define, WeElement } from 'omi'
import css from './_index.css'

define('my-pager', class extends WeElement {
  next = () => {
    this.store.next()
  }

  pre = () => {
    this.store.pre()
  }

  render() {
    return (
      <div class="pager">
        {this.store.preName && (
          <a class="pre" href="#" onclick={this.pre}>
            ←{this.store.preName}
          </a>
        )}
        {this.store.nextName && (
          <a class="next" href="#" onclick={this.next}>
            {this.store.nextName}→
            </a>
        )}
      </div>
    )
  }

  css() {
    return css
  }
})
