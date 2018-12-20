import { define, WeElement } from 'omi'
import '../my-list'
import css from './_index.css'

define('my-demo', class extends WeElement {
  install() {
    this.store.mySidebar = this
  }

  css() {
    return css
  }

  render() {
    return (
      <div>
        <iframe src='https://tencent.github.io/omi/packages/omi-chart/repl/index.html' ></iframe>
      </div>
    )
  }
})
