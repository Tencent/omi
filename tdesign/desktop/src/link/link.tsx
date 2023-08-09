import { h, tag, extractClass, WeElement } from 'omi'

import './style/index.js'
import css from './style/index.ts'

interface LinkProps {
  /**
   * 链接内容
   */
  content?: string | WeElement
  /**
   * 链接内容，同 content
   */
  default?: string | WeElement
  /**
   * 禁用链接
   */
  disabled?: boolean
  /**
   * 链接悬浮态样式，有 文本颜色变化、添加下划线等 2 种方法
   * @default underline
   */
  hover?: 'color' | 'underline'
  /**
   * 跳转链接
   * @default ''
   */
  href?: string
  /**
   * 前置图标: TODO: need to be unified with icon
   */
  prefixIcon?: WeElement
  /**
   * 尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 后置图标
   */
  suffixIcon?: WeElement
  /**
   * 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同
   * @default ''
   */
  target?: string
  /**
   * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
   * @default default
   */
  theme?: 'default' | 'primary' | 'danger' | 'warning' | 'success'
  /**
   * 普通状态是否显示链接下划线
   */
  underline?: boolean
  /**
   * 点击事件，禁用状态不会触发点击事件
   */
  onClick?: (e: MouseEvent) => void
}

@tag('t-link')
export default class Link extends WeElement<LinkProps> {
  static css = css as string
  static defaultProps = {
    underline: false,
    disabled: false,
    size: 'medium'
  }

  //TODO: enum type?
  static propTypes = {
    content: WeElement, //String | WeElement
    default: WeElement, //String | WeElement
    disabled: Boolean,
    hover: String,
    href: String,
    prefixIcon: WeElement,
    size: String,
    suffixIcon: WeElement,
    target: String,
    theme: String,
    underline: Boolean,
    onClick: Function
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
    const linkClass = extractClass(
      props,
      `${classPrefix}-link`,
      `${classPrefix}-link--theme-${props.theme}`,
      {
        // [commonSizeClassName[props.size]]: props.size !== 'medium',
        // [commonStatusClassName.disabled]: props.disabled,
        [`${classPrefix}-is-underline`]: props.underline,
        [`${classPrefix}-link--hover-${props.hover}`]: !props.disabled
      }
    )

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
