import { tag, h, WeElement, OverwriteProps } from 'omi'

import * as css from './index.scss'
import '../../step'

export type Attrs = {
  active?: number,
}

const tagName = 'o-steps'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Attrs
    }
  }
}


export type Props = OverwriteProps<Attrs, { active: number }>

@tag(tagName)
export default class Steps extends WeElement<Props> {

  static css = css.default ? css.default : css

  static defaultProps = {
    active: 0
  }

  static propTypes = {
    active: Number
  }


  beforeRender = () => {
    console.log('this.props.active', this.props.active)

    this.provide = {
      active: this.props.active
    }
  }

  render(props: Props) {
    return (
      <h.f>
        <div className='o-steps'>
          <slot></slot>
        </div>
      </h.f>
    )
  }
}

