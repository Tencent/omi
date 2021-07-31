import { WeElement, h, tag, extractClass } from 'omi'

import * as css from './index.scss'

interface Props {
  min?: number
  max?: number
  step?: number
  value?: number
  second_value?: number
  double_range?: boolean
  vertical?: boolean
  round: boolean
  disabled?: boolean
}

@tag('o-slider')
export default class OSlider extends WeElement<Props> {
  static css = css

  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    //default a single square range slider
    double_range: false,
    vertical: false,
    round: false,
    disabled: false,
  }

  static propTypes = {
    min: Number,
    max: Number,
    step: Number,
    value: Number,
    second_value: Number,
    double_range: Boolean,
    vertical: Boolean,
    round: Boolean,
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
    //! bad
    if (first_value <= this.__$second_value || !this.props.double_range) {
      this.__$value = first_value
      if (!this.props.double_range) {
        this.fire('change', this.__$value)
      } else {
        this.fire('change', [this.__$value, this.__$second_value])
      }
    }

    this.fillColor()
    this.update()
  }

  handleSliderTwo = (evt) => {
    const second_value = parseInt(this.rootNode.children[1].value)
    if (second_value >= this.__$value) {
      this.__$second_value = second_value
      this.fire('change', [this.__$value, this.__$second_value])
    }

    this.fillColor()
    this.update()
  }

  fillColor = () => {
    let percent1 = (this.__$value / this.props.max) * 100
    let percent2 = (this.__$second_value / this.props.max) * 100
    let lowerColor = '#07c160'
    let upperColor = '#ffffff'
    if (this.props.disabled) {
      lowerColor = '#c0c4cc'
    }

    this.props.double_range
      ? (this.sliderTrack.style.background = `linear-gradient(to right, ${upperColor} ${percent1}% , ${lowerColor} ${percent1}% , ${lowerColor} ${percent2}%, ${upperColor} ${percent2}%)`)
      : (this.sliderTrack.style.background = `linear-gradient(to right, ${lowerColor} ${percent1}% , ${lowerColor} ${percent1}% , ${lowerColor} ${percent2}%, ${upperColor} ${percent2}%)`)
  }

  install() {
    this.props.value
      ? (this.__$value = this.props.value as any)
      : (this.__$value = OSlider.defaultProps.value)
    this.props.second_value
    this.__$second_value = this.props.second_value as any
  }

  installed() {
    this.fillColor()
    this.update()
  }

  render(props) {
    const cls = extractClass(props, 'slider-container', {
      'is-vertical': props.vertical,
      'is-round': props.round,
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
        {props.double_range && (
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
