import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-verified')
export default class Verified extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7351)">
          <path
            d="M12.0004 0.186157L15.6172 3.26835L20.354 3.64636L20.7321 8.38325L23.8142 12L20.7321 15.6168L20.354 20.3537L15.6172 20.7317L12.0004 23.8139L8.38361 20.7317L3.64672 20.3537L3.26872 15.6168L0.186523 12L3.26872 8.38324L3.64672 3.64636L8.38361 3.26835L12.0004 0.186157ZM12.0004 2.81388L9.18808 5.21051L5.50481 5.50444L5.21088 9.18771L2.81425 12L5.21088 14.8123L5.50481 18.4956L9.18808 18.7895L12.0004 21.1862L14.8127 18.7895L18.496 18.4956L18.7899 14.8123L21.1865 12L18.7899 9.18771L18.496 5.50444L14.8127 5.21051L12.0004 2.81388ZM17.9146 9.50002L11.0004 16.4142L6.58617 12L8.00039 10.5858L11.0004 13.5858L16.5004 8.08581L17.9146 9.50002Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
