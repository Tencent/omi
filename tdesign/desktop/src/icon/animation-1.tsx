import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-animation-1')
export default class Animation1 extends WeElement<IconProps> {
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
          d="M11.4104 0.0605469L15.1257 6.23403L22.1451 7.85973L17.4219 13.3009L18.0448 20.4791L11.4104 17.6684L4.77606 20.4791L5.39903 13.3009L0.675781 7.85973L7.69519 6.23403L11.4104 0.0605469ZM11.4104 3.93926L8.9719 7.99127L4.36466 9.05832L7.4648 12.6297L7.05591 17.3411L11.4104 15.4963L15.765 17.3411L15.3561 12.6297L18.4562 9.05832L13.849 7.99127L11.4104 3.93926ZM20.8634 14.0114L23.3382 16.4862L21.924 17.9004L19.4492 15.4256L20.8634 14.0114ZM12.5665 20.1266L15.0414 22.6015L13.6272 24.0157L11.1523 21.5408L12.5665 20.1266ZM19.1446 20.1266L21.6195 22.6015L20.2053 24.0157L17.7304 21.5408L19.1446 20.1266Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
