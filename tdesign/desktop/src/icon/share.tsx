import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-share')
export default class Share extends WeElement<IconProps> {
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
          d="M15.991 1.0351C17.9042 -0.069468 20.3506 0.586032 21.4552 2.4992C22.5597 4.41237 21.9042 6.85874 19.991 7.9633C18.3769 8.89522 16.3832 8.57429 15.1361 7.30222L8.85564 10.9282C8.95406 11.2816 9.00175 11.6421 9.00133 12.0001C9.00175 12.3581 8.95406 12.7187 8.85564 13.072L15.1361 16.698C16.3832 15.426 18.3769 15.105 19.991 16.037C21.9042 17.1415 22.5597 19.5879 21.4552 21.5011C20.3506 23.4142 17.9042 24.0697 15.991 22.9652C14.3769 22.0332 13.658 20.1462 14.1361 18.4301L7.85564 14.8041C6.60847 16.0761 4.6148 16.3971 3.00067 15.4652C2.14332 14.9702 1.53853 14.2057 1.23153 13.3405C1.07513 12.9026 0.999685 12.4494 1 12.0001C0.999685 11.5508 1.07515 11.0975 1.23161 10.6595C1.53864 9.79441 2.1434 9.03005 3.00067 8.5351C4.6148 7.60318 6.60847 7.92412 7.85564 9.19619L14.1361 5.57017C13.658 3.85406 14.3769 1.96702 15.991 1.0351ZM19.7231 3.4992C19.1708 2.54262 17.9476 2.21487 16.991 2.76715C16.0345 3.31944 15.7067 4.54262 16.259 5.4992C16.8113 6.45579 18.0345 6.78354 18.991 6.23125C19.9476 5.67897 20.2754 4.45579 19.7231 3.4992ZM3.07108 12.5271C3.1154 12.6887 3.18091 12.8473 3.26862 12.9992C3.8209 13.9558 5.04408 14.2835 6.00067 13.7313C6.64142 13.3613 7.00003 12.6904 7.001 12.0001C7.00003 11.3099 6.64142 10.6389 6.00067 10.269C5.04408 9.71672 3.8209 10.0445 3.26862 11.0011C3.0866 11.3163 3.00017 11.6605 3.00033 12.0001C3.00042 12.1787 3.02444 12.3559 3.07108 12.5271ZM18.991 17.769C18.0345 17.2167 16.8113 17.5445 16.259 18.5011C15.7067 19.4576 16.0345 20.6808 16.991 21.2331C17.9476 21.7854 19.1708 21.4576 19.7231 20.5011C20.2754 19.5445 19.9476 18.3213 18.991 17.769Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
