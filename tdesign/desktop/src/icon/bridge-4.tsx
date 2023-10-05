import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bridge-4')
export default class Bridge4 extends WeElement<IconProps> {
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
          d="M23.0008 2.00098L23 4.00098L21.8202 4.00048L21.0004 8.09916V22.0001H19.0004V7.90112L19.7806 4.00014H16.2202L17.0004 7.90133V22.0006H15.0004V8.09937L14.1806 4.00018L9.82023 4.00038L9.00042 8.09937V22.0006H7.00042V7.90133L7.78062 4.00036L4.22022 4.0002L5.00042 7.90133V22.0006H3.00042V8.09937L2.18068 4.00048L1.00084 4.00098L1 2.00098H23.0008Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
