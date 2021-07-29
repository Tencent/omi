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
}

// window.onload = function () {
//   slideOne()
//   slideTwo()
// }

@tag('o-slider')
export default class OSlider extends WeElement<Props> {
  static css = css.default

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
    second_value: Number,
    double_range: Boolean,
    vertical: Boolean
  }

  __$value: number

  __$second_value: number

  rootNode
  sliderOne
  sliderTwo

  sliderTrack
  sliderMax = this.props.max

  handleSliderOne = () => {
    const first_value = parseInt(this.rootNode.children[0].value)
    if (this.__$second_value === null || first_value <= this.__$second_value) {
      this.__$value = first_value
    }

    console.log(this.__$value, this.__$second_value)

    // this.displayValOne.textContent = this.sliderOne.value
    this.fillColor()
    this.update()
  }

  handleSliderTwo = () => {
    console.log(this.__$value, this.__$second_value)

    const second_value = parseInt(this.rootNode.children[1].value)

    if (second_value >= this.__$value) {
      this.__$second_value = second_value
    }
    // this.displayValTwo.textContent = this.sliderTwo.value
    this.fillColor()
    this.update()
  }

  fillColor = () => {
    let percent1 = (this.__$value / this.props.max) * 100
    let percent2 = (this.__$second_value / this.props.max) * 100
    this.props.double_range
      ? (this.sliderTrack.style.background = `linear-gradient(to right, #ffffff ${percent1}% , #07c160 ${percent1}% , #07c160 ${percent2}%, #ffffff ${percent2}%)`)
      : (this.sliderTrack.style.background = `linear-gradient(to right, #07c160 ${percent1}% , #07c160 ${percent1}% , #07c160 ${percent2}%, #ffffff ${percent2}%)`)
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
  updated() {}

  render(props) {
    console.log(props)

    const cls = extractClass(props, 'slider-container', {
      'is-vertical': props.vertical
    })
    console.log(cls)

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

        {/* <button oninput={console.log(this.sliderContainer.style)}></button> */}
      </div>
    )
  }
}
