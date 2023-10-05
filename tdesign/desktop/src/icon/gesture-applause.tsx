import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-applause')
export default class GestureApplause extends WeElement<IconProps> {
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
          d="M3.00015 0.585938L5.41436 3.00015L4.00015 4.41436L1.58594 2.00015L3.00015 0.585938ZM22.4144 2.00015L20.0002 4.41436L18.5859 3.00015L21.0002 0.585938L22.4144 2.00015ZM10.3566 3.30271C10.0441 3.2966 9.77107 3.51304 9.70576 3.81877L7.42519 14.4933L6.20845 15.71L8.90974 18.4113L10.4369 16.8841C10.7951 16.5259 10.9964 16.0401 10.9964 15.5335L10.9964 3.9551C10.9964 3.5997 10.712 3.30966 10.3566 3.30271ZM7.49553 19.8255L4.79423 17.1242L4.15069 17.7678L6.85199 20.4691L7.49553 19.8255ZM7.74989 3.4009C8.01542 2.15809 9.12513 1.27824 10.3957 1.30309C11.0026 1.31497 11.5585 1.52992 11.9992 1.88235C12.4399 1.52992 12.9958 1.31497 13.6026 1.30309C14.8733 1.27824 15.983 2.15809 16.2485 3.4009L18.4055 13.4972L22.6761 17.7678L17.1464 23.2975L12.1473 18.2983C12.0963 18.2474 12.047 18.1952 11.9992 18.1419C11.9514 18.1952 11.902 18.2474 11.8511 18.2983L6.85199 23.2975L1.32227 17.7678L5.59287 13.4972L7.74989 3.4009ZM14.2926 3.81877C14.2273 3.51304 13.9543 3.2966 13.6418 3.30271C13.2864 3.30966 13.002 3.5997 13.002 3.9551L13.002 15.5335C13.002 16.0401 13.2033 16.5259 13.5615 16.8841L15.0886 18.4113L17.7899 15.71L16.5732 14.4933L14.2926 3.81877ZM19.2042 17.1242L16.5029 19.8255L17.1464 20.4691L19.8477 17.7678L19.2042 17.1242ZM5.41436 7.00015L3.00015 9.41436L1.58594 8.00015L4.00015 5.58594L5.41436 7.00015ZM20.0002 5.58594L22.4144 8.00015L21.0002 9.41436L18.5859 7.00015L20.0002 5.58594Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
