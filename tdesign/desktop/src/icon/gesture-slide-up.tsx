import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-slide-up')
export default class GestureSlideUp extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8792_7019)">
          <path
            d="M0.498877 1.5127L6.19787 1.51543V6.50071H4.19787V4.40123C0.958594 8.71037 1.29991 14.857 5.22183 18.7789L5.92893 19.486L4.51472 20.9002L3.80761 20.1931C-0.733326 15.6522 -1.21264 8.58765 2.36967 3.51397L0.497514 3.51269L0.498877 1.5127Z"
            fill="currentColor"
          />
          <path
            d="M10.0068 8.64645C9.79809 8.28502 9.33593 8.16118 8.97449 8.36985C8.61306 8.57853 8.48922 9.04069 8.6979 9.40213L13.7137 18.0898L9.3181 19.4727L9.30647 19.6537L14.5006 21.7997C14.7178 21.8895 14.9644 21.8732 15.1679 21.7557L21.3042 18.2129C21.5863 18.05 21.7325 17.7249 21.6671 17.4057L20.5355 11.8808C20.4636 11.53 20.1558 11.2776 19.7977 11.2759L15.6008 11.256C15.4668 11.2554 15.3349 11.2904 15.2188 11.3574L12.4837 12.9366L10.0068 8.64645ZM7.97449 6.6378C9.29251 5.87684 10.9779 6.32843 11.7388 7.64645L13.2157 10.2045L14.2188 9.62534C14.6418 9.38117 15.122 9.25372 15.6103 9.25604L19.8072 9.27595C21.1116 9.28213 22.2331 10.2016 22.4948 11.4795L23.6265 17.0044C23.8646 18.167 23.3319 19.3516 22.3042 19.945L16.1679 23.4877C15.4265 23.9158 14.5282 23.9751 13.7369 23.6482L7.21879 20.9552L7.32755 19.2613C7.37728 18.4869 7.89811 17.8228 8.63836 17.5899L10.7349 16.9303L6.96585 10.4021C6.20489 9.08411 6.65647 7.39876 7.97449 6.6378Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
