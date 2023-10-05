import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bulletpoint')
export default class Bulletpoint extends WeElement<IconProps> {
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
          d="M3 6.00391H2V5.00391V5V4H3H3.00391H4.00391V5V5.00391V6.00391H3.00391H3ZM3 13.0039H2V12.0039V12V11H3H3.00391H4.00391V12V12.0039V13.0039H3.00391H3ZM2 20.0039H3H3.00391H4.00391V19.0039V19V18H3.00391H3H2V19V19.0039V20.0039ZM8 4H7V6H8H21H22V4H21H8ZM7 11H8H21H22V13H21H8H7V11ZM8 18H7V20H8H21H22V18H21H8Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
