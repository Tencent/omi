import { tag, h, WeElement, OverwriteProps } from 'omi'

import * as css from './index.scss'

export type Attrs = {
  count?: number
  onCountChanged?: (evt: CustomEvent) => void
}

const tagName = 'o-counter'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Attrs
    }
  }
}

export type Props = OverwriteProps<Attrs, { count: number }>

@tag(tagName)
export default class Counter extends WeElement<Props> {
  static css = css.default ? css.default : css

  static defaultProps = {
    count: 1
  }

  static propTypes = {
    count: Number
  }

  minus = () => {
    this.updateProps({
      count: this.props.count - 1
    })
    this.fire('count-changed', this.props.count)
  }

  plus = () => {
    this.updateProps({
      count: this.props.count + 1
    })
    this.fire('count-changed', this.props.count)
  }

  render(props: Props) {
    return (
      // <h.f></h.f> or <></> are supported
      <h.f>
        <button onClick={this.minus}>-</button>
        <span>{props.count}</span>
        <button onClick={this.plus}>+</button>
      </h.f>
    )
  }
}
