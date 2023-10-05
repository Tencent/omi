import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-codesandbox')
export default class LogoCodesandbox extends WeElement<IconProps> {
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
          d="M2.33984 6.42257L12.0001 0.845215L21.6604 6.42257V17.5773L12.0001 23.1546L2.33984 17.5773V6.42257ZM12.0001 3.15462L9.66997 4.49992L12.0001 5.84521L14.3302 4.49991L12.0001 3.15462ZM16.3302 5.65461L12.0001 8.15462L7.66997 5.65462L5.33984 6.99992L12.0001 10.8452L18.6604 6.99992L16.3302 5.65461ZM19.6604 8.73197L13.0001 12.5773V20.2679L15.3398 18.917V13.9226L19.6604 11.4281L19.6604 8.73197ZM19.6604 13.7375L17.3398 15.0773V17.7623L19.6604 16.4226L19.6604 13.7375ZM4.33984 11.4281L8.66035 13.9226V18.917L11.0001 20.2679V12.5773L4.33984 8.73197V11.4281ZM4.33984 13.7375V16.4226L6.66035 17.7623V15.0773L4.33984 13.7375Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
