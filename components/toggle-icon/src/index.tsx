import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  isOn?: boolean
  icons: object
  imgs: object
  color: string
  disabled: boolean
}

@tag('o-toggle-icon')
export default class ToggleIcon extends WeElement<Props>{
  static css = css

  static defaultProps = {
    isOn: false,
    icons: []
  }

  static propTypes = {
    isOn: Boolean,
    icons: Object,
    imgs: Object,
    color: String,
    disabled: Boolean
  }

  tagA
  tagB

  clickHandler = () => {
    this.updateProps({
      isOn: !this.props.isOn
    })
    this.fire('change', { isOn: this.props.isOn })
  }

  render(props) {

    const tags = props.icons.map(icon => `o-icon-${icon}`)
    this.tagA = tags[0]
    this.tagB = tags[1]

    return (
      <button style={`color:${props.color};`} onClick={this.clickHandler} {...extractClass(props, 'o-toggle-icon', {
        'is-disabled': props.disabled
      })} disabled={props.disabled}>

        {tags.length > 0 && (props.isOn ? <this.tagB /> : <this.tagA />)}
        {props.imgs && (props.isOn ? <img src={props.imgs[1]} /> : <img src={props.imgs[0]} />)}


      </button>
    )
  }
}
