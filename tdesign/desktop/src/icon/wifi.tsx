import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-wifi')
export default class Wifi extends WeElement<IconProps> {
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
          d="M21.1926 9.8076C16.1158 4.73082 7.88466 4.73078 2.80784 9.8076L2.10074 10.5147L0.686523 9.10049L1.39363 8.39339C7.2515 2.53551 16.749 2.53556 22.6068 8.39339L23.3139 9.10049L21.8997 10.5147L21.1926 9.8076ZM16.5964 14.4038C14.058 11.8654 9.94245 11.8654 7.40404 14.4038L6.69693 15.1109L5.28271 13.6967L5.98982 12.9896C9.30929 9.67011 14.6912 9.67016 18.0106 12.9896L18.7177 13.6967L17.3035 15.1109L16.5964 14.4038ZM10.586 17.5858C11.3671 16.8047 12.6335 16.8048 13.4145 17.5858L14.1216 18.2929L12.0003 20.4142L9.87894 18.2929L10.586 17.5858Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
