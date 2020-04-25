import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'


interface Props {
  active?: boolean,
  ariaLabel?: string,
  color?: string
}


@tag('o-hamburger-menu')
export default class Button extends WeElement<Props>{
  static css = css

  static defaultProps = {
    active: false,
    ariaLabel: '',
    color: 'black'
  }

  static propTypes = {
    active: Boolean,
    ariaLabel: String,
    color: String
  }

  onClick = () => {

    this.updateProps({
      active: !this.props.active
    })

    this.fire('change', this.props.active)


  }


  render(props) {

    return <a href="javascript:"
      onClick={this.onClick}
      {...extractClass(props, 'o-hamburger-menu', {
        'active': props.active,
      })}
      aria-label={props.ariaLabel}>
      <span style={{backgroundColor: props.color}} class="fixin top-bun"></span>
      <span style={{backgroundColor: props.color}} class="fixin patty"></span>
      <span style={{backgroundColor: props.color}} class="fixin bottom-bun"></span>
    </a>

  }
}
