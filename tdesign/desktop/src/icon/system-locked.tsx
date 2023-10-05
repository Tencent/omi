import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-system-locked')
export default class SystemLocked extends WeElement<IconProps> {
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
          d="M1 1H23V11H21V3H3V16H13V18H1V1ZM19.5015 14.5C20.1918 14.5 20.7515 15.0596 20.7515 15.75V16.5H18.2515V15.75C18.2515 15.0596 18.8111 14.5 19.5015 14.5ZM22.7515 16.5V15.75C22.7515 13.9551 21.2964 12.5 19.5015 12.5C17.7065 12.5 16.2515 13.9551 16.2515 15.75V16.5H15V23H24V16.5H22.7515ZM22 18.5V21H17V18.5H22ZM2.25 21H13V23H2.25V21Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
