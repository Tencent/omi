import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
  disabled?: boolean,
  underline?: boolean,
  href?: string,
  target: string
}



@tag('o-link')
export default class Link extends WeElement<Props>{
  static css = css

  static defaultProps = {
    underline: true,
    disabled: false
  }


  static propTypes = {
    type: String,
    disabled: Boolean,
    underline: Boolean,
    href: String,
    target: String
  }


  render(props) {

    return <a
      disabled={props.disabled}
      href={props.href}
      target={props.target}
      {...extractClass(props, 'o-link', {
        ['o-link-' + props.type]: props.type,
        ['o-link-' + props.size]: props.size,
        'is-underline': props.underline,
        'is-disabled': props.disabled
      })} >
      <span><slot></slot></span>
    </a>
  }
}
