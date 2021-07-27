import { tag, WeElement, h, extractClass, render } from 'omi'
import '@omiu/o-icon'
import * as css from './index.scss'

interface Props {
  value?: Number
  max?: Number
  precision?: Number
  disabled?: Boolean
  readonly: Boolean
  icon?: String
  color?: String
  path?: String
}

const state = (data, base) => new Proxy(data, {
  set: function (target, propKey, value, receiver) {
    Reflect.set(target, propKey, value, receiver);
    base.update()
    return true
  }
})

function getSvgPath(svgData) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(svgData, "image/svg+xml");
  let path = doc.getElementsByTagName("path")[0].getAttribute("d");
  return path
}

@tag('o-rate')
export default class Rate extends WeElement<Props> {
  static css = css.default;

  static defaultProps = {
    size: 10,
    value: 1,
    max: 10,
    precision: 1,
    disabled: false,
    readonly: false,
    color: '#f7e620',
    path: 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'
  }

  static propTypes = {
    value: Number,
    max: Number,
    precision: Number,
    disabled: Boolean,
    readonly: Boolean,
    icon: String,
    color: String,
    path: String,
  }

  state: any;

  install(){
    this.state = state({
      value: this.props.value
    }, this)
  }

  handleMousemove = (evt) => {
    if (!this.props.disabled && !this.props.readonly) {
      this.state.value = Number(evt.target.dataset['rate'])
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
    let emptynum = Array.from({ length: Math.floor(props.max) }, (v, k) => k + 1)
    let that = this
    function getCls(value: number, max: number): String {
      if (value <= max) return that.props.color
      if (value > max) return '#ccc'
    }

    return (
      <div className="rating">
        {
          emptynum.map((rate, index) => (
            <o-icon view='24' color={getCls(rate, value)} scale='2'
              path={props.path} onMousemove={this.handleMousemove} onMouseleave={this.handleMouseleave} onClick={this.submit.bind(this, rate)} data-rate={rate}>
            </o-icon>
          )
          )
        }
      </div>
    )
  }
}