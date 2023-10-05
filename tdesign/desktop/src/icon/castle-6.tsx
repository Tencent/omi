import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-castle-6')
export default class Castle6 extends WeElement<IconProps> {
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
          d="M6 2H18V4H17V8H22V22H2V8H7V4H6V2ZM9 4V8H11V6H13V8H15V4H9ZM4 12.5351C4.58835 12.1948 5.27143 12 6 12C7.19469 12 8.26706 12.5238 9 13.3542C9.73295 12.5238 10.8053 12 12 12C13.1947 12 14.2671 12.5238 15 13.3542C15.7329 12.5238 16.8053 12 18 12C18.7286 12 19.4117 12.1948 20 12.5351V10H4V12.5351ZM8 16C8 14.8954 7.10457 14 6 14C4.89543 14 4 14.8954 4 16V20H8V16ZM10 20H14V16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16V20ZM16 20H20V16C20 14.8954 19.1046 14 18 14C16.8954 14 16 14.8954 16 16V20Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
