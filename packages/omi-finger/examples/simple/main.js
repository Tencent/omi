import { render, tag, WeElement } from 'omi'
import '../../index'

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
    this.data.wording += '\r\nSwipe-' + evt.direction
    this.update()
  }

  render() {
    return (
      <div>
         {this.data.wording}
        <omi-finger onTap={this.handleTap} abc={{a:1}} onSwipe={this.handleSwipe}>
          <div class="touchArea" >
            {this.data.wording}
          </div>
        </omi-finger>
      </div>
    )
  }

  css() {
    return `.touchArea{
                  background-color: green;
                  width: 200px;
                  min-height: 200px;
                  text-align: center;
                  color:white;
                  height:auto;
                  white-space: pre-line;
              }`
  }
}

render(<my-app></my-app>, 'body')
