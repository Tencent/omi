import { WeElement, h, tag, extractClass } from 'omi'

import * as css from './index.scss'

interface Props {
  min?: number
  max?: number
  step?: number
  value?: number
  second_value?: number
  range: 'single' | 'double'
  orient?: 'vetical' | 'horizontal'
  shape: 'square' | 'round'
  disabled?: boolean
}

@tag('o-slider')
export default class OSlider extends WeElement<Props> {
  static css = css

  static defaultProps = {
    //default a single square range slider
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    second_value: 100,
    range: 'single',
    orient: 'horizontal',
    shape: 'square',
    disabled: false,
  }

  static propTypes = {
    min: Number,
    max: Number,
    step: Number,
    value: Number,
    second_value: Number,
    range: String,
    orient: String,
    shape: String,
    disabled: Boolean,
  }

  __$value: number
  __$second_value: number

  rootNode
  sliderOne
  sliderTwo
  sliderTrack
  sliderMax = this.props.max

  handleSliderOne = (evt) => {
    const first_value = parseInt(this.rootNode.children[0].value)
    if (first_value <= this.__$second_value || this.__$second_value === null) {
      //  if the slider 1 has not exceeded slider2 or it is a single range slider
      //  assign value straight away
      this.__$value = first_value
    }
    if (this.__$second_value === null) {
      this.fire('change', this.__$value)
    } else {
      this.fire('change', [this.__$value, this.__$second_value])
    }
    this.fillColor()
    this.update()
  }

  handleSliderTwo = (evt) => {
    const second_value = parseInt(this.rootNode.children[1].value)
    //we only have one case if slider two exists
    if (second_value >= this.__$value) {
      this.__$second_value = second_value
    }
    this.fire('change', [this.__$value, this.__$second_value])
    this.fillColor()
    this.update()
  }

  fillColor = () => {
    let percent1 =
      this.__$second_value !== null ? (this.__$value / this.props.max) * 100 : 0
    let percent2 =
      this.__$second_value !== null
        ? (this.__$second_value / this.props.max) * 100
        : (this.__$value / this.props.max) * 100
    let lowerColor = '#07c160'
    let upperColor = '#ffffff'
    if (this.props.disabled) {
      lowerColor = '#c0c4cc'
    }

    this.__$second_value !== null
      ? (this.sliderTrack.style.background = `linear-gradient(to right, ${upperColor} ${percent1}% , ${lowerColor} ${percent1}% , ${lowerColor} ${percent2}%, ${upperColor} ${percent2}%)`)
      : (this.sliderTrack.style.background = `linear-gradient(to right, ${lowerColor} ${percent1}% , ${lowerColor} ${percent1}% , ${lowerColor} ${percent2}%, ${upperColor} ${percent2}%)`)
  }

  install() {
    this.__$value = this.props.value
    this.props.range === 'double'
      ? (this.__$second_value = this.props.second_value)
      : (this.__$second_value = null)
  }

  installed() {
    this.fillColor()
    this.update()
  }

  render(props) {
    const cls = extractClass(props, 'slider-container', {
      'is-vertical': props.orient === 'vertical',
      'is-round': props.shape === 'round',
      'is-disabled': props.disabled,
    })

    return (
      <div
        {...cls}
        ref={(e) => {
          this.rootNode = e
        }}
      >
        <input
          class="o-slider"
          type="range"
          min={props.min}
          max={props.max}
          value={this.__$value}
          onInput={this.handleSliderOne}
          id="slider-1"
          ref={(e) => {
            this.sliderOne = e
          }}
        />
        {this.__$second_value !== null && (
          <input
            class="o-slider"
            type="range"
            min={props.min}
            max={props.max}
            value={this.__$second_value}
            onInput={this.handleSliderTwo}
            id="slider-2"
            ref={(e) => {
              this.sliderTwo = e
            }}
          />
        )}
        <div
          class="slider-track"
          ref={(e) => {
            this.sliderTrack = e
          }}
        ></div>
      </div>
    )
  }
}
