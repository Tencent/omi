import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-patio')
export default class Patio extends WeElement<IconProps> {
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
          d="M5.78326 2.06021C7.2495 1.52703 9.36545 1 12 1C14.6345 1 16.7505 1.52703 18.2167 2.06021C18.9498 2.32677 19.5214 2.59519 19.9157 2.80092C20.1129 2.90382 20.2661 2.99117 20.3731 3.05496C20.4267 3.08686 20.4687 3.11289 20.4991 3.13205C20.5142 3.14163 20.5265 3.14949 20.5358 3.15552L20.5475 3.16316L20.5516 3.16592L20.5533 3.16702L20.5547 3.16795L21 3.46482V20H22V22H2V20H3V3.46482L3.4453 3.16795L3.44669 3.16702L3.44836 3.16592L3.45254 3.16316L3.46423 3.15552C3.47351 3.14949 3.48575 3.14163 3.50092 3.13205C3.53125 3.11289 3.57332 3.08686 3.62687 3.05496C3.73395 2.99117 3.88708 2.90382 4.08431 2.80092C4.47862 2.59519 5.0502 2.32677 5.78326 2.06021ZM5 4.57902V20H7V7.5H9V9.5H11V7.5H13V20H19V4.57902C18.9969 4.57738 18.9937 4.57574 18.9906 4.57408C18.6661 4.40481 18.1752 4.17323 17.5333 3.93979C16.2495 3.47297 14.3655 3 12 3C9.63455 3 7.7505 3.47297 6.46674 3.93979C5.8248 4.17323 5.33388 4.40481 5.00944 4.57408C5.00628 4.57573 5.00313 4.57738 5 4.57902ZM9 11.5V13H11V11.5H9ZM11 15H9V16.5H11V15ZM11 18.5H9V20H11V18.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
