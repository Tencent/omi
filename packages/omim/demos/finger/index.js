import '../../src/finger/index.tsx'
import { render, h, tag, WeElement } from 'omi'


@tag('my-app')
class MyApp extends WeElement {
  install() {
    this.data.wording = 'Tap or Swipe Me!'
  }

  handleTap = (evt) => {
    this.data.wording += '\r\nTap'
    this.update()
  }

  handleSwipe = (evt) => {
    this.data.wording += '\r\nSwipe-' + evt.detail.direction
    this.update()
  }

  render() {
    return (
      <div>
        <m-finger onTap={this.handleTap} onSwipe={this.handleSwipe}>
          <div class="touchArea">
            {this.data.wording}
          </div>
        </m-finger>
      </div>
    )
  }

  static css = `
  .touchArea{
    background-color: green;
    width: 200px;
    min-height: 200px;
    text-align: center;
    color:white;
    height:auto;
    white-space: pre-line;
}
  `
}


render(<my-app />, 'body')