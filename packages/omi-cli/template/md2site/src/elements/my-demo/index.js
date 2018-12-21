import { define, WeElement } from 'omi'
import css from './_index.css'

define('my-demo', class extends WeElement {
  install() {
    this.show = false
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
        {!this.show && <div class="switch code" onClick={this.onShow}>
          <img src={require('./code.png')}></img>
        </div>
        }

        {this.show && <div class="switch close" onClick={this.onClose}>
          <img src={require('./close.png')}></img>
        </div>}

        {this.show && <iframe src='https://tencent.github.io/omi/packages/omi-chart/repl/index.html' ></iframe>
        }

      </div>
    )
  }
})
