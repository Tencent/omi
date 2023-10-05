import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-information-2')
export default class MapInformation2 extends WeElement<IconProps> {
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
          d="M12.0001 4C10.3432 4 9.00008 5.34315 9.00008 7C9.00008 8.23747 9.78218 9.49825 10.7381 10.5439C11.1937 11.0421 11.6523 11.4519 12.0001 11.7388C12.3479 11.4519 12.8065 11.0422 13.262 10.544C14.218 9.49845 15.0001 8.23767 15.0001 7C15.0001 5.34315 13.6569 4 12.0001 4ZM12 14.2136L11.433 13.8237L11.431 13.8223L11.427 13.8195L11.4148 13.811L11.3737 13.7819C11.3392 13.7573 11.2908 13.7222 11.2305 13.6772C11.1098 13.5872 10.9408 13.4572 10.7396 13.2916C10.3387 12.9616 9.80191 12.4839 9.26203 11.8934C8.21798 10.7514 7.00008 9.01215 7.00008 7C7.00008 4.23858 9.23865 2 12.0001 2C14.7615 2 17.0001 4.23858 17.0001 7C17.0001 9.01233 15.7822 10.7515 14.7381 11.8935C14.1982 12.484 13.6615 12.9617 13.2605 13.2917C13.0593 13.4573 12.8903 13.5873 12.7697 13.6772C12.7093 13.7222 12.6609 13.7573 12.6264 13.7819L12.5853 13.811L12.5731 13.8196L12.5691 13.8223L12.5677 13.8233L12 14.2136ZM12.0001 7.25C12.1381 7.25 12.2501 7.13807 12.2501 7C12.2501 6.86193 12.1381 6.75 12.0001 6.75C11.862 6.75 11.7501 6.86193 11.7501 7C11.7501 7.13807 11.862 7.25 12.0001 7.25ZM10.2501 7C10.2501 6.0335 11.0336 5.25 12.0001 5.25C12.9666 5.25 13.7501 6.0335 13.7501 7C13.7501 7.9665 12.9666 8.75 12.0001 8.75C11.0336 8.75 10.2501 7.9665 10.2501 7ZM3.10503 10H7.00008V12H4.89512L4.11734 19H19.8828L19.105 12H17.0001V10H20.8951L22.1173 21H1.88281L3.10503 10Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
