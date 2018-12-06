import { define, WeElement } from 'omi'
import style from './_index.css'

define('ow-slider', class extends WeElement {
  css() {
    return style
  }

  onChange = () => {
    this.fire('change', this.percentage)
  }

  installed() {
    this._width = this._ele.getBoundingClientRect().width
  }

  start = (evt) => {
    this._x = evt.touches[0].pageX
    document.addEventListener('touchmove', this.move)
    document.addEventListener('touchend', this.end)
  }

  move = (evt) => {
    this.props.percentage += (evt.touches[0].pageX - this._x) / this._width * 100
    this.props.percentage < 0 && (this.props.percentage = 0)
    this.props.percentage > 100 && (this.props.percentage = 100)
    this.update()
    this._x = evt.touches[0].pageX
  }

  end = () => {
    document.removeEventListener('touchmove', this.move)
    document.removeEventListener('touchend', this.end)
  }

  render(props) {

    if (props.disabled) {
      return (
        <div class="weui-slider">
          <div ref={e => { this._ele = e }} class="weui-slider__inner">
            <div style="width: 0;" class="weui-slider__track"></div>
            <div style="left: 0;" class="weui-slider__handler"></div>
          </div>
        </div>
      )
    }

    return (
      <div class="weui-slider-box" onTouchStart={this.start}  >
        <div class="weui-slider">
          <div ref={e => { this._ele = e }} class="weui-slider__inner">
            <div id="sliderTrack" style={`width: ${props.percentage}%;`} class="weui-slider__track"></div>
            <div id="sliderHandler" ref={e => { this._handler = e }} style={`left: ${props.percentage}%;`} class="weui-slider__handler"></div>
          </div>
        </div>
        <div id="sliderValue" class="weui-slider-box__value">{Math.round(props.percentage)}</div>
      </div>
    )
  }
})
