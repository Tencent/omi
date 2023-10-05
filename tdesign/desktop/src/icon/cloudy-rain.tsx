import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cloudy-rain')
export default class CloudyRain extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_9655)">
          <path
            d="M17.0035 1V3.00396L15 3.00424V1.00027L17.0035 1ZM11.0524 2.63458L12.4699 4.05185L11.0529 5.4685L9.63643 4.05168L11.0524 2.63458ZM20.9515 2.63476L22.3674 4.05132L20.9516 5.46846L19.5337 4.05202L20.9515 2.63476ZM11.9588 6.05557C11.6775 6.01898 11.3908 6.00014 11.1 6.00014C7.60128 6.00014 4.7 8.74073 4.7 12.2001C4.7 12.288 4.70189 12.3755 4.70565 12.4626C3.12452 13.1582 2 14.7036 2 16.5335C2 18.3092 3.06313 19.8215 4.56833 20.5418L5.47036 20.9735L6.3337 19.1694L5.43167 18.7378C4.56612 18.3235 4 17.4801 4 16.5335C4 15.3905 4.83155 14.3911 6.00676 14.1311L6.95683 13.921L6.77273 12.9655C6.72505 12.7181 6.7 12.4623 6.7 12.2001C6.7 9.91578 8.63404 8.00014 11.1 8.00014C11.4834 8.00014 11.8538 8.04674 12.2061 8.13376C13.8892 8.54957 15.158 9.88428 15.4403 11.5056L15.5868 12.3473L16.4411 12.3339C16.4607 12.3336 16.4803 12.3335 16.5 12.3335C17.1446 12.3335 17.7444 12.4987 18.259 12.7844C19.3143 13.3703 20 14.4514 20 15.6668C20 17.0105 19.1598 18.1931 17.9118 18.718L16.99 19.1057L17.7654 20.9493L18.6872 20.5616C20.6183 19.7493 22 17.8774 22 15.6668C22 14.0925 21.2982 12.6885 20.1971 11.7183C20.7046 10.936 21 10.0022 21 9.00012C21 6.2387 18.7614 4.00012 16 4.00012C14.3383 4.00012 12.8672 4.81094 11.9588 6.05557ZM14.067 6.70559C14.5896 6.26491 15.2642 6.00012 16 6.00012C17.6569 6.00012 19 7.34327 19 9.00012C19 9.62695 18.8084 10.2082 18.4796 10.6896C18.0794 10.5399 17.6571 10.4343 17.2193 10.3788C16.7126 8.77763 15.5592 7.46331 14.067 6.70559ZM22 8.00004L24.004 8.00029V10.0037H22V8.00004ZM12.998 13.9982H15.002V16.0021H12.998V13.9982ZM7.99805 15.9982H10.002V18.0021H7.99805V15.9982ZM12.998 18.9982H15.002V21.0021H12.998V18.9982ZM7.99805 20.9982H10.002V23.0021H7.99805V20.9982Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
