import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-palace-1')
export default class Palace1 extends WeElement<IconProps> {
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
          d="M13.0039 2.00195L13.0018 3.08326C15.8386 3.56007 18 6.02763 18 9H22V22H2V9H6C6 6.02638 8.1632 3.558 11.0018 3.08266L11.0039 1.99805L13.0039 2.00195ZM8 9H16C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9ZM10.998 5.99804H13.002V8.00195H10.998V5.99804ZM4 11V20H5V17C5 15.3431 6.34315 14 8 14C9.65685 14 11 15.3431 11 17V20H13V17C13 15.3431 14.3431 14 16 14C17.6569 14 19 15.3431 19 17V20H20V11H4ZM17 20V17C17 16.4477 16.5523 16 16 16C15.4477 16 15 16.4477 15 17V20H17ZM9 20V17C9 16.4477 8.55228 16 8 16C7.44772 16 7 16.4477 7 17V20H9Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
