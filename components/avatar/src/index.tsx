import { tag, h, WeElement, extractClass } from 'omi'
import * as css from './index.scss'


interface Props {
  alt?: string,
  src?: string,
  size?: number,
  square?: boolean,
  icon?: string,
  color?: string,
  backgroundColor?: string
}

@tag('o-avatar')
export default class Avatar extends WeElement<Props>{
  static css = css

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

  _iconTag

  render(props) {

    this._iconTag = 'o-icon-' + props.icon
    return (
      <div {...extractClass(props, 'o-avatar', {
        'square': props.square
      })} style={{
        width: props.size + 'px',
        height: props.size + 'px',
        backgroundColor: props.backgroundColor,
        lineHeight: props.size + 'px'
      }}>
        {props.icon ? <this._iconTag class="material-icons mdc-icon-button__icon" style={{ lineHeight: (props.size + 6) + 'px', color: props.color }} /> : (props.src ?
          <img alt={props.alt} src={props.src} /> :
          props.children ? props.children : <slot />)}
      </div>
    )
  }
}

