import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCLinearProgress } from '@material/linear-progress'

interface Props {
  buffer?: number,
  value?: number,
  indeterminate: boolean,
  reversed: boolean
}

interface Data {

}


@tag('m-linear-progress')
export default class LinearProgress extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    buffer: 1,
    value: 0
  }

  static propTypes = {
    buffer: Number,
    value: Number,
    indeterminate: Boolean,
    reversed: Boolean
  }

  installed() {

    new MDCLinearProgress(this.shadowRoot.querySelector('.mdc-linear-progress'));
    // progress.listen('MDCSlider:change', () => {
    //   this.fire('change', { value: slider.progress })
    // });
  }

  render(props) {

    if(props.indeterminate){
      return  <div role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate"><div class="mdc-linear-progress__buffering-dots"></div><div class="mdc-linear-progress__buffer"></div><div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div><div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>
    }

    return (
     
      <div role="progressbar" {...extractClass(props,'mdc-linear-progress',{
        "mdc-linear-progress--reversed" :props.reversed
      })}>
        <div class="mdc-linear-progress__buffering-dots"></div>
        <div class="mdc-linear-progress__buffer" style={`transform: scaleX(${props.buffer});`}>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={`transform: scaleX(${props.value});`}>
          <span class="mdc-linear-progress__bar-inner">
          </span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>

    )

  }
}
