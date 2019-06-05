import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import '../theme.ts'

interface Props {
  size?: number,
  color?: string
}

interface Data {

}


@tag('m-loading')
export default class Loading extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    size: 40
  }

  static propTypes = {
    size: Number,
    color: String
  }

  render(props) {
    return (
      <div class="m-root m-colorPrimary m-indeterminate" role="progressbar" style={`width: ${props.size}px; height: ${props.size}px;${props.color?`color:${props.color};`:''}`}>
        <svg class="m-svg" viewBox="22 22 44 44">
          <circle class="m-circle m-circleIndeterminate" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6">
          </circle>
        </svg>
      </div>
    )
  }
}

