import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-pray')
export default class GesturePray extends WeElement<IconProps> {
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
          d="M10.3566 3.30238C10.0441 3.29626 9.77107 3.5127 9.70576 3.81843L7.42519 14.4929L6.20845 15.7097L8.90974 18.411L10.4369 16.8838C10.7951 16.5256 10.9964 16.0397 10.9964 15.5331L10.9964 3.95476C10.9964 3.59937 10.712 3.30933 10.3566 3.30238ZM7.49553 19.8252L4.79423 17.1239L4.15069 17.7674L6.85199 20.4687L7.49553 19.8252ZM7.74989 3.40057C8.01542 2.15776 9.12513 1.2779 10.3957 1.30276C11.0026 1.31463 11.5585 1.52959 11.9992 1.88202C12.4399 1.52959 12.9958 1.31463 13.6026 1.30276C14.8733 1.2779 15.983 2.15776 16.2485 3.40057L18.4055 13.4968L22.6761 17.7674L17.1464 23.2971L12.1473 18.298C12.0963 18.2471 12.047 18.1949 11.9992 18.1416C11.9514 18.1949 11.902 18.2471 11.8511 18.298L6.85199 23.2971L1.32227 17.7674L5.59287 13.4968L7.74989 3.40057ZM14.2926 3.81843C14.2273 3.5127 13.9543 3.29626 13.6418 3.30238C13.2864 3.30933 13.002 3.59937 13.002 3.95476L13.002 15.5331C13.002 16.0397 13.2033 16.5256 13.5615 16.8838L15.0886 18.411L17.7899 15.7097L16.5732 14.4929L14.2926 3.81843ZM19.2042 17.1239L16.5029 19.8252L17.1464 20.4687L19.8477 17.7674L19.2042 17.1239Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
