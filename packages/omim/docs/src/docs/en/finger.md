## Finger

Mobile Gesture Event Recognition.

[→ Touch Me](https://tencent.github.io/omi/packages/omim/demos/finger/index.html)

## Usage

```jsx
import 'omim/finger'
import { render, h, tag, WeElement } from 'omi'

@tag('my-app')
class MyApp extends WeElement {
  handleTap = (evt) => {
    this.wording += '\r\nTap'
    this.update()
  }

  handleSwipe = (evt) => {
    this.wording += '\r\nSwipe-' + evt.detail.direction
    this.update()
  }

  render() {
    return (
      <div id='app'>
        <m-finger onTap={this.handleTap} onSwipe={this.handleSwipe}>
          <div class="touchArea">
            {this.wording}
          </div>
        </m-finger>
      </div>
    )
  }
}

render(<my-app />, 'body')
```

## API

### Props

```jsx
{
  onTouchStart: function () { },
  TouchMove: function () { },
  TouchEnd:  function () { },
  TouchCancel: function () { },
  MultipointStart: function () { },
  MultipointEnd: function () { },
  Tap: function () { },
  DoubleTap: function () { },
  LongTap: function () { },
  SingleTap: function () { },
  Rotate: function (evt) {
    console.log(evt.detail.angle)
  },
  Pinch: function (evt) {
    console.log(evt.detail.zoom)
  },
  PressMove: function (evt) {
    console.log(evt.detail.deltaX)
    console.log(evt.detail.deltaY)
  },
  Swipe: function (evt) {
    console.log("swipe" + evt.detail.direction)
  }
}
```