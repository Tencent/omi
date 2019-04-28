import { WeElement, define } from 'omio'

define('my-detail', class extends WeElement {
  static css = require('./_my-detail.css')

  render(props) {

    return <div class='root'>
      <div class='container'>
        <h1>{props.title}</h1>
        <p>This is detail page render by <a href='https://github.com/Tencent/omi'> Omi Framework</a>.</p>
        <p>【{this.store.data.id}】{this.store.data.detail}</p>
        <a href='/'>Go back Home</a>
      </div>
    </div>
  }
})
