import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-thunderstorm-sunny')
export default class ThunderstormSunny extends WeElement<IconProps> {
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
          d="M16.0035 1V3.00396L14 3.00424V1.00027L16.0035 1ZM10.0524 2.63458L11.4699 4.05185L10.0529 5.4685L8.63643 4.05168L10.0524 2.63458ZM19.9515 2.63476L21.3674 4.05132L19.9516 5.46846L18.5337 4.05202L19.9515 2.63476ZM10.9588 6.05557C10.6775 6.01898 10.3908 6.00014 10.1 6.00014C6.60128 6.00014 3.7 8.74073 3.7 12.2001C3.7 12.288 3.70189 12.3755 3.70565 12.4626C2.12452 13.1582 1 14.7036 1 16.5335C1 18.3092 2.06313 19.8215 3.56833 20.5418L4.47036 20.9735L5.3337 19.1694L4.43167 18.7378C3.56612 18.3235 3 17.4801 3 16.5335C3 15.3905 3.83155 14.3911 5.00676 14.1311L5.95683 13.921L5.77273 12.9655C5.72505 12.7181 5.7 12.4623 5.7 12.2001C5.7 9.91578 7.63404 8.00014 10.1 8.00014C10.4834 8.00014 10.8538 8.04674 11.2061 8.13376C12.8892 8.54957 14.158 9.88428 14.4403 11.5056L14.5868 12.3473L15.4411 12.3339C15.4607 12.3336 15.4803 12.3335 15.5 12.3335C16.1446 12.3335 16.7444 12.4987 17.259 12.7844C18.3143 13.3703 19 14.4514 19 15.6668C19 17.0105 18.1598 18.1931 16.9118 18.718L15.99 19.1057L16.7654 20.9493L17.6872 20.5616C19.6183 19.7493 21 17.8774 21 15.6668C21 14.0925 20.2982 12.6885 19.1971 11.7183C19.7046 10.936 20 10.0022 20 9.00012C20 6.2387 17.7614 4.00012 15 4.00012C13.3383 4.00012 11.8672 4.81094 10.9588 6.05557ZM13.067 6.70559C13.5896 6.26491 14.2642 6.00012 15 6.00012C16.6569 6.00012 18 7.34327 18 9.00012C18 9.62695 17.8084 10.2082 17.4796 10.6896C17.0794 10.5399 16.6571 10.4343 16.2193 10.3788C15.7126 8.77763 14.5592 7.46331 13.067 6.70559ZM21 8.00004L23.004 8.00029V10.0037H21V8.00004ZM12.8767 13.6767L10.8177 17.0001H14.8352L10.8125 23.3794L9.12075 22.3126L11.2096 19.0001H7.2259L11.1766 12.6234L12.8767 13.6767Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
