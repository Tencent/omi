import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-castle-2')
export default class Castle2 extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [`${TdClassNamePrefix('size-s')}`]: props.size === 'small',
      [`${TdClassNamePrefix('size-m')}`]: props.size === 'medium',
      [`${TdClassNamePrefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 2V3.08296C8.16229 3.55904 6 6.027 6 9C3.23858 9 1 11.2386 1 14V22H23V14C23 11.2386 20.7614 9 18 9C18 6.027 15.8377 3.55904 13 3.08296V2H11ZM18 11C19.6569 11 21 12.3431 21 14V20H18V11ZM16 20H13V15H11V20H8V10H16V20ZM6 20H3V14C3 12.3431 4.34315 11 6 11V20ZM8.12602 8C8.57006 6.27477 10.1362 5 12 5C13.8638 5 15.4299 6.27477 15.874 8H8.12602Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
