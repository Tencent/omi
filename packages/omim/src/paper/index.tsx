import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import '../theme.ts'

interface Props {
  elevation: number,
  square?: boolean
}

interface Data {

}

@tag('m-paper')
export default class Paper extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    elevation: Number,
    square: Boolean
  }

  static defaultProps = {
    elevation: 1
  }
  
  render(props) {
    return (
      <div {...extractClass(props, 'm-paper-root', `m-paper-elevation${props.elevation}`, {
        'm-paper-rounded': !props.square
      })}>
        <slot></slot>
      </div>
    )
  }
}
