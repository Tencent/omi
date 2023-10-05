import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-codepen')
export default class LogoCodepen extends WeElement<IconProps> {
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
          d="M12 0.807129L23 7.95713V16.0425L12 23.1925L1 16.0425V7.95713L12 0.807129ZM3 10.4205V13.5792L5.25621 11.9998L3 10.4205ZM3.78766 15.4691L11 20.1571V16.0205L7 13.2205L3.78766 15.4691ZM8.74379 11.9998L12 14.2792L15.2562 11.9998L12 9.72047L8.74379 11.9998ZM13 7.97916L17 10.7792L20.2123 8.53052L13 3.8425V7.97916ZM11 3.8425L3.78766 8.53052L7 10.7792L11 7.97916V3.8425ZM21 10.4205L18.7438 11.9998L21 13.5792V10.4205ZM20.2123 15.4691L17 13.2205L13 16.0205V20.1571L20.2123 15.4691Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
