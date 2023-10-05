import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-lightbulb')
export default class Lightbulb extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7256)">
          <path
            d="M11.9993 2C8.58248 1.99826 5.7998 4.78219 5.7998 8.2C5.7998 9.11652 5.96877 9.81067 6.4318 10.9229C6.59209 11.3079 6.83687 11.8326 7.12767 12.456C7.26915 12.7592 7.42152 13.0858 7.58036 13.4311C7.95475 14.2449 8.3553 15.1422 8.69003 16H15.3187C15.6604 15.1473 16.0604 14.2511 16.4329 13.4354C16.5686 13.1381 16.6997 12.8536 16.8231 12.5856C17.1354 11.9078 17.3991 11.3352 17.5683 10.9256C18.0286 9.81063 18.1998 9.11562 18.1998 8.2C18.1998 4.78311 15.4178 2.00174 11.9993 2ZM3.7998 8.2C3.7998 3.67862 7.47714 -0.00230389 12.0003 1.08193e-06C16.5218 0.00230516 20.1998 3.67769 20.1998 8.2C20.1998 9.46358 19.938 10.4267 19.4169 11.6888C19.2313 12.1383 18.9405 12.7696 18.6196 13.4663C18.5 13.7258 18.3763 13.9944 18.2522 14.2661C17.785 15.2894 17.2987 16.3871 16.9412 17.3485L16.699 18H7.28967L7.05359 17.3342C6.71497 16.3792 6.23324 15.2882 5.76342 14.267C5.62102 13.9575 5.47797 13.6508 5.34072 13.3565C5.03727 12.7059 4.76223 12.1163 4.58541 11.6915C4.05832 10.4254 3.7998 9.46269 3.7998 8.2ZM7.5 19H16.5V21H7.5V19ZM9.5 22H14.5V24H9.5V22Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
