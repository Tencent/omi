import { define, WeElement } from 'omi'
import style from './_index.css'

define('o-slider', class extends WeElement {
  css() {
    return style
  }

  install() {
    this.percentage = this.props.percentage
  }
  installed() {
    this._width = this._ele.getBoundingClientRect().width
  }

  start = evt => {
    this._x = evt.touches[0].pageX
    document.addEventListener('touchmove', this.move)
    document.addEventListener('touchend', this.end)
  }

  move = evt => {
    this.percentage += ((evt.touches[0].pageX - this._x) / this._width) * 100
    this.percentage < 0 && (this.percentage = 0)
    this.percentage > 100 && (this.percentage = 100)
    this._x = evt.touches[0].pageX
    //Update immediately!For Smoother interaction！
    //omi v5.0.10 fix this
    //this.update()
    this.fire('change', this.percentage)
  }

  end = () => {
    document.removeEventListener('touchmove', this.move)
    document.removeEventListener('touchend', this.end)
  }

  render(props) {
    if (props.disabled) {
      return (
        <div class="weui-slider">
          <div
            ref={e => {
              this._ele = e
            }}
            class="weui-slider__inner"
          >
            <div style="width: 0;" class="weui-slider__track" />
            <div style="left: 0;" class="weui-slider__handler" />
          </div>
        </div>
      )
    }

    return (
      <div class="weui-slider-box" onTouchStart={this.start}>
        <div class="weui-slider">
          <div
            ref={e => {
              this._ele = e
            }}
            class="weui-slider__inner"
          >
            <div
              id="sliderTrack"
              style={`width: ${this.percentage}%;`}
              class="weui-slider__track"
            />
            <div
              id="sliderHandler"
              ref={e => {
                this._handler = e
              }}
              style={`left: ${this.percentage}%;`}
              class="weui-slider__handler"
            />
          </div>
        </div>
        <div id="sliderValue" class="weui-slider-box__value">
          {Math.round(this.percentage)}
        </div>
      </div>
    )
  }
})
