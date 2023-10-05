import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-task-visible')
export default class TaskVisible extends WeElement<IconProps> {
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
        <path d="M17 1H7V3H3V23H10V21H5V5H7V7H17V5H19V13H21V3H17V1ZM15 5H9V3H15V5Z" fill="currentColor" />
        <path d="M15.75 20V18H18.25V20H15.75Z" fill="currentColor" />
        <path
          d="M17.0021 23.4998C21.4205 23.4998 23.0921 18.9998 23.0921 18.9998C23.0921 18.9998 21.4185 14.4998 17.0021 14.4998C12.5857 14.4998 10.9121 18.9998 10.9121 18.9998C10.9121 18.9998 12.5837 23.4998 17.0021 23.4998ZM17.0004 21.4998C14.3848 21.4998 13.1309 18.9998 13.1309 18.9998C13.1309 18.9998 14.3797 16.4998 17.0004 16.4998C19.6211 16.4998 20.8709 18.9998 20.8709 18.9998C20.8709 18.9998 19.616 21.4998 17.0004 21.4998Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
