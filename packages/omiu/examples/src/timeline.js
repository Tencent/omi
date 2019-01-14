import { WeElement, define, render } from 'omi'
import '../../src/button'
import '../../src/popover'

define('my-app', class extends WeElement {
  popoverIt = (evt) => {
    this.popoverShow = !this.popoverShow
    this.popoverTarget = evt.target
    this.direction = evt.target.innerText
    this.update()
  }

  onClose = () => {
    this.popoverShow = false
    this.update()
  }

  css() {
    return `.btn{
      margin-right:5px !important;
    }`
  }

  render() {
    return (
      <div>
        <div style='position:relative;left:120px;top:100px;'>
          <o-button size='small' class='btn' onClick={this.popoverIt}>top-left</o-button>
          <o-button size='small' class='btn' onClick={this.popoverIt}>top</o-button>
          <o-button size='small' class='btn' onClick={this.popoverIt}>top-right</o-button>
          <br />
          <o-button size='small' class='btn' onClick={this.popoverIt}>left-top</o-button>
          <o-button size='small' class='btn' onClick={this.popoverIt}>left</o-button>
          <o-button size='small' class='btn' onClick={this.popoverIt}>left-bottom</o-button>
          <br />
          <o-button size='small' class='btn' onClick={this.popoverIt}>bottom-left</o-button>
          <o-button size='small' class='btn' onClick={this.popoverIt}>bottom</o-button>
          <o-button size='small' class='btn' onClick={this.popoverIt}>bottom-right</o-button>
          <br />
          <o-button size='small' class='btn' onClick={this.popoverIt}>right-top</o-button>
          <o-button size='small' class='btn' onClick={this.popoverIt}>right</o-button>
          <o-button size='small' class='btn' onClick={this.popoverIt}>right-bottom</o-button>
        </div>
        <o-popover show={this.popoverShow} target={this.popoverTarget} direction={this.direction} onClose={this.onClose}>
          <div>测试内容....</div>
          <div>测试内容</div>
          <div>测试内容测试内容</div>
        </o-popover>
      </div>
    )
  }
})

render(<my-app />, 'body')
