import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-aiming')
export default class MapAiming extends WeElement<IconProps> {
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
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 4.33333V5.52023C15.8199 5.95183 18.0482 8.18015 18.4798 11H19.6667V13H18.4798C18.0482 15.8199 15.8199 18.0482 13 18.4798V19.6667H11V18.4798C8.18015 18.0482 5.95183 15.8199 5.52023 13H4.33333V11H5.52023C5.95183 8.18015 8.18015 5.95183 11 5.52023V4.33333H13ZM12 7.44444C9.48404 7.44444 7.44444 9.48404 7.44444 12C7.44444 14.516 9.48404 16.5556 12 16.5556C14.516 16.5556 16.5556 14.516 16.5556 12C16.5556 9.48404 14.516 7.44444 12 7.44444ZM12 11.8889C11.9386 11.8889 11.8889 11.9386 11.8889 12C11.8889 12.0614 11.9386 12.1111 12 12.1111C12.0614 12.1111 12.1111 12.0614 12.1111 12C12.1111 11.9386 12.0614 11.8889 12 11.8889ZM9.88889 12C9.88889 10.8341 10.8341 9.88889 12 9.88889C13.1659 9.88889 14.1111 10.8341 14.1111 12C14.1111 13.1659 13.1659 14.1111 12 14.1111C10.8341 14.1111 9.88889 13.1659 9.88889 12Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
