import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-dashboard')
export default class Dashboard extends WeElement<IconProps> {
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
          d="M12 3C7.02944 3 3 7.02944 3 12C3 15.3297 4.80766 18.2384 7.49994 19.7961L8.36549 20.2969L7.36386 22.028L6.49831 21.5272C3.21354 19.6266 1 16.0724 1 12C1 5.92487 5.92487 1 12 1C13.2027 1 14.3623 1.19339 15.4481 1.55154L16.3977 1.86478L15.7713 3.76412L14.8216 3.45088C13.9354 3.15858 12.9872 3 12 3ZM20.981 4.41444L15.4386 9.95577C15.7949 10.554 16 11.2535 16 12.0001C16 14.2092 14.2091 16.0001 12 16.0001C9.79086 16.0001 8 14.2092 8 12.0001C8 9.79095 9.79086 8.00009 12 8.00009C12.7362 8.00009 13.4266 8.19956 14.0193 8.54668L19.5669 3.00009L20.981 4.41444ZM22.1352 7.60226L22.4485 8.55193C22.8066 9.63775 23 10.7973 23 12C23 16.0713 20.7877 19.6247 17.5044 21.5257L16.639 22.0267L15.6369 20.2959L16.5023 19.7948C19.1933 18.2367 21 15.3288 21 12C21 11.0128 20.8414 10.0646 20.5491 9.17841L20.2359 8.22874L22.1352 7.60226ZM12 10.0001C10.8954 10.0001 10 10.8955 10 12.0001C10 13.1047 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 13.1047 14 12.0001C14 11.4442 13.7745 10.9428 13.4075 10.5792C13.045 10.2201 12.5492 10.0001 12 10.0001Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
