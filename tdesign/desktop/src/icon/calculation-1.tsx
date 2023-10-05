import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-calculation-1')
export default class Calculation1 extends WeElement<IconProps> {
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
          d="M1 1H23V23H1V1ZM3 3V21H21V3H3ZM9 5V7H11V9H9V11H7V9H5V7H7V5H9ZM13 7H19V9H13V7ZM6.58594 13.1717L8 14.5858L9.41406 13.1717L10.8283 14.5859L9.41421 16L10.8286 17.4144L9.41436 18.8286L8 17.4142L6.58563 18.8286L5.17142 17.4144L6.58579 16L5.17172 14.5859L6.58594 13.1717ZM13 13.5H19V15.5H13V13.5ZM13 16.5H19V18.5H13V16.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
