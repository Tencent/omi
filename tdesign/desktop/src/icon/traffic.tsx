import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-traffic')
export default class Traffic extends WeElement<IconProps> {
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
          d="M6 2H18V6H21V8H18V11H21V13H18V16H21V18H18V22H6V18H3V16H6V13H3V11H6V8H3V6H6V2ZM8 4V20H16V4H8ZM10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM10 17C10 15.8954 10.8954 15 12 15C13.1046 15 14 15.8954 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
