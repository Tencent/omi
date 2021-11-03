import { define, WeElement } from 'omi'
import style from './_index.css'

define('app-intro', class extends WeElement {
  css() {
    return (
      style +
      `
    code{
      color: ${Math.random() > 0.5 ? 'red' : 'blue'}
    }`
    )
  }

  static propTypes = {
    arr: Array
  }

  render(props) {
    return <>
      <p class="app-intro">
        To get started, edit <code>src/elements/*/*.*</code> and save to reload.
        <div>{props.arr.join('-')}</div>
      </p>
    </>
  }
})
