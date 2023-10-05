import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-music')
export default class Music extends WeElement<IconProps> {
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
          d="M20 2.91309V17.9999C20 19.6567 18.6569 20.9999 17 20.9999C15.3431 20.9999 14 19.6567 14 17.9999C14 16.343 15.3431 14.9999 17 14.9999C17.3506 14.9999 17.6872 15.06 18 15.1706V10.0867L8 10.92V18.9999C8 20.6567 6.65685 21.9999 5 21.9999C3.34315 21.9999 2 20.6567 2 18.9999C2 17.343 3.34315 15.9999 5 15.9999C5.35064 15.9999 5.68722 16.06 6 16.1706V4.07975L20 2.91309ZM6 18.9999C6 18.4476 5.55228 17.9999 5 17.9999C4.44772 17.9999 4 18.4476 4 18.9999C4 19.5522 4.44772 19.9999 5 19.9999C5.55228 19.9999 6 19.5522 6 18.9999ZM8 8.91309L18 8.07975V5.08669L8 5.92002V8.91309ZM18 17.9999C18 17.4476 17.5523 16.9999 17 16.9999C16.4477 16.9999 16 17.4476 16 17.9999C16 18.5522 16.4477 18.9999 17 18.9999C17.5523 18.9999 18 18.5522 18 17.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
