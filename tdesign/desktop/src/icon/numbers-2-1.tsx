import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-numbers-2-1')
export default class Numbers21 extends WeElement<IconProps> {
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
          d="M7 8C7 5.23858 9.23858 3 12 3H13V3.10002C15.2822 3.56329 17 5.58104 17 8V8.06512C17 9.59037 16.3127 11.0344 15.1289 11.9962L9 16.976V18H17V20H7V16.976C7 16.3737 7.27139 15.8035 7.73881 15.4237L13.8677 10.444C14.5841 9.86197 15 8.98812 15 8.06512V8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8V9H7V8Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
