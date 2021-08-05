import { tag, h, WeElement, OmiProps } from 'omi'

import * as css from './index.scss'

export interface Attrs {
  count?: number
}

const tagName = 'o-counter'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Attrs
    }
  }
}

export type Props = OmiProps<Omit<Attrs, 'count'> & { count: number }>

@tag(tagName)
export default class Counter extends WeElement<Props> {

  static css = css.default ? css.default : css

  static defaultProps = {
    count: 0
  }

  static propTypes = {
    count: Number
  }

  minus = () => {
    this.props.count--
    this.update()
  }

  plus = () => {
    this.props.count++
    this.update()
  }

  render(props: Props) {
    return (
      <h.f>
        <button onClick={this.minus}>-</button>
        <span>{props.count}</span>
        <button onClick={this.plus}>+</button>
      </h.f>
    )
  }
}

