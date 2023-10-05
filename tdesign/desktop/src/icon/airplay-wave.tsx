import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-airplay-wave')
export default class AirplayWave extends WeElement<IconProps> {
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
          d="M1 3L23.0001 3L23.0001 20L17.5001 20L17.5001 18L21.0001 18L21.0001 5L3.00013 5L3.00099 18H6.50007V20H1.00112L1 3ZM16.9504 13.3829C14.2167 10.6492 9.78459 10.6492 7.05092 13.3829L6.34382 14.09L4.9296 12.6758L5.63671 11.9687C9.15143 8.45395 14.8499 8.45395 18.3646 11.9687L19.0717 12.6758L17.6575 14.09L16.9504 13.3829ZM14.1217 16.211C12.9501 15.0394 11.0506 15.0394 9.87905 16.211L9.17194 16.9181L7.75773 15.5039L8.46483 14.7968C10.4175 12.8442 13.5833 12.8442 15.5359 14.7968L16.243 15.5039L14.8288 16.9181L14.1217 16.211ZM12.0001 18.0858L15.9143 22L8.08585 22L12.0001 18.0858Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
