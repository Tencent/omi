import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bean')
export default class Bean extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#177;&amp;#134;&amp;#229;&amp;#173;&amp;#144;_bean">
          <path
            id="Union"
            d="M12.1639 2.63585C13.1664 2.11761 14.28 2 15.5612 2C17.4691 2 19.1638 2.78219 20.338 4.17303C21.507 5.55758 22.1071 7.47868 21.9842 9.68716C21.7661 13.6044 20.1734 16.7054 17.7252 18.8194C15.2884 20.9234 12.0635 22 8.64501 22C6.79216 22 4.9108 21.3282 3.47983 20.1807C2.04215 19.0278 1 17.3397 1 15.3158C1 13.9255 1.33945 12.7179 2.06941 11.7013C2.79157 10.6956 3.83731 9.95858 5.11148 9.39707C5.45545 9.24548 5.81806 9.10579 6.19822 8.9764C7.55074 8.51609 8.07868 8.15965 8.33457 7.63712C8.79232 6.70238 9.21253 5.90969 9.62404 5.24484C10.3794 4.02436 11.1503 3.15981 12.1639 2.63585ZM11.7314 5.68575C13.4328 7.88047 13.0287 10.4344 11.488 11.9102C10.6602 12.7031 9.5097 13.1699 8.26038 13.0522C7.21534 12.9537 6.18627 12.4556 5.27402 11.5435C4.5596 11.9357 4.04715 12.376 3.69397 12.8679C3.25035 13.4857 3 14.2654 3 15.3158C3 16.6056 3.65759 17.7596 4.73103 18.6204C5.81118 19.4866 7.25233 20 8.64501 20C11.6509 20 14.3925 19.0546 16.4181 17.3056C18.4322 15.5665 19.7976 12.9833 19.9873 9.576C20.0867 7.79071 19.5973 6.39602 18.8098 5.46323C18.0276 4.53671 16.8989 4 15.5612 4C14.3682 4 13.6492 4.11943 13.0823 4.4125C12.644 4.63907 12.2184 5.01089 11.7314 5.68575ZM7.37304 10.6805C7.75902 10.9193 8.12505 11.0305 8.44804 11.061C9.07073 11.1197 9.65978 10.8919 10.1046 10.4659C10.7507 9.84698 11.111 8.77135 10.5839 7.61683C10.4391 7.89509 10.2886 8.19446 10.1308 8.51673C9.5677 9.66649 8.52775 10.2451 7.37304 10.6805Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
