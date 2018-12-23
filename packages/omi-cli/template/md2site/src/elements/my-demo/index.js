import { define, WeElement } from 'omi'
import css from './_index.css'

define('my-demo', class extends WeElement {
  install() {
    this.store.myDemo = this
    this.show = false
    this.demo = this.store.demo
  }

  css() {
    return css
  }

  onShow = () => {

    this.show = true
    this.update()
  }

  onClose = () => {

    this.show = false
    this.update()
  }

  
  render() {
    return (
      <div>
        {this.demo && !this.show && <div class="switch code" onClick={this.onShow}>
          <img src={require('./code.png')}></img>
        </div>}

        {this.demo && this.show && <div class="switch close" onClick={this.onClose}>
          <img src={require('./close.png')}></img>
        </div>}

        {this.demo && this.show && <iframe src={this.demo} ></iframe>}

      </div>
    )
  }
})
