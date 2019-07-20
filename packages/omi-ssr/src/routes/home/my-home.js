import { WeElement, define } from 'omio'

define('my-home', class extends WeElement {
  install() {
    this.data = { liked: false }
  }

  static css = require('./_my-home.css')

  render() {

    return <div class='root'>
      <div class='container'>
        <h1>{this.props.title}</h1>
        <p>This is an example of <a href='https://github.com/Tencent/omi'> Omi Framework</a> server side rendering </p>
        <p>{this.data.liked ? 'You liked omi.' : <button onClick={() => {
          this.data.liked = true
          this.update()
        }} >{this.store.data.name}</button>}</p>
        <a href='/detail?id=11'>Go to detail with id</a>
      </div>
    </div>
  }
})
