import { h, tag, classNames, WeElement, OmiProps } from 'omi'
import { TdLinkProps } from './type'
import { parseTNode } from '../utils'
import css from './style/index'
import { StyledProps } from '../common'
export interface LinkProps extends TdLinkProps, StyledProps {}
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
    prefixIcon: Object,
    size: String,
    suffixIcon: Object,
    target: String,
    theme: String,
    underline: Boolean,
    onClick: Function,
  }

  handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    if (this.props.disabled) return
    this.props.onClick?.(e)
  }

  render(props: OmiProps<LinkProps>) {
    const classPrefix = 't'

    const childNode = props.content || props.children
    const linkClass = classNames(`${classPrefix}-link`, `${classPrefix}-link--theme-${props.theme}`, {
      [`${classPrefix}-size-s`]: props.size === 'small',
      [`${classPrefix}-size-l`]: props.size === 'large',
      [`${classPrefix}-is-disabled`]: !!props.disabled,
      [`${classPrefix}-is-underline`]: !!props.underline,
      [`${classPrefix}-link--hover-${props.hover}`]: !props.disabled,
    })

    return (
      <>
        <a
          class={linkClass}
          href={props.disabled || !props.href ? undefined : props.href}
          target={props.target}
          onClick={this.handleClick}
        >
          {props.prefixIcon && <span class={`${classPrefix}-link__prefix-icon`}>{parseTNode(props.prefixIcon)}</span>}
          {childNode}
          {props.suffixIcon && <span class={`${classPrefix}-link__suffix-icon`}>{parseTNode(props.suffixIcon)}</span>}
        </a>
      </>
    )
  }
}
