import { WeElement, h, tag, extractClass } from 'omi'
import Script from './script'

import * as css from './index.scss'

interface Props {
  min?: number
  max?: number
  step?: number
  value?: number
  double_range?: boolean
  vertical?: boolean
}

@tag('o-slider')
export default class OSlider extends WeElement<Props> {
  static css = css.default

  __$value: number

  __$valueSecond: number

  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    value: 20,
    //default single range slider
    double_range: false,
    vertical: false
  }

  static propTypes = {
    min: Number,
    max: Number,
    step: Number,
    value: Number,
    double_range: Boolean,
    vertical: Boolean
  }

  handleInput = (evt) => {
    const sliderList =
      this.shadowRoot.getElementById('slider-container').children
    this.__$value = sliderList[0].value

    this.props.double_range && (this.__$valueSecond = sliderList[1].value)
    console.log(this.__$value, this.__$valueSecond)

    this.update()
  }

  install() {
    this.__$value = this.props.value as any
  }

  updated() {}

  render(props) {
    console.log(props)
    const cls = extractClass(props, 'o-slider', {
      'is-vertical': props.vertical
    })
    console.log(cls)

    return (
      <div class="slider-container" id="slider-container">
        <input
          {...cls}
          type="range"
          min={props.min}
          max={props.max}
          value={this.__$value}
          onInput={this.handleInput}
          id="inputA"
        />
        {props.double_range && (
          <input
            {...cls}
            type="range"
            min={props.min}
            max={props.max}
            value={this.__$valueSecond}
            onInput={this.handleInput}
            id="inputB"
          />
        )}

        {/* <button oninput={console.log(this.sliderContainer.style)}></button> */}
      </div>
    )
  }
}
