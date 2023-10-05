import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-highlight')
export default class Highlight extends WeElement<IconProps> {
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
          d="M2 2H5.5V4H4V5.5H2V2ZM7.5 2H10.5V4H7.5V2ZM12.5 2H15.5V4H12.5V2ZM17.5 2H21V5.5H19V4H17.5V2ZM4 7.5V10.5H2L2 7.5H4ZM21 7.5V10.5H19V7.5H21ZM4 12.5V15.5H2L2 12.5H4ZM20 14V16H17.4142L21.4142 20L20 21.4142L16 17.4142V20H14V14H20ZM4 17.5V19H5.5V21H2V17.5H4ZM7.5 19H10.5V21H7.5V19Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
