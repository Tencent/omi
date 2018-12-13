import { cloneElement, render, Component } from '../../src/omi'
import OmiTap from './omi-tap'

class TapExample extends Component {
  constructor() {
    super()
    this.tapState = 'tap me'
    this.tapHandler = this.tapHandler.bind(this)
  }

  tapHandler(evt) {
    console.log(evt)
    this.tapState = 'taped'
    this.update()
  }

  style() {
    return `
    .tapDiv{
      width: 100px;
      height: 100px;
      background-color: rgb(56,121,217);
      text-align: center;
      color: white;
      margin: 0 auto;
      line-height: 93px;
    }
    `
  }

  render() {
    return (
      <div>
        <h3>Hello OmiTap</h3>
        <OmiTap onTap={this.tapHandler}>
          <div class="tapDiv">{this.tapState}</div>
        </OmiTap>
      </div>
    )
  }
}

render(<TapExample />, 'body')
