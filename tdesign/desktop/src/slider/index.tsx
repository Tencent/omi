import { h, OmiProps, tag, WeElement, render, classNames } from 'omi'
import style from './style'
import { TdClassNamePefix } from '../utils'
import { SliderProps } from './types'
import { ceil, clamp } from 'lodash'

const SliderClassNamePefix = (className: string) => TdClassNamePefix('slider__') + className;

@tag('t-slider')
export default class Slider extends WeElement<SliderProps> {

  static css = style;

  preLeft: number = 0;
  maxLeft: number = 0;
  curLeft: [number, number] = [0, 0];
  buttonIdx: number = 1;
  track: [number, number] = [0, 0];

  static defaultProps = {
    range: true
  };


  handleButtonMove = (evt: PointerEvent) => {
    const mouseX = evt.clientX;
    let l = 0;
    if (this.buttonIdx === 1) {
      l = clamp(mouseX - this.preLeft, this.curLeft[0], this.maxLeft);
    } else {
      const maxLeft = this.maxLeft * Number(`0.${this.curLeft[1]}`)
      l = clamp(mouseX - this.preLeft, 0, maxLeft)
    }
    this.curLeft[this.buttonIdx] = ceil(ceil(l / this.maxLeft, 2) * 100);
    this.track = [this.curLeft[0], this.curLeft[1] - this.curLeft[0]]
    this.update();
  }


  handleButtonDown(buttonIdx: number, evt: PointerEvent) {
    const btn = evt.currentTarget as HTMLDivElement;
    const container = btn.parentElement.parentElement.parentElement as HTMLDivElement;
    const { left: containerLeft, width: containerWidth } = container.getBoundingClientRect();
    this.preLeft = containerLeft;
    this.maxLeft = containerWidth;
    this.buttonIdx = buttonIdx;


    window.addEventListener('pointermove', this.handleButtonMove);
    const pointerUp = () => {
      window.removeEventListener('pointermove', this.handleButtonMove);
      window.removeEventListener('pointerup', pointerUp);
    }

    window.addEventListener('pointerup', pointerUp);
  }

  render(props: OmiProps<SliderProps>) {

    const { range } = props;

    return (
      <>

        <div class={SliderClassNamePefix('container')}>
          <div class={
            classNames(
              {
                [TdClassNamePefix('slider--with-input')]: true,
              },
              TdClassNamePefix('slider')
            )
          }>
            <div class={SliderClassNamePefix('rail')}>
              <div style={`left: ${this.track[0]}%; width: ${this.track[1]}%;`} class={SliderClassNamePefix('track')}>
              </div>

              {
                range && (
                  <div style={`left: ${this.curLeft[0]}%;`}
                    class={SliderClassNamePefix('button-wrapper')}>
                    <div class={SliderClassNamePefix('button')}
                      onPointerDown={(evt) => {
                        this.handleButtonDown(0, evt);
                      }}>
                    </div>
                  </div>
                )
              }

              <div style={`left: ${this.curLeft[1]}%;`} class={SliderClassNamePefix('button-wrapper')}>
                <div class={SliderClassNamePefix('button')}
                  onPointerDown={(evt) => {
                    this.handleButtonDown(1, evt)
                  }}>
                </div>
              </div>

              <div class={SliderClassNamePefix('stops')}></div>
              <div class={SliderClassNamePefix('mark')}></div>
            </div>
          </div>

          {/* <div class="t-slider__input-container">
            <div class="t-input-number t-size-m t-is-controls-right t-input-number--column t-slider-input">
              <button type="button" class="t-input-number__decrease t-button t-button--theme-default t-button--variant-outline t-button--shape-square">
                <svg fill="none" viewBox="0 0 24 24" width="1em" height="1em" class="t-icon t-icon-chevron-down t-size-m">
                  <path fill="currentColor" d="M17.5 8.09l-5.5 5.5-5.5-5.5L5.09 9.5 12 16.41l6.91-6.91-1.41-1.41z"></path>
                </svg>
              </button>
              <div class="t-input__wrap" value="35">
                <div class="t-input t-align-left">
                  <input placeholder="请输入" type="text" class="t-input__inner" autocomplete="off" value={this.curLeft[0]} />
                </div>
              </div>
              <button type="button" class="t-input-number__increase t-button t-button--theme-default t-button--variant-outline t-button--shape-square">
                <svg fill="none" viewBox="0 0 24 24" width="1em" height="1em" class="t-icon t-icon-chevron-up t-size-m">
                  <path fill="currentColor" d="M17.5 15.91l-5.5-5.5-5.5 5.5-1.41-1.41L12 7.59l6.91 6.91-1.41 1.41z">
                  </path>
                </svg>
              </button>
            </div>
          </div> */}
        </div>

      </>
    )
  }
}
