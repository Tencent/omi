import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-town')
export default class Town extends WeElement<IconProps> {
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
          d="M2 2H7.44237L11 5.91339V2H16.4684L22 8.63795V22H2V2ZM13 4V20H20V9.36205L15.5316 4H13ZM11 20V8.88661L6.55763 4H4V20H11ZM6 7.99805H8.00391V10.002H6V7.99805ZM15 7.99805H17.0039V10.002H15V7.99805ZM6 11.998H8.00391V14.002H6V11.998ZM15 11.998H17.0039V14.002H15V11.998ZM6 15.998H8.00391V18.002H6V15.998ZM15 15.998H17.0039V18.002H15V15.998Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
