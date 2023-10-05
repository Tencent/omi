import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-radio-2')
export default class Radio2 extends WeElement<IconProps> {
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
          d="M1 3L23 3V19H19V22H17V19H7V22H5V19H1L1 3ZM3 5L3 17H21V5L3 5ZM15 9C13.8954 9 13 9.89543 13 11C13 12.1046 13.8954 13 15 13C16.1046 13 17 12.1046 17 11C17 9.89543 16.1046 9 15 9ZM11 11C11 8.79086 12.7909 7 15 7C17.2091 7 19 8.79086 19 11C19 13.2091 17.2091 15 15 15C12.7909 15 11 13.2091 11 11ZM5 8H9V10H5V8ZM5 12H9V14H5V12Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
