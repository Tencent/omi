import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-ticket')
export default class Ticket extends WeElement<IconProps> {
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
          d="M1 4H23V9.46887L22.4291 9.74008C21.5821 10.1424 21 11.0042 21 12C21 12.9958 21.5821 13.8576 22.4291 14.2599L23 14.5311V20H1V14.5311L1.57091 14.2599C2.41786 13.8576 3 12.9958 3 12C3 11.0042 2.41786 10.1424 1.57091 9.74008L1 9.46887V4ZM3 6V8.25799C4.20471 9.06439 5 10.4386 5 12C5 13.5614 4.20471 14.9356 3 15.742V18L21 18V15.742C19.7953 14.9356 19 13.5614 19 12C19 10.4386 19.7953 9.06439 21 8.25799V6H3ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
