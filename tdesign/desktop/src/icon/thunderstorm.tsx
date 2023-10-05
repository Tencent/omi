import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-thunderstorm')
export default class Thunderstorm extends WeElement<IconProps> {
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
          d="M11.1 5C11.0786 5 11.0572 5.00015 11.0359 5.00043C8.60036 5.03348 6.7 6.93535 6.7 9.2C6.7 9.46219 6.72505 9.71792 6.77273 9.9654L6.95683 10.9209L6.00676 11.131C4.83155 11.3909 4 12.3903 4 13.5333C4 14.4799 4.56612 15.3234 5.43167 15.7376L6.3337 16.1693L5.47036 17.9734L4.56833 17.5417C3.06313 16.8214 2 15.309 2 13.5333C2 11.7035 3.12452 10.158 4.70565 9.46243C4.70189 9.37536 4.7 9.28787 4.7 9.2C4.7 5.77081 7.55127 3.04754 11.0088 3.00062C11.0392 3.00021 11.0696 3 11.1 3C11.646 3 12.1775 3.06644 12.6858 3.192C14.8331 3.7225 16.5652 5.31155 17.2193 7.37863C17.9415 7.47026 18.6217 7.69802 19.2299 8.03569C19.4545 8.16039 19.6692 8.30005 19.8726 8.45334C21.1579 9.42182 22 10.9439 22 12.6667C22 14.8773 20.6183 16.7492 18.6872 17.5614L17.7654 17.9491L16.99 16.1056L17.9118 15.7179C19.1598 15.193 20 14.0103 20 12.6667C20 11.6158 19.489 10.6685 18.669 10.0506C18.5396 9.95307 18.4026 9.86396 18.259 9.78426C17.7444 9.49852 17.1446 9.33333 16.5 9.33333C16.4803 9.33333 16.4607 9.33349 16.4411 9.33379L15.5868 9.34716L15.4403 8.50544C15.158 6.88414 13.8892 5.54944 12.2061 5.13363C11.8538 5.0466 11.4834 5 11.1 5ZM13.8767 10.6766L11.8177 14H15.8352L11.8125 20.3793L10.1207 19.3125L12.2096 16H8.22589L12.1766 9.62326L13.8767 10.6766ZM6.99805 17.998H9.00195V20.002H6.99805V17.998ZM14.998 17.998H17.002V20.002H14.998V17.998Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
