import { define, WeElement } from 'omi'
import css from './_index.css'

define('my-demo', class extends WeElement {
  install() {
    this.store.myDemo = this
    if (this.checkPc()) this.show = true
    else this.show = false
    this.demo = this.store.demo
  }

  css() {
    return css
  }

  checkPc() {
    let userAgentInfo = navigator.userAgent
    let mp = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    for (let i = 0; i < mp.length; i++)
      if (userAgentInfo.indexOf(mp[i]) > 0) return false
    return true
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
    if (!this.demo) return
    return (
      <div>
        {this.show && (
          <iframe
            style={`height:${window.innerHeight - 59}px`}
            src={this.demo}
          />
        )}

        {!this.show && (
          <div class="switch code" onClick={this.onShow}>
            <img src={require('./code.png')} />
          </div>
        )}

        {this.show && (
          <div class="switch close" onClick={this.onClose}>
            <img src={require('./close.png')} />
          </div>
        )}
      </div>
    )
  }
})
