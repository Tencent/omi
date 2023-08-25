import { h, OmiProps, tag, WeElement, render, classNames } from 'omi'
import style from './style'
import { TdClassNamePrefix } from '../utils'
import { SliderProps } from './types'
import { ceil, clamp } from 'lodash'

import '../input-number'

const SliderClassNamePrefix = (className: string) => TdClassNamePrefix('slider__') + className

@tag('t-slider')
export default class Slider extends WeElement<SliderProps> {
  static css = style

  preLeft: number = 0
  maxLeft: number = 0
  curLeft: [number, number] = [0, 0]
  buttonIdx: number = 1
  track: [number, number] = [0, 0]

  static defaultProps = {
    range: false,
  }

  handleButtonMove = (evt: PointerEvent) => {
    const mouseX = evt.clientX
    let l = 0
    if (this.buttonIdx === 1) {
      l = clamp(mouseX - this.preLeft, this.curLeft[0], this.maxLeft)
    } else {
      const maxLeft = this.maxLeft * Number(`0.${this.curLeft[1]}`)
      l = clamp(mouseX - this.preLeft, 0, maxLeft)
    }
    this.curLeft[this.buttonIdx] = ceil(ceil(l / this.maxLeft, 2) * 100)
    this.track = [this.curLeft[0], this.curLeft[1] - this.curLeft[0]]
    this.update()
  }

  handleButtonDown(buttonIdx: number, evt: PointerEvent) {
    const btn = evt.currentTarget as HTMLDivElement
    const container = btn.parentElement.parentElement.parentElement as HTMLDivElement
    const { left: containerLeft, width: containerWidth } = container.getBoundingClientRect()
    this.preLeft = containerLeft
    this.maxLeft = containerWidth
    this.buttonIdx = buttonIdx

    window.addEventListener('pointermove', this.handleButtonMove)
    const pointerUp = () => {
      window.removeEventListener('pointermove', this.handleButtonMove)
      window.removeEventListener('pointerup', pointerUp)
    }

    window.addEventListener('pointerup', pointerUp)
  }

  handleChangeValue(val: any) {
    if (this.props.range) {
    } else {
      this.curLeft[1] = Math.min(100, val)
      this.track = [this.curLeft[0], this.curLeft[1] - this.curLeft[0]]
      this.update()
    }
  }

  render(props: OmiProps<SliderProps>) {
    const { range, inputNumberProps } = props

    return (
      <>
        <div class={SliderClassNamePrefix('container')}>
          <div
            class={classNames(
              {
                [TdClassNamePrefix('slider--with-input')]: true,
              },
              TdClassNamePrefix('slider'),
            )}
          >
            <div class={SliderClassNamePrefix('rail')}>
              <div
                style={`left: ${this.track[0]}%; width: ${this.track[1]}%;`}
                class={SliderClassNamePrefix('track')}
              ></div>

              {range && (
                <div style={`left: ${this.curLeft[0]}%;`} class={SliderClassNamePrefix('button-wrapper')}>
                  <div
                    class={SliderClassNamePrefix('button')}
                    onPointerDown={(evt) => {
                      this.handleButtonDown(0, evt)
                    }}
                  ></div>
                </div>
              )}

              <div style={`left: ${this.curLeft[1]}%;`} class={SliderClassNamePrefix('button-wrapper')}>
                <div
                  class={SliderClassNamePrefix('button')}
                  onPointerDown={(evt) => {
                    this.handleButtonDown(1, evt)
                  }}
                ></div>
              </div>

              <div class={SliderClassNamePrefix('stops')}></div>
              <div class={SliderClassNamePrefix('mark')}></div>
            </div>
          </div>

          {inputNumberProps && (
            <div class="t-slider__input-container">
              <t-input-number
                value={this.curLeft[1] - this.curLeft[0]}
                onChangeValue={this.handleChangeValue.bind(this)}
              />
            </div>
          )}
        </div>
      </>
    )
  }
}
