import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-jump-off')
export default class JumpOff extends WeElement<IconProps> {
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
          d="M22.4144 20.9999L3.00015 1.58569L1.58594 2.99991L3.00015 4.41412L3.00016 20.9999L19.5859 20.9999L21.0002 22.4141L22.4144 20.9999ZM17.5859 18.9999H5.00016L5.00015 6.41412L10.586 11.9999L10.0841 12.502L11.5008 13.9187L12.0029 13.4168L17.5859 18.9999ZM21.0059 17.4189L21.0001 14.4999V13.4899H19.0001V15.4131L21.0059 17.4189ZM21.0002 2.9999L13.0002 2.9999V4.9999L17.5859 4.9999L13.0859 9.49991L14.5002 10.9141L19.0002 6.41412V10.9999H21.0002L21.0002 2.9999ZM10.5099 3.00186L9.49992 3.00186L6.58083 2.99601L8.58668 5.00186H10.5099V3.00186Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
