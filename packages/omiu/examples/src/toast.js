import { WeElement, define, render } from 'omi'
import '../../src/toast'
import '../../src/button'

define('my-app', class extends WeElement {

  successShow = false
  loadingShow = false

  showSuccess =() => {
    this.loadingShow = false
    this.successShow = true
    this.update()
  }

  showLoading =() => {
    this.successShow = false
    this.loadingShow = true
    this.update()
  }

  render() {
    return (
      <div>
        <o-button onClick={this.showSuccess}>Show Success Toast</o-button>
        <o-button onClick={this.showLoading}>Show Loading Toast</o-button>
        <o-toast show={this.successShow}>支付成功</o-toast>
        <o-toast type='loading' show={this.loadingShow}>加载中</o-toast>
      </div>
    )
  }
})

render(<my-app />, '#root')
