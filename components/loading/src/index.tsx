import { tag, WeElement, h } from 'omi'
import * as css from './index.scss'

interface Props {
  size?: number,
  color?: string
}

@tag('o-loading')
export default class Loading extends WeElement<Props>{
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
      <div class="o-root o-colorPrimary o-indeterminate" role="progressbar" style={`width: ${props.size}px; height: ${props.size}px;${props.color ? `color:${props.color};` : ''}`}>
        <svg class="o-svg" viewBox="22 22 44 44">
          <circle class="o-circle o-circleIndeterminate" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6">
          </circle>
        </svg>
      </div>
    )
  }
}

