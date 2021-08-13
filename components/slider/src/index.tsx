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
  size: 'slim' | 'normal' | 'large'
  range: 'single' | 'double'
  orient?: 'vertical' | 'horizontal'
  shape: 'square' | 'round'
  tooltip?: boolean
  disabled?: boolean
  reversed?: boolean
}

@tag('o-slider')
export default class OSlider extends WeElement<Props> {
  static defaultProps = {
    //default a single round range slider
    min: undefined,
    max: undefined,
    step: 1,
    value: undefined,
    second_value: undefined,
    range: 'single',
    size: 'normal',
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
    size: String,
    orient: String,
    shape: String,
    tooltip: Boolean,
    disabled: Boolean,
    reversed: Boolean,
  }

  static css = css.default ? css.default : css

  __$value1: number
  __$value2: number

  rootNode: HTMLElement
  slider1: HTMLInputElement
  slider2: HTMLInputElement
  sliderTrack: HTMLElement
  sliderMax: number = this.props.max

  lowerColor = '#07c160'
  upperColor = '#f0f0f0'

  install() {
    this.__$value1 = this.props.value
    this.props.range === 'double'
      ? (this.__$value2 = this.props.second_value)
      : (this.__$value2 = null)

    Object.defineProperty(this, 'value', {
      get: this._onGetValue,
      set: this._onSetValue,
    })
    Object.defineProperty(this, 'second_value', {
      get: this._onGetValue2,
      set: this._onSetValue2,
    })
  }

  installed() {
    this.fillColor(this.lowerColor, this.upperColor)
    let host = this.shadowRoot.host as HTMLElement
    this.props.orient === 'vertical' &&
      (host.style.transform = 'rotate(-90deg)')
    this.props.reversed && (host.style.transform = 'rotate(180deg)')
  }

  _onGetValue = () => {
    return this.__$value1
  }

  _onSetValue = (value) => {
    this.__$value1 = value
    this.props.value = value
    this.setAttribute('value', value)
  }

  _onGetValue2 = () => {
    return this.__$value2
  }

  _onSetValue2 = (value) => {
    this.__$value2 = value
    this.props.second_value = value
    this.setAttribute('second_value', value)
  }

  beforeUpdate() {
    if (this.__$value1 > this.__$value2 && this.props.range === 'double') {
      const temp = this.__$value1
      this.__$value1 = this.__$value2
      this.__$value2 = temp
    }
  }

  updated() {
    this.fillColor('#059048', '#d9d9d9')
  }

  handleS1Input = (evt) => {
    evt.stopPropagation()
    const first_value = parseInt(this.slider1.value)
    if (first_value <= this.__$value2 || this.props.range === 'single') {
      //  if the slider 1 has not exceeded slider2 or it is a single range slider
      //  assign value straight away
      this.__$value1 = first_value
    }
    if (this.props.range === 'single') {
      this.fire('input', this.__$value1)
    } else {
      this.fire('input', [this.__$value1, this.__$value2])
    }
    this.update()
  }

  handleS2Input = (evt) => {
    evt.stopPropagation()
    const second_value = parseInt(this.slider2.value)
    //we only have one case if slider two exists
    if (second_value >= this.__$value1) {
      this.__$value2 = second_value
    }
    this.fire('input', [this.__$value1, this.__$value2])
    this.update()
  }

  handleS1Change = (evt) => {
    if (this.props.range === 'single') {
      this.fire('change', this.__$value1)
    } else {
      this.fire('change', [this.__$value1, this.__$value2])
    }
  }

  handleS2Change = (evt) => {
    this.fire('change', [this.__$value1, this.__$value2])
  }

  fillColor = (lowerColor, upperColor) => {
    let percent1 =
      this.props.range === 'double'
        ? (this.__$value1 / this.props.max) * 100
        : 0
    let percent2 =
      this.props.range === 'double'
        ? (this.__$value2 / this.props.max) * 100
        : (this.__$value1 / this.props.max) * 100

    if (this.props.disabled) {
      lowerColor = '#c0c4cc'
    }

    this.props.range === 'double'
      ? (this.sliderTrack.style.background = `linear-gradient(to right, ${upperColor} ${percent1}% , ${lowerColor} ${percent1}% , ${lowerColor} ${percent2}%, ${upperColor} ${percent2}%)`)
      : (this.sliderTrack.style.background = `linear-gradient(to right, ${lowerColor} ${percent1}% , ${lowerColor} ${percent1}% , ${lowerColor} ${percent2}%, ${upperColor} ${percent2}%)`)
  }

  handleMouseUp = () => {
    this.fillColor(this.lowerColor, this.upperColor)
  }

  render(props) {
    const cls = extractClass(props, 'slider-container', {
      'is-vertical': props.orient === 'vertical',
      'is-round': props.shape === 'round',
      'is-large': props.size === 'large',
      'is-slim': props.size === 'slim',
      'is-disabled': props.disabled,
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
                ? `${this.__$value1} , ${this.__$value2}`
                : this.__$value1
            }
          >
            <input
              class="o-slider"
              id="slider-1"
              type="range"
              min={props.min}
              max={props.max}
              step={props.step}
              value={this.__$value1}
              onInput={this.handleS1Input}
              onChange={this.handleS1Change}
              onMouseUp={this.handleMouseUp}
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
            value={this.__$value1}
            onInput={this.handleS1Input}
            onChange={this.handleS1Change}
            onMouseUp={this.handleMouseUp}
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
                  ? `${this.__$value1} , ${this.__$value2}`
                  : this.__$value1
              }
            >
              <input
                class="o-slider"
                type="range"
                min={props.min}
                max={props.max}
                value={this.__$value2}
                onInput={this.handleS2Input}
                onChange={this.handleS2Change}
                onMouseUp={this.handleMouseUp}
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
              value={this.__$value2}
              onInput={this.handleS2Input}
              onChange={this.handleS2Change}
              onMouseUp={this.handleMouseUp}
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
