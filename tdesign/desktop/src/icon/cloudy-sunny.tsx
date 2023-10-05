import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cloudy-sunny')
export default class CloudySunny extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_9651)">
          <path
            d="M17.0035 1V3.00396L15 3.00424V1.00027L17.0035 1ZM11.0524 2.63458L12.4699 4.05185L11.0529 5.4685L9.63643 4.05168L11.0524 2.63458ZM20.9515 2.63476L22.3674 4.05132L20.9516 5.46846L19.5337 4.05202L20.9515 2.63476ZM11.9588 6.05557C12.8672 4.81094 14.3383 4.00012 16 4.00012C18.7614 4.00012 21 6.2387 21 9.00012C21 10.0022 20.7046 10.936 20.1971 11.7183C21.2982 12.6885 22 14.0925 22 15.6668C22 18.6476 19.5017 21.0001 16.5 21.0001H6.6C4.0954 21.0001 2 19.0356 2 16.5335C2 14.7036 3.12452 13.1582 4.70565 12.4626C4.70189 12.3755 4.7 12.288 4.7 12.2001C4.7 8.74073 7.60128 6.00014 11.1 6.00014C11.3908 6.00014 11.6775 6.01898 11.9588 6.05557ZM14.067 6.70559C15.5592 7.46331 16.7126 8.77763 17.2193 10.3788C17.6571 10.4343 18.0794 10.5399 18.4796 10.6896C18.8084 10.2082 19 9.62695 19 9.00012C19 7.34327 17.6569 6.00012 16 6.00012C15.2642 6.00012 14.5896 6.26491 14.067 6.70559ZM11.1 8.00014C8.63404 8.00014 6.7 9.91578 6.7 12.2001C6.7 12.4623 6.72505 12.7181 6.77273 12.9655L6.95683 13.921L6.00676 14.1311C4.83155 14.3911 4 15.3905 4 16.5335C4 17.8605 5.12815 19.0001 6.6 19.0001H16.5C18.4689 19.0001 20 17.4725 20 15.6668C20 14.4514 19.3143 13.3703 18.259 12.7844C17.7444 12.4987 17.1446 12.3335 16.5 12.3335C16.4803 12.3335 16.4607 12.3336 16.4411 12.3339L15.5868 12.3473L15.4403 11.5056C15.158 9.88428 13.8892 8.54957 12.2061 8.13376C11.8538 8.04674 11.4834 8.00014 11.1 8.00014ZM22 8.00004L24.004 8.00029V10.0037H22V8.00004Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
