import { WeElement, h, tag, extractClass } from 'omi'
import * as css from './index.scss'
import '@omiu/tooltip'
import '@omiu/input'

interface Props {
  min?: number
  max?: number
  step?: number
  value?: number
  second_value?: number
  range: 'single' | 'double'
  orient?: 'vertical' | 'horizontal'
  shape: 'square' | 'round'
  tooltip?: boolean
  disabled?: boolean
  reversed?: boolean
}

@tag('o-slider')
export default class OSlider extends WeElement<Props> {
  static css = css

  static defaultProps = {
    //default a single round range slider
    min: undefined,
    max: undefined,
    step: 1,
    value: undefined,
    second_value: undefined,
    range: 'single',
    orient: 'horizontal',
    shape: 'round',
    tooltip: false,
    disabled: false,
    reversed: false,
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
    tooltip: Boolean,
    disabled: Boolean,
    reversed: Boolean,
  }

  value1: number
  value2: number

  rootNode
  slider1
  slider2
  sliderTrack
  sliderMax = this.props.max

  handleSliderOne = () => {
    const first_value = parseInt(this.slider1.value)
    if (first_value <= this.value2 || this.props.range === 'single') {
      //  if the slider 1 has not exceeded slider2 or it is a single range slider
      //  assign value straight away
      this.value1 = first_value
    }
    if (this.props.range === 'single') {
      this.fire('change', this.value1)
    } else {
      this.fire('change', [this.value1, this.value2])
    }
    this.fillColor()
    this.update()
  }

  handleSliderTwo = () => {
    const second_value = parseInt(this.slider2.value)
    //we only have one case if slider two exists
    if (second_value >= this.value1) {
      this.value2 = second_value
    }
    this.fire('change', [this.value1, this.value2])
    this.fillColor()
    this.update()
  }

  fillColor = () => {
    let percent1 =
      this.props.range === 'double' ? (this.value1 / this.props.max) * 100 : 0
    let percent2 =
      this.props.range === 'double'
        ? (this.value2 / this.props.max) * 100
        : (this.value1 / this.props.max) * 100
    let lowerColor = '#07c160'
    let upperColor = '#ffffff'
    if (this.props.disabled) {
      lowerColor = '#c0c4cc'
    }

    this.props.range === 'double'
      ? (this.sliderTrack.style.background = `linear-gradient(to right, ${upperColor} ${percent1}% , ${lowerColor} ${percent1}% , ${lowerColor} ${percent2}%, ${upperColor} ${percent2}%)`)
      : (this.sliderTrack.style.background = `linear-gradient(to right, ${lowerColor} ${percent1}% , ${lowerColor} ${percent1}% , ${lowerColor} ${percent2}%, ${upperColor} ${percent2}%)`)
  }

  install() {
    this.value1 = this.props.value
    this.props.range === 'double'
      ? (this.value2 = this.props.second_value)
      : (this.value2 = null)
  }

  installed() {
    this.fillColor()
    this.update()
    let host = this.shadowRoot.host as HTMLElement
    this.props.orient === 'vertical' &&
      (host.style.transform = 'rotate(-90deg)')
  }

  receiveProps() {
    this.handleSliderOne()
    this.handleSliderTwo()
    this.update()
  }

  handleInput(evt) {
    this.value1 = evt.detail
    console.log(this.value1)
  }

  render(props) {
    const cls = extractClass(props, 'slider-container', {
      'is-vertical': props.orient === 'vertical',
      'is-round': props.shape === 'round',
      'is-disabled': props.disabled,
      'is-reversed': props.reversed,
    })

    return (
      <div
        {...cls}
        ref={(e) => {
          this.rootNode = e
        }}
      >
        {/* =================================SINGLE=================================== */}
        {this.props.tooltip ? (
          <o-tooltip
            class="tooltip"
            position="top"
            effect="dark"
            content={
              this.props.range === 'double'
                ? `${this.value1} , ${this.value2}`
                : this.value1
            }
          >
            <input
              class="o-slider"
              type="range"
              min={props.min}
              max={props.max}
              step={props.step}
              value={this.value1}
              onInput={this.handleSliderOne}
              id="slider-1"
              ref={(e) => {
                this.slider1 = e
              }}
            />
          </o-tooltip>
        ) : (
          /* ========================SINGLE-NO-TOOLTIP================================ */
          <input
            class="o-slider"
            type="range"
            min={props.min}
            max={props.max}
            value={this.value1}
            onInput={this.handleSliderOne}
            id="slider-1"
            ref={(e) => {
              this.slider1 = e
            }}
          />
        )}

        {/* =================================DOUBLE=================================== */}

        {this.props.range === 'double' &&
          (this.props.tooltip ? (
            <o-tooltip
              class="tooltip"
              position="top"
              effect="dark"
              content={
                this.props.range === 'double'
                  ? `${this.value1} , ${this.value2}`
                  : this.value1
              }
            >
              <input
                class="o-slider"
                type="range"
                min={props.min}
                max={props.max}
                value={this.value2}
                onInput={this.handleSliderTwo}
                id="slider-2"
                ref={(e) => {
                  this.slider2 = e
                }}
              />
            </o-tooltip>
          ) : (
            /* ========================DOUBLE-NO-TOOLTIP============================== */
            <input
              class="o-slider"
              type="range"
              min={props.min}
              max={props.max}
              value={this.value2}
              onInput={this.handleSliderTwo}
              id="slider-2"
              ref={(e) => {
                this.slider2 = e
              }}
            />
          ))}
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
