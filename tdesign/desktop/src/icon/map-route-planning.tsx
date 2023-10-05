import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-route-planning')
export default class MapRoutePlanning extends WeElement<IconProps> {
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
          d="M12 4C10.3431 4 9 5.34315 9 7C9 8.23747 9.7821 9.49825 10.738 10.5439C11.1936 11.0421 11.6522 11.4519 12 11.7388C12.3478 11.4519 12.8064 11.0422 13.262 10.544C14.2179 9.49845 15 8.23767 15 7C15 5.34315 13.6569 4 12 4ZM12 14.2136C11.7424 14.0365 11.481 13.864 11.2304 13.6772C11.1097 13.5872 10.9408 13.4572 10.7395 13.2916C10.3386 12.9616 9.80183 12.4839 9.26196 11.8934C8.2179 10.7514 7 9.01215 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.01233 15.7821 10.7515 14.738 11.8935C14.1981 12.484 13.6614 12.9617 13.2604 13.2917C13.0592 13.4573 12.8902 13.5873 12.7696 13.6772C12.5189 13.8641 12.2575 14.0365 12 14.2136ZM12 7.25C12.1381 7.25 12.25 7.13807 12.25 7C12.25 6.86193 12.1381 6.75 12 6.75C11.8619 6.75 11.75 6.86193 11.75 7C11.75 7.13807 11.8619 7.25 12 7.25ZM10.25 7C10.25 6.0335 11.0335 5.25 12 5.25C12.9665 5.25 13.75 6.0335 13.75 7C13.75 7.9665 12.9665 8.75 12 8.75C11.0335 8.75 10.25 7.9665 10.25 7ZM2 10H5V12H4.36641L5.23443 13.4187L4 14.174V20H20V13.752L19.2166 12.7175L19.8963 12.2028L20 12.3397V12H18V10H22V22H2V10ZM4 12.1941L4.31719 12H4V12.1941ZM18.6538 15.8013L17.7752 16.2789C17.3335 16.5191 16.8771 16.7313 16.4087 16.9142L15.6811 15.0512C16.0714 14.8988 16.4518 14.722 16.8199 14.5218L17.6985 14.0442L18.6538 15.8013ZM7.33621 16.7747C6.87366 16.5775 6.42397 16.3515 5.98978 16.0979L6.9985 14.3709C7.36032 14.5822 7.73506 14.7706 8.12051 14.9349L9.04041 15.3271L8.25611 17.1669L7.33621 16.7747ZM13.6388 17.672L12.6401 17.7218C12.1379 17.7468 11.6346 17.7403 11.1332 17.7022L11.2847 15.708C11.7026 15.7397 12.1219 15.7451 12.5404 15.7243L13.5392 15.6745L13.6388 17.672Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
