import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-information-1')
export default class MapInformation1 extends WeElement<IconProps> {
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
          d="M12 4C10.3431 4 9 5.34315 9 7C9 8.23747 9.7821 9.49825 10.738 10.5439C11.1936 11.0421 11.6522 11.4519 12 11.7388C12.3478 11.4519 12.8064 11.0422 13.262 10.544C14.2179 9.49845 15 8.23767 15 7C15 5.34315 13.6569 4 12 4ZM12 14.2136L11.4329 13.8237L11.4309 13.8223L11.4269 13.8195L11.4147 13.811L11.3736 13.7819C11.3392 13.7573 11.2907 13.7222 11.2304 13.6772C11.1097 13.5872 10.9408 13.4572 10.7395 13.2916C10.3386 12.9616 9.80183 12.4839 9.26196 11.8934C8.2179 10.7514 7 9.01215 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.01233 15.7821 10.7515 14.738 11.8935C14.1981 12.484 13.6614 12.9617 13.2604 13.2917C13.0592 13.4573 12.8902 13.5873 12.7696 13.6772C12.7092 13.7222 12.6608 13.7573 12.6263 13.7819L12.5853 13.811L12.573 13.8196L12.569 13.8223L12.5676 13.8233L12 14.2136ZM12 7.25C12.1381 7.25 12.25 7.13807 12.25 7C12.25 6.86193 12.1381 6.75 12 6.75C11.8619 6.75 11.75 6.86193 11.75 7C11.75 7.13807 11.8619 7.25 12 7.25ZM10.25 7C10.25 6.0335 11.0335 5.25 12 5.25C12.9665 5.25 13.75 6.0335 13.75 7C13.75 7.9665 12.9665 8.75 12 8.75C11.0335 8.75 10.25 7.9665 10.25 7ZM2 10H7V12H4V18.4969L9.0753 16.3806L15.0004 19.8421L20 16.9256V12H17V10H22V18.0744L14.9996 22.1579L8.92609 18.6097L2 21.4978V10Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
