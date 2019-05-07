import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCSlider } from '@material/slider'

interface Props {
  discrete?: boolean,
  value?: number,
  disabled?: boolean
}

interface Data {

}


@tag('m-slider')
export default class Slider extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    value: 0,
    step: 1,
    min: 0,
    max: 100
  }

  static propTypes = {
    discrete: Boolean,
    value: Number,
    disabled: Boolean,
    min: Number,
    max: Number,
    step: Number
  }

  installed() {

    const slider = new MDCSlider(this.shadowRoot.querySelector('.mdc-slider'));
    slider.listen('MDCSlider:change', () => {
      this.fire('change', { value: slider.value })
    });
  }

  render(props) {
    const count = (props.max - props.min) / props.step
    return (
      <div {...extractClass(props, 'mdc-slider', {
        'mdc-slider--discrete': props.discrete,
        'mdc-slider--display-markers': props.displayMarkers
      })} tabIndex={0} role="slider"
        aria-valuemin={props.min} data-step={props.step} aria-valuemax={props.max} aria-valuenow={props.value}
        aria-label="Select Value" aria-disabled={props.disabled}>
        <div class="mdc-slider__track-container">
          <div class="mdc-slider__track"></div>
          {props.displayMarkers && <div class="mdc-slider__track-marker-container">
            {
              new Array(count).map(_ => <div class="mdc-slider__track-marker"></div>)
            }

          </div>}

        </div>
        <div class="mdc-slider__thumb-container">
          {props.discrete && <div class="mdc-slider__pin">
            <span class="mdc-slider__pin-value-marker"></span>
          </div>}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
          <div class="mdc-slider__focus-ring"></div>
        </div>
      </div>
    )
  }
}
