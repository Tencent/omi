import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-internet')
export default class Internet extends WeElement<IconProps> {
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
          d="M3.05493 11C3.45261 7.40254 5.97062 4.44413 9.33156 3.40217C8.00851 5.65483 7.1892 8.23957 7.02895 11H3.05493ZM10.9922 1.04555C5.38944 1.55442 1 6.26461 1 12C1 17.7354 5.3894 22.4455 10.9922 22.9545L11 22.9643L11.4254 22.9853C11.4932 22.9887 11.5611 22.9916 11.6292 22.9939C11.7523 22.9979 11.8759 23 12 23C12.1187 23 12.2369 22.9981 12.3546 22.9944C12.4281 22.9921 12.5015 22.989 12.5746 22.9853L13 22.9643L13.0078 22.9545C18.6106 22.4455 23 17.7354 23 12C23 6.26461 18.6106 1.55443 13.0078 1.04555L12.9999 1.03571L12.5736 1.0147C12.4767 1.00972 12.3795 1.006 12.2819 1.00354C12.1882 1.00119 12.0942 1 12 1C11.9051 1 11.8104 1.0012 11.7161 1.00359C11.6192 1.00605 11.5226 1.00976 11.4263 1.0147L11.0001 1.03571L10.9922 1.04555ZM12.0011 3C13.6972 5.25767 14.7704 8.00828 14.9672 11H9.03278C9.22955 8.00828 10.3028 5.25767 11.9989 3C11.9992 3 11.9996 3 12 3C12.0004 3 12.0008 3 12.0011 3ZM7.02894 13C7.18917 15.7604 8.00847 18.3452 9.3315 20.5978C5.97059 19.5558 3.45261 16.5974 3.05493 13H7.02894ZM11.9988 21C10.3028 18.7423 9.22953 15.9917 9.03277 13H14.9672C14.7705 15.9917 13.6972 18.7423 12.0012 21C12.0008 21 12.0004 21 12 21C11.9996 21 11.9992 21 11.9988 21ZM14.6685 20.5978C15.9915 18.3452 16.8108 15.7604 16.9711 13H20.9451C20.5474 16.5974 18.0294 19.5558 14.6685 20.5978ZM16.9711 11C16.8108 8.23957 15.9915 5.65483 14.6684 3.40217C18.0294 4.44413 20.5474 7.40254 20.9451 11H16.9711Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
