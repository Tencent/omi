import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-palace-4')
export default class Palace4 extends WeElement<IconProps> {
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
          d="M6 1.69824L10 5.03158V8.99995H14V5.03158L18 1.69824L22 5.03158V22H2V5.03158L6 1.69824ZM16 8.99995H20V5.96833L18 4.30166L16 5.96833V8.99995ZM20 11H4V20H9V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V20H20V11ZM13 20V17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17V20H13ZM4 8.99995H8V5.96833L6 4.30166L4 5.96833V8.99995Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
