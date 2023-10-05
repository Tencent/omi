import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-wifi-off-1')
export default class WifiOff1 extends WeElement<IconProps> {
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
          d="M2.99952 1.58569L22.4137 20.9999L20.9995 22.4141L15.638 17.0526L11.9993 21.601L0.598633 7.35005L1.37778 6.72517C2.12542 6.12554 2.91218 5.59818 3.72858 5.14318L1.58531 2.99991L2.99952 1.58569ZM5.20661 6.62164C4.59574 6.93197 4.00161 7.28689 3.42901 7.68647L11.9993 18.3994L14.2149 15.6299L5.20661 6.62164ZM20.5694 7.68607C17.2635 5.37918 13.2337 4.55718 9.40953 5.22378L8.42438 5.39551L8.08094 3.42522L9.06608 3.25349C13.7505 2.43694 18.715 3.59238 22.6206 6.72476L23.3998 7.34964L17.933 14.1832L16.3712 12.9338L20.5694 7.68607Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
