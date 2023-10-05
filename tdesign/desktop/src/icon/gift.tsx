import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gift')
export default class Gift extends WeElement<IconProps> {
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
          d="M23 22V6L18.4649 6C18.8052 5.41165 19 4.72857 19 4C19 1.79086 17.2091 -9.65645e-08 15 0C13.8053 5.22217e-08 12.7329 0.523756 12 1.35418C11.2671 0.523756 10.1947 2.10047e-07 9 2.62268e-07C6.79086 3.58833e-07 5 1.79086 5 4C5 4.72858 5.19479 5.41165 5.53513 6H1L1 22H23ZM13 4C13 2.89543 13.8954 2 15 2C16.1046 2 17 2.89543 17 4C17 5.10457 16.1046 6 15 6C13.8954 6 13 5.10457 13 4ZM14.4142 8L21 8V14H3L3 8L9.58579 8L6.58579 11L8 12.4142L12 8.41421L16 12.4142L17.4142 11L14.4142 8ZM3 16H21V20H3L3 16ZM11 4C11 5.10457 10.1046 6 9 6C7.89543 6 7 5.10457 7 4C7 2.89543 7.89543 2 9 2C10.1046 2 11 2.89543 11 4Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
