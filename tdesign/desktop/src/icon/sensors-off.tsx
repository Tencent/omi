import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sensors-off')
export default class SensorsOff extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7452)">
          <path
            d="M21.2185 4.31711C22.9546 6.39814 24 9.07825 24 11.9999C24 14.9532 22.9321 17.6586 21.163 19.7487L22.4142 20.9999L21 22.4141L12.518 13.9322C12.3528 13.9763 12.1792 13.9999 12 13.9999C10.8954 13.9999 10 13.1045 10 11.9999C10 11.8207 10.0236 11.6471 10.0677 11.4819L7.82829 9.2424C7.30442 10.033 7 10.9804 7 11.9999C7 13.2185 7.43464 14.3329 8.15844 15.2005L8.79903 15.9684L7.26327 17.2496L6.62268 16.4817C5.61009 15.2679 5 13.7038 5 11.9999C5 10.428 5.519 8.97605 6.39368 7.8078L4.25703 5.67115C3.72069 6.32649 3.2661 7.05085 2.90861 7.82858C2.3256 9.09696 2 10.509 2 11.9999C2 13.4908 2.3256 14.9029 2.90861 16.1712C3.27938 16.9779 3.75461 17.7271 4.31723 18.4015L4.95783 19.1694L3.42207 20.4506L2.78147 19.6827C2.10705 18.8743 1.53672 17.9754 1.09139 17.0065C0.390386 15.4814 -7.80246e-08 13.7849 0 11.9999C7.80247e-08 10.2149 0.390387 8.51836 1.09139 6.99329C1.54886 5.99803 2.13825 5.07655 2.83696 4.25108L1.58579 2.99991L3 1.58569L11.482 10.0676C11.6472 10.0235 11.8208 9.99991 12 9.99991C13.1046 9.99991 14 10.8953 14 11.9999C14 12.1791 13.9764 12.3527 13.9323 12.518L16.1717 14.7574C16.6956 13.9668 17 13.0194 17 11.9999C17 10.7813 16.5654 9.66691 15.8416 8.7993L15.201 8.03142L16.7367 6.75023L17.3773 7.51811C18.3899 8.73189 19 10.296 19 11.9999C19 13.5718 18.481 15.0238 17.6063 16.192L19.743 18.3287C21.1543 16.6043 22 14.4016 22 11.9999C22 9.56362 21.13 7.33315 19.6828 5.5983L19.0422 4.83042L20.5779 3.54923L21.2185 4.31711Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
