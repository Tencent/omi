import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-palette')
export default class Palette extends WeElement<IconProps> {
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
          d="M12 3C7.02944 3 3 7.02944 3 12C3 17.0037 6.71453 20.8971 11.6525 20.8971C11.6537 20.8971 11.6548 20.8971 11.656 20.8971C11.6089 20.8179 11.5569 20.7352 11.5003 20.6453C11.4936 20.6345 11.4867 20.6236 11.4798 20.6126C11.0796 19.976 10.7698 19.1472 10.8266 18.2381C10.8855 17.2958 11.3322 16.3824 12.2414 15.6216C13.2726 14.7588 14.5044 14.7376 15.4591 14.7755C15.6735 14.784 15.8755 14.7949 16.0672 14.8053C16.8254 14.8463 17.4252 14.8787 18.014 14.7199C19.8659 14.2201 20.8951 12.9899 21.0023 11.3967C21.3234 6.62094 17.1147 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C17.931 1 23.4176 5.28585 22.9977 11.5309C22.8253 14.0956 21.0902 15.9613 18.535 16.6508C17.6033 16.9022 16.603 16.8433 15.8269 16.7976C15.6676 16.7882 15.5177 16.7794 15.3798 16.7739C14.463 16.7376 13.9295 16.8169 13.5249 17.1555C12.9984 17.596 12.8444 18.0158 12.8227 18.3628C12.7989 18.743 12.9286 19.1594 13.1731 19.5483C13.1816 19.5619 13.1906 19.5762 13.2 19.5911C13.2963 19.7438 13.4359 19.9652 13.5521 20.1961C13.6721 20.4347 13.8297 20.8004 13.8419 21.209C13.8565 21.697 13.6567 22.2143 13.1424 22.5468C12.7172 22.8217 12.183 22.8971 11.6525 22.8971C5.54478 22.8971 1 18.042 1 12ZM9.75 7.00391C9.75 5.89934 10.6454 5.00391 11.75 5.00391C12.8546 5.00391 13.75 5.89934 13.75 7.00391C13.75 8.10848 12.8546 9.00391 11.75 9.00391C10.6454 9.00391 9.75 8.10848 9.75 7.00391ZM5.0293 10.0039C5.0293 8.89934 5.92473 8.00391 7.0293 8.00391C8.13387 8.00391 9.0293 8.89934 9.0293 10.0039C9.0293 11.1085 8.13387 12.0039 7.0293 12.0039C5.92473 12.0039 5.0293 11.1085 5.0293 10.0039ZM14.5176 10.0039C14.5176 8.89934 15.413 8.00391 16.5176 8.00391C17.6221 8.00391 18.5176 8.89934 18.5176 10.0039C18.5176 11.1085 17.6221 12.0039 16.5176 12.0039C15.413 12.0039 14.5176 11.1085 14.5176 10.0039Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
