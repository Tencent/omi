import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-creditcard-off')
export default class CreditcardOff extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7171)">
          <path
            d="M2.00015 0.585815L23.4144 22L22.0002 23.4142L19.5859 21H1.00015V3.00003H1.58594L0.585938 2.00003L2.00015 0.585815ZM3.00015 5.00003V9.00003L7.58594 9.00003L3.58594 5.00003H3.00015ZM3.00015 11V19H17.5859L9.58594 11H3.00015ZM7.58104 2.99856L23.0001 3.00072L23.0035 12.4186L23.0001 12.4152L23.0035 18.4186L21.0001 16.4152V11.0013L15.5872 11.002L13.5819 8.99856L21.0001 9.00128V5.00128L9.58732 5.00198L7.58104 2.99856ZM5.00015 14H10.0002V16H5.00015V14Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
