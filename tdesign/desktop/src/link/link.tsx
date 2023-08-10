import { h, tag, extractClass, WeElement, OmiProps } from 'omi'
import { LinkProps } from './type'
import './style/index.js'
import css from './style/index'

@tag('t-link')
export default class Link extends WeElement<LinkProps> {
  static css = css as string
  static defaultProps = {
    underline: false,
    disabled: false,
    size: 'medium',
  }

  static propTypes = {
    content: Object,
    default: Object,
    disabled: Boolean,
    hover: String,
    href: String,
    prefixIcon: WeElement,
    size: String,
    suffixIcon: WeElement,
    target: String,
    theme: String,
    underline: Boolean,
    onClick: Function, // need to test
  }

  handleClick(e: MouseEvent): void {
    if (this.props.disabled) return
    this.props.onClick?.(e)
  }

  render(props: OmiProps<LinkProps>) {
    const classPrefix = 't'
    /*
        TODO: remain size and status
        remain prefixContent and suffixContent
    **/
    const linkClass = extractClass(props, `${classPrefix}-link`, `${classPrefix}-link--theme-${props.theme}`, {
      // [commonSizeClassName[props.size]]: props.size !== 'medium',
      // [commonStatusClassName.disabled]: props.disabled,
      [`${classPrefix}-is-underline`]: props.underline,
      [`${classPrefix}-link--hover-${props.hover}`]: !props.disabled,
    })

    return (
      <h.f>
        <a
          {...linkClass}
          href={props.disabled || !props.href ? undefined : props.href}
          target={props.target}
          onClick={this.handleClick}
        >
          <span>
            <slot></slot>
          </span>
        </a>
      </h.f>
    )
  }
}
export {}
