import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-system-blocked')
export default class SystemBlocked extends WeElement<IconProps> {
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
          d="M1 1H23V10.5H21V3H3V16H11.5V18H1V1ZM18.5 14C16.567 14 15 15.567 15 17.5C15 18.1031 15.152 18.67 15.4205 19.1652L20.1654 14.4206C19.6701 14.1521 19.1032 14 18.5 14ZM21.5795 15.8348L16.8346 20.5794C17.3299 20.8479 17.8968 21 18.5 21C20.433 21 22 19.433 22 17.5C22 16.8969 21.848 16.33 21.5795 15.8348ZM13 17.5C13 14.4624 15.4624 12 18.5 12C20.0186 12 21.395 12.6168 22.3892 13.611C23.3833 14.6052 24 15.9816 24 17.5C24 20.5376 21.5376 23 18.5 23C16.9814 23 15.605 22.3832 14.6108 21.389C13.6167 20.3948 13 19.0184 13 17.5ZM2.25 21H11.5V23H2.25V21Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
