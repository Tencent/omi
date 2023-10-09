import { WeElement, h, tag, extractClass } from 'omi'
import * as css from './index.scss'
import '@omiu/tooltip'
// import Omiu from '@omiu/common'

interface Props {
  min: number
  max: number
  step?: number
  value: number
  second_value?: number
  size?: 'small' | 'normal' | 'large'
  range?: 'single' | 'double'
  orient?: 'vertical' | 'horizontal'
  shape?: 'square' | 'round'
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

  __$v1: any
  __$v2: any
  max: any
  min: any
  rootElement: HTMLElement
  sliderOneRef: HTMLInputElement
  sliderTwoRef: HTMLInputElement
  sliderTrack: HTMLElement

  install() {
    this.checkInvalidInputs()

    this.__$v1 = this.props.value
    this.max = this.props.max
    this.min = this.props.min
    this.props.range === 'double'
      ? (this.__$v2 = this.props.second_value)
      : (this.__$v2 = null)

    Object.defineProperty(this, 'value', {
      get: this._onGetV1,
      set: this._onSetV1,
    })
    Object.defineProperty(this, 'second_value', {
      get: this._onGetV2,
      set: this._onSetV2,
    })
  }

  installed() {
    this.applyTransform()
    this.fillTrackColor()
    // var picker = document.querySelector('#picker') as any
    // picker.addEventListener('change', (evt: any) => {
    //   console.log(evt.detail.color)
    //   Omiu.setTheme('primary', evt.detail.color)
    // })
  }

  beforeUpdate() {
    if (this.__$v1 > this.__$v2 && this.props.range === 'double') {
      const temp = this.__$v1
      this.__$v1 = this.__$v2
      this.__$v2 = temp
    }
  }

  updated() {
    this.fillTrackColor()
  }

  _onGetV1 = () => {
    return this.__$v1
  }

  _onSetV1 = (value: any) => {
    this.__$v1 = value
    this.props.value = value
    this.setAttribute('value', value)
  }

  _onGetV2 = () => {
    return this.__$v2
  }

  _onSetV2 = (value: any) => {
    this.__$v2 = value
    this.props.second_value = value
    this.setAttribute('second_value', value)
  }

  applyTransform() {
    let host = this.shadowRoot?.host as HTMLElement
    this.props.orient === 'vertical' &&
      (host.style.transform = 'rotate(-90deg)')
    this.props.reversed && (host.style.transform = 'rotate(180deg)')
    this.props.reversed &&
      this.props.orient === 'vertical' &&
      (host.style.transform = 'rotate(-270deg)')
  }

  checkInvalidInputs() {
    console.assert(this.props.value !== undefined, 'empty value')
    console.assert(this.props.min !== undefined, 'empty min')
    console.assert(this.props.max !== undefined, 'empty max')

    console.assert(
      this.props.size === 'small' ||
      this.props.size === 'normal' ||
      this.props.size === 'large',
      'invalid size option'
    )
    console.assert(
      this.props.range === 'single' || this.props.range === 'double',
      'invalid range option'
    )
    console.assert(
      this.props.orient === 'vertical' || this.props.orient === 'horizontal',
      'invalid orient option'
    )
    console.assert(
      this.props.shape === 'round' || this.props.shape === 'square',
      'invalid shape option'
    )

    this.props.range === 'double' &&
      console.assert(
        this.props.second_value !== undefined,
        'empty second value'
      )
  }

  handleS1Input = (evt: any) => {
    evt.stopPropagation()
    const first_value = parseInt(this.sliderOneRef.value)
    if (first_value <= this.__$v2 || this.props.range === 'single') {
      //  if the slider 1 has not exceeded slider2 or it is a single range slider
      //  assign value straight away
      this.__$v1 = first_value
    }
    if (this.props.range === 'single') {
      this.fire('input', this.__$v1)
    } else {
      this.fire('input', [this.__$v1, this.__$v2])
    }
    this.update()
  }

  handleS2Input = (evt: any) => {
    evt.stopPropagation()
    const second_value = parseInt(this.sliderTwoRef.value)
    //we only have one case if slider two exists
    if (second_value >= this.__$v1) {
      this.__$v2 = second_value
    }
    this.fire('input', [this.__$v1, this.__$v2])
    this.update()
  }

  handleS1Change = (evt: any) => {
    evt.stopPropagation()
    if (this.props.range === 'single') {
      this.fire('change', this.__$v1)
    } else {
      this.fire('change', [this.__$v1, this.__$v2])
    }
  }

  handleS2Change = (evt: any) => {
    evt.stopPropagation()
    this.fire('change', [this.__$v1, this.__$v2])
  }

  fillTrackColor = () => {
    const [percent1, percent2] = this.calcPercent()
    this.style.setProperty('--percent1', `${percent1}%`)
    this.style.setProperty('--percent2', `${percent2}%`)
  }

  calcPercent() {
    const range = this.max - this.min,
      v1 = range - this.max + this.__$v1,
      v2 = this.__$v2 && range - this.max + this.__$v2,
      percent1 = this.props.range === 'double' ? (v1 / range) * 100 : 0,
      percent2 =
        this.props.range === 'double' ? (v2 / range) * 100 : (v1 / range) * 100
    return [percent1, percent2]
  }

  sliderOneMove = (evt: any) => {
    this.MouseMove.call(this.sliderOneRef, evt)
  }

  sliderTwoMove = (evt: any) => {
    this.MouseMove.call(this.sliderTwoRef, evt)
  }

  MouseMove = (evt: any) => {
    const range = this.max - this.min,
      clickPoint = evt.offsetX / this.sliderOneRef.offsetWidth,
      clickPointVal = range * clickPoint + this.min
    /* absolute distance from respective slider values */
    const da = Math.abs(this.__$v1 - clickPointVal),
      db = Math.abs(this.__$v2 - clickPointVal)
    // Making the two sliders appear above one another only when no mouse button is pressed
    if (this.props.range === 'double') {
      if (!evt.buttons) {
        if (da < db) {
          this.sliderOneRef.style.zIndex = '2'
          this.sliderTwoRef.style.zIndex = '1'
        } else if (db < da) {
          this.sliderTwoRef.style.zIndex = '2'
          this.sliderOneRef.style.zIndex = '1'
        }
      }
    }
  }

  render(props: any) {
    const cls = extractClass(props, 'slider-container', {
      'is-vertical': props.orient === 'vertical',
      'is-disabled': props.disabled,
      ['is-' + props.shape]: props.shape,
      ['is-' + props.size]: props.size,
    })

    const sliderOne = (
      <input
        class="o-slider"
        id="slider-1"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={this.__$v1}
        onInput={this.handleS1Input}
        onChange={this.handleS1Change}
        onMouseMove={this.sliderOneMove}
        ref={(e) => {
          this.sliderOneRef = e
        }}
      />
    )

    const sliderTwo = (
      <input
        class="o-slider"
        id="slider-2"
        type="range"
        min={props.min}
        max={props.max}
        value={this.__$v2}
        onInput={this.handleS2Input}
        onChange={this.handleS2Change}
        onMouseMove={this.sliderTwoMove}
        ref={(e) => {
          this.sliderTwoRef = e
        }}
      />
    )

    return (
      <div
        {...cls}
        ref={(e) => {
          this.rootElement = e
        }}
      >
        {this.props.tooltip ? (
          <o-tooltip
            class="tooltip"
            position="top"
            effect="dark"
            content={
              this.props.range === 'double'
                ? `${this.__$v1} , ${this.__$v2}`
                : this.__$v1
            }
          >
            {sliderOne}
          </o-tooltip>
        ) : (
          <div>{sliderOne}</div>
        )}

        {this.props.range === 'double' &&
          (this.props.tooltip ? (
            <o-tooltip
              class="tooltip"
              position="top"
              effect="dark"
              content={
                this.props.range === 'double'
                  ? `${this.__$v1} , ${this.__$v2}`
                  : this.__$v1
              }
            >
              {sliderTwo}
            </o-tooltip>
          ) : (
            <div>{sliderTwo}</div>
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
