import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-up-1')
export default class GestureUp1 extends WeElement<IconProps> {
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
          d="M2 2C2 0.89543 2.89543 0 4 0C5.10457 0 6 0.89543 6 2C6 3.10457 5.10457 4 4 4C2.89543 4 2 3.10457 2 2ZM9 2C9 0.89543 9.89543 0 11 0C12.1046 0 13 0.895431 13 2C13 3.10457 12.1046 4 11 4C9.89543 4 9 3.10457 9 2ZM16 2C16 0.895431 16.8954 0 18 0C19.1046 0 20 0.895431 20 2C20 3.10457 19.1046 4 18 4C16.8954 4 16 3.10457 16 2ZM8.24413 8.06574C8.24413 6.54382 9.47789 5.31006 10.9998 5.31006C12.5217 5.31006 13.7555 6.54382 13.7555 8.06573V11.0195H14.9138C15.4022 11.0195 15.8817 11.1492 16.3035 11.3954L19.9282 13.5111C21.0547 14.1687 21.5662 15.5257 21.1539 16.7632L19.3715 22.1138C18.9964 23.2397 17.9428 23.9992 16.7561 23.9992H9.67057C8.81439 23.9992 8.00681 23.6014 7.485 22.9227L3.18667 17.3314L4.12779 15.9189C4.55806 15.2731 5.34118 14.9583 6.0987 15.1268L8.24413 15.6038V8.06574ZM10.9998 7.31006C10.5825 7.31006 10.2441 7.64839 10.2441 8.06574V18.0974L5.74598 17.0972L5.64537 17.2482L9.07061 21.7037C9.21385 21.89 9.43554 21.9992 9.67057 21.9992H16.7561C17.0818 21.9992 17.3711 21.7908 17.474 21.4817L19.2564 16.1311C19.3696 15.7914 19.2292 15.4189 18.92 15.2384L15.2953 13.1227C15.1795 13.0551 15.0479 13.0195 14.9138 13.0195H11.7555V8.06573C11.7555 7.64839 11.4172 7.31006 10.9998 7.31006ZM2 8C2 6.89543 2.89543 6 4 6C5.10457 6 6 6.89543 6 8C6 9.10457 5.10457 10 4 10C2.89543 10 2 9.10457 2 8ZM16 8C16 6.89543 16.8954 6 18 6C19.1046 6 20 6.89543 20 8C20 9.10457 19.1046 10 18 10C16.8954 10 16 9.10457 16 8Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
