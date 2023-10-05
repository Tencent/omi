import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-cheese')
export default class Cheese extends WeElement<IconProps> {
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
        <g id="&amp;#229;&amp;#165;&amp;#182;&amp;#233;&amp;#133;&amp;#170;_cheese">
          <path
            id="Union"
            d="M22.5325 1.46729L18.5353 14.125L17.7021 14.0134C17.6364 14.0046 17.5689 14 17.4998 14C16.6714 14 15.9998 14.6715 15.9998 15.5C15.9998 16.0785 16.3271 16.5822 16.8112 16.8332L17.5579 17.2201L15.6732 23.1883L14.0112 22.7925C7.69338 21.2883 2.72113 16.3469 1.2157 10.0241L0.811523 8.32654L11.7827 4.86194L12.0482 5.88014C12.2163 6.52509 12.8039 6.99997 13.4998 6.99997C14.3282 6.99997 14.9998 6.32839 14.9998 5.49997C14.9998 5.31419 14.9665 5.13848 14.9064 4.97696L14.5397 3.99133L22.5325 1.46729ZM16.9949 5.31335C16.9982 5.37519 16.9998 5.43741 16.9998 5.49997C16.9998 7.43296 15.4328 8.99997 13.4998 8.99997C12.2472 8.99997 11.1496 8.34248 10.5313 7.35449L3.18853 9.67326C4.53777 15.1539 8.84592 19.4483 14.3266 20.8109L15.177 18.118C14.4558 17.4775 13.9998 16.5425 13.9998 15.5C13.9998 13.7015 15.3563 12.2198 17.102 12.0223L19.4671 4.53265L16.9949 5.31335ZM9.49982 11C8.67139 11 7.99982 11.6715 7.99982 12.5C7.99982 13.3284 8.67139 14 9.49982 14C10.3282 14 10.9998 13.3284 10.9998 12.5C10.9998 11.6715 10.3282 11 9.49982 11ZM5.99982 12.5C5.99982 10.567 7.56682 8.99997 9.49982 8.99997C11.4328 8.99997 12.9998 10.567 12.9998 12.5C12.9998 14.433 11.4328 16 9.49982 16C7.56682 16 5.99982 14.433 5.99982 12.5Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
