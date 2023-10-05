import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-user-error-1')
export default class UserError1 extends WeElement<IconProps> {
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
          d="M8.5 4C6.84315 4 5.5 5.34315 5.5 7C5.5 8.65685 6.84315 10 8.5 10C10.1569 10 11.5 8.65685 11.5 7C11.5 5.34315 10.1569 4 8.5 4ZM3.5 7C3.5 4.23858 5.73858 2 8.5 2C11.2614 2 13.5 4.23858 13.5 7C13.5 9.76142 11.2614 12 8.5 12C5.73858 12 3.5 9.76142 3.5 7ZM17.3787 6.46447L19.5 8.58579L21.6213 6.46447L23.0355 7.87868L20.9142 10L23.0355 12.1213L21.6213 13.5355L19.5 11.4142L17.3787 13.5355L15.9645 12.1213L18.0858 10L15.9645 7.87868L17.3787 6.46447ZM0 19C0 16.2386 2.23858 14 5 14H12C14.7614 14 17 16.2386 17 19V21H15V19C15 17.3431 13.6569 16 12 16H5C3.34315 16 2 17.3431 2 19V21H0V19Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
