import { tag, h, WeElement, extractClass } from 'omi'
import * as css from './index.scss'
import '../icon'
//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  alt?: string,
  src?: string,
  size?: number,
  square?: boolean,
  icon?: string,
  color?: string,
  backgroundColor?: string
}

@tag('m-avatar')
export default class Avatar extends WeElement<Props, {}>{
  static css = theme() + css

  static defaultProps = {
    size: 40,
    color: 'white',
    backgroundColor: '#ccc'
  }

  static propTypes = {
    alt: String,
    src: String,
    size: Number,
    square: Boolean,
    icon: String,
    color: String,
    backgroundColor: String
  }

  render(props) {
    return (
      <div {...extractClass(props, 'm-avatar', {
        'square': props.square
      })} style={{
        width: props.size + 'px',
        height: props.size + 'px',
        backgroundColor: props.backgroundColor,
        lineHeight: props.size + 'px'
      }}>
        {props.icon ?
          <i class="material-icons mdc-icon-button__icon" style={{ lineHeight: props.size + 'px', color: props.color }}>{props.icon}</i> : (props.src ?
            <img alt={props.alt} src={props.src} /> :
            props.children ? props.children : this.innerHTML)}
      </div>
    )
  }
}

