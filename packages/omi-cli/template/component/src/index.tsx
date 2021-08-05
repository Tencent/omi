import { tag, h, WeElement } from 'omi'

import * as css from './index.scss'

export interface Props {
  count: number
}

const tagName = 'o-counter'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class Counter extends WeElement<Props> {

  static css = css.default ? css.default : css

  static defaultProps = {
    count: 0
  }

  static propTypes = {
    count: Number
  }

  count: number = 0

  install() {
    this.count = this.props.count
  }

  sub = () => {
    this.count--
    this.update()
  }

  add = () => {
    this.count++
    this.update()
  }

  render() {
    return (
      <h.f>
        <button onClick={this.sub}>-</button>
        <span>{this.count}</span>
        <button onClick={this.add}>+</button>
      </h.f>
    )
  }
}

