import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-file-code')
export default class FileCode extends WeElement<IconProps> {
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
          d="M3.00098 1.00073H15.4152L21.001 6.58652V13.0007H19.001V9.00073H13.001V3.00073H5.00098V21.0007H11.001V23.0007H3.00098V1.00073ZM15.001 3.41495V7.00073H18.5868L15.001 3.41495ZM23.6644 15.2561L20.888 18.0045L23.6644 20.7528L22.2574 22.1742L18.0451 18.0045L22.2574 13.8347L23.6644 15.2561ZM13.0002 20.9999H17.5002V22.9999H13.0002V20.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
