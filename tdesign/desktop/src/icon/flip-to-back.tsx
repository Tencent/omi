import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-flip-to-back')
export default class FlipToBack extends WeElement<IconProps> {
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
          d="M7 3H10.5V5H9V6.5H7V3ZM12.5 3H15.5V5H12.5V3ZM17.5 3H21V6.5H19V5H17.5V3ZM5 7.5V19H16.5V21H3V7.5H5ZM9 8.5V11.5H7V8.5H9ZM21 8.5V11.5H19V8.5H21ZM9 13.5V15H10.5V17H7V13.5H9ZM21 13.5V17H17.5V15H19V13.5H21ZM12.5 15H15.5V17H12.5V15Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
