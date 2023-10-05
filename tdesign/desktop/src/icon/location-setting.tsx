import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-location-setting')
export default class LocationSetting extends WeElement<IconProps> {
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
          d="M11 3C14.866 3 18 6.13401 18 10V11H20V10C20 5.02944 15.9706 1 11 1C6.02944 1 2 5.02944 2 10C2 13.637 4.2179 16.8762 6.26196 19.112C7.30183 20.2494 8.33859 21.1725 9.11454 21.8111C9.50327 22.131 9.82848 22.3811 10.0585 22.5526C10.4494 22.8441 10.8557 23.1144 11.2574 23.3906L12.3906 21.7426C12.0099 21.4808 11.6245 21.2255 11.254 20.9493C11.0465 20.7946 10.7467 20.5641 10.3855 20.2668C9.66141 19.6709 8.69817 18.8126 7.73804 17.7625C5.7821 15.6231 4 12.8623 4 10C4 6.13401 7.13401 3 11 3ZM11 8C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12C12.1046 12 13 11.1046 13 10C13 8.89543 12.1046 8 11 8ZM7 10C7 7.79086 8.79086 6 11 6C13.2091 6 15 7.79086 15 10C15 12.2091 13.2091 14 11 14C8.79086 14 7 12.2091 7 10Z"
          fill="currentColor"
        />
        <path
          d="M18.9999 12.75V14.126C19.7149 14.31 20.3525 14.6867 20.854 15.1975L22.0466 14.509L23.0466 16.241L21.855 16.929C21.9494 17.2699 21.9999 17.629 21.9999 18C21.9999 18.371 21.9494 18.7301 21.855 19.071L23.0466 19.759L22.0466 21.491L20.854 20.8025C20.3525 21.3133 19.7149 21.69 18.9999 21.874V23.25H16.9999V21.874C16.285 21.69 15.6474 21.3133 15.1458 20.8025L13.9533 21.491L12.9533 19.759L14.1449 19.071C14.0504 18.7301 13.9999 18.371 13.9999 18C13.9999 17.629 14.0504 17.2699 14.1449 16.929L12.9533 16.241L13.9533 14.509L15.1458 15.1975C15.6474 14.6867 16.285 14.31 16.9999 14.126V12.75H18.9999ZM16.2487 17.0333C16.0902 17.3198 15.9999 17.6494 15.9999 18C15.9999 18.3506 16.0902 18.6802 16.2487 18.9667L16.2852 19.03C16.6351 19.6112 17.2721 20 17.9999 20C18.7278 20 19.3648 19.6112 19.7147 19.03L19.7512 18.9668C19.9097 18.6803 19.9999 18.3507 19.9999 18C19.9999 17.6493 19.9097 17.3197 19.7512 17.0332L19.7147 16.97C19.3648 16.3888 18.7278 16 17.9999 16C17.2721 16 16.6351 16.3888 16.2852 16.97L16.2487 17.0333Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
