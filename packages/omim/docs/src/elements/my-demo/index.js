import { define, WeElement } from 'omi'
import css from './_index.css'

define('my-demo', class extends WeElement {
  install() {
    this.store.myDemo = this
    if (this.checkPc())
      this.show = true
    else
      this.show = false
    this.demo = this.store.demo
  }

  css() {
    return css
  }

  checkPc() {
    let userAgentInfo = navigator.userAgent
    let mp = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
    for (let i = 0; i < mp.length; i++)
      if (userAgentInfo.indexOf(mp[i]) > 0)
        return false
    return true
  }

  toggle = () => {
    this.show = !this.show
    this.update()
  }

  render() {
    if (!this.demo) return
    return (
      <div>
        <iframe style={`height:${window.innerHeight - 59}px;visibility:${this.show ? 'visible' : 'hidden'};`} src={this.demo} ></iframe>

        <div class="icon" onClick={this.toggle}>
          <svg viewBox="64 64 896 896" class="" style={`left:${this.show ? '14px' : '0px'};`} data-icon="left" width="1.2em" height="1.2em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>

          <svg viewBox="64 64 896 896" class="" style={`left:${this.show ? '-14px' : '0px'};`} data-icon="right" width="1.2em" height="1.2em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
        </div>

      </div>
    )
  }
})
