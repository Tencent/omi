import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-ice-cream')
export default class IceCream extends WeElement<IconProps> {
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
          d="M14.9996 2.71706C13.2435 1.56387 10.8296 1.75582 9.29248 3.29289C8.33207 4.2533 7.88892 5.55643 7.97647 6.824L2.0726 19.291L2.06524 19.3082C1.35405 20.9677 3.03193 22.6455 4.69137 21.9343L4.70855 21.927L17.1756 16.0231C18.4432 16.1107 19.7463 15.6675 20.7067 14.7071C22.2438 13.17 22.4357 10.7561 21.2825 9.00001C22.4357 7.24393 22.2438 4.82996 20.7067 3.29289C19.1696 1.75582 16.7557 1.56387 14.9996 2.71706ZM16.4142 4.21327C17.3546 3.77683 18.5268 3.94144 19.2925 4.7071C20.2678 5.68246 20.2678 7.31754 19.2925 8.2929C18.5268 9.05856 17.3546 9.22317 16.4141 8.78673C17.2273 7.38246 17.2273 5.61753 16.4142 4.21327ZM19.7863 10.4146C20.2228 11.355 20.0581 12.5272 19.2925 13.2929C18.7924 13.793 18.1192 14.0451 17.4475 14.0337L9.96589 6.55208C9.95447 5.88041 10.2066 5.2072 10.7067 4.7071C11.6821 3.73175 13.3171 3.73175 14.2925 4.7071C15.2678 5.68246 15.2678 7.31753 14.2925 8.29289L13.5854 9L14.2925 9.7071C15.7682 11.1828 18.0523 11.4187 19.7863 10.4146ZM15.289 14.7036L3.905 20.0946L9.29598 8.7106L15.289 14.7036Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
