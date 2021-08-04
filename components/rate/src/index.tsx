import { tag, WeElement, h, extractClass, render } from 'omi'
import '@omiu/o-icon'
import * as css from './index.scss'

interface Props {
  value?: Number
  max?: Number
  half?: Boolean
  disabled?: Boolean
  readonly?: Boolean
  icon?: String
  color?: String
  view?: Number
}

const state = (data, base) => new Proxy(data, {
  set: function (target, propKey, value, receiver) {
    Reflect.set(target, propKey, value, receiver);
    base.update()
    return true
  }
})
@tag('o-rate')
export default class Rate extends WeElement<Props> {
  static css = css;

  static defaultProps = {
    size: 10,
    value: 1,
    max: 10,
    half: true,
    disabled: false,
    readonly: false,
    color: '#f7e620',
    width: 32
  }

  static propTypes = {
    value: Number,
    max: Number,
    half: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    icon: String,
    color: String,
    width: Number
  }

  state: any;

  install() {
    this.state = state({
      value: this.props.value
    }, this)
  }

  handleMousemove = (evt) => {
    if (!this.props.disabled && !this.props.readonly) {
      this.state.value = evt.target.dataset['rate']
    }
  }

  handleMouseleave = (evt) => {
    if (!this.props.disabled && !this.props.readonly) {
      this.state.value = this.props.value
    }
  }

  submit(index) {
    if (!this.props.disabled) {
      this.updateProps({
        value: index,
        readonly: !this.props.readonly
      })
    }
  }

  render(props) {
    const value = this.state.value
    let arr = Array.from({ length: props.max * 2 - 1 }).reduce((pre, cur) => [...pre, pre[pre.length - 1] + 0.5], [0.5])
    let that = this
    function getCls(value: number, max: number): String {
      if (value <= max) return that.props.color
      if (value > max) return '#ccc'
    }

    return (
      <div class="rate">
        {
          arr.map((rate, index) => (
            <div class="rating" style={{ width: props.width / 2, paddingRight: `${index % 2 == 0 ? 0 : props.width / 4}px` }} onMousemove={this.handleMousemove} onMouseleave={this.handleMouseleave} onClick={this.submit.bind(this, rate)} data-rate={rate}>
              <svg t="1627617455331" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1209" width={props.width} height={props.width} fill={getCls(rate, value)} data-rate={rate} style={{ transform: `translateX(${index % 2 == 0 ? 0 : props.width / 2 * -1}px)` }}>
                <path d="M964.685714 330.4l-290.171428-42.171429L544.8 25.257143c-3.542857-7.2-9.371429-13.028571-16.571429-16.571429-18.057143-8.914286-40-1.485714-49.028571 16.571429L349.485714 288.228571l-290.171428 42.171429c-8 1.142857-15.314286 4.914286-20.914286 10.628571a36.628571 36.628571 0 0 0 0.685714 51.771429l209.942857 204.685714-49.6 289.028572a36.514286 36.514286 0 0 0 53.028572 38.514285L512 788.571429l259.542857 136.457142c7.085714 3.771429 15.314286 5.028571 23.2 3.657143 19.885714-3.428571 33.257143-22.285714 29.828572-42.171428l-49.6-289.028572 209.942857-204.685714c5.714286-5.6 9.485714-12.914286 10.628571-20.914286 3.085714-20-10.857143-38.514286-30.857143-41.485714z" p-id="1210" data-rate={rate}></path>
              </svg>
            </div>
          )
          )
        }
      </div >
    )
  }
}