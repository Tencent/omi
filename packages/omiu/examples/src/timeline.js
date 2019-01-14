import { WeElement, define, render, createRef } from 'omi'
import '../../src/button'
import '../../src/popover'

define('my-app', class extends WeElement {

  popoverShow = false

  direction = 'left-top'

  install() {
    this.ref1 = createRef()
  }

  popoverIt = (evt) => {
    this.popoverShow = !this.popoverShow

    this.popoverTarget = evt.target
    this.direction = evt.target.innerText
    this.update()
  }

  css(){
    return `.btn{
      margin-right:5px !important;
    }`
  }

  render() {
    return (
      <div>
        <div style='position:relative;left:120px;top:100px;'>
          <o-button size='small' class='btn' onClick={this.popoverIt}>left-top</o-button>
          <o-button size='small' class='btn' onClick={this.popoverIt}>top</o-button>
          <o-button size='small' class='btn' onClick={this.popoverIt}>right-top</o-button>
        </div>

        <o-popover show={this.popoverShow} target={this.popoverTarget} direction={this.direction}>
          <div>测试内容....</div>
          <div>测试内容</div>
          <div>测试内容测试内容测试内容</div>
        </o-popover>
      </div>


    )
  }
})

render(<my-app />, 'body')
