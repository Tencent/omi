import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-lighthouse-2')
export default class Lighthouse2 extends WeElement<IconProps> {
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
          d="M8.99956 1V2.00161H14.9996V1H16.9996V5H17.9996V7H16.9996V10C16.9996 10.9409 17.0741 11.9629 17.1947 13H18.9996V15H17.4766C17.6281 15.9278 17.8022 16.8335 17.9781 17.669C18.2246 18.8397 18.4712 19.8569 18.656 20.5807C18.7483 20.9425 18.8251 21.2304 18.8786 21.4271C19.0216 21.953 19.1757 22.476 19.3253 23H13.2188L12.2188 19H11.7803L10.7803 23H4.67383C4.82343 22.476 4.97755 21.953 5.12052 21.4271C5.17398 21.2304 5.25078 20.9425 5.34314 20.5807C5.52796 19.8569 5.77454 18.8397 6.02101 17.669C6.19689 16.8335 6.37099 15.9278 6.52248 15H4.99956V13H6.80443C6.92504 11.9629 6.99956 10.9409 6.99956 10V7H5.99956V5H6.99956V1H8.99956ZM8.99956 4.00161V5H14.9996V4.00161H8.99956ZM14.9996 7H8.99956V10C8.99956 10.9553 8.93001 11.9744 8.81711 13H15.182C15.0691 11.9744 14.9996 10.9553 14.9996 10V7ZM15.4511 15H8.548C8.37758 16.0867 8.17673 17.1375 7.97811 18.081C7.73303 19.2451 7.48806 20.2607 7.30021 21H9.21878L10.2188 17H13.7803L14.7803 21H16.6989C16.5111 20.2607 16.2661 19.2451 16.021 18.081C15.8224 17.1375 15.6215 16.0867 15.4511 15ZM10.9996 8.99805H13.0035V11.002H10.9996V8.99805Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
