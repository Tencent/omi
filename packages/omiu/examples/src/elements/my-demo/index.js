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
        <iframe style={`height:${window.innerHeight-59}px`} src={this.demo} ></iframe>
      </div>
    )
  }
})
