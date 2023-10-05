import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-shop-4')
export default class Shop4 extends WeElement<IconProps> {
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
          d="M7 4C5.89543 4 5 4.89543 5 6V7H8V4H7ZM10 4V7H14V4H10ZM16 4V7H19V6C19 4.89543 18.1046 4 17 4H16ZM21 7H22V9H21V20H22V22H2V20H3V9H2V7H3V6C3 3.79086 4.79086 2 7 2H17C19.2091 2 21 3.79086 21 6V7ZM19 9H5V20H8V15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15V20H19V9ZM14 20V15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15V20H14Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
