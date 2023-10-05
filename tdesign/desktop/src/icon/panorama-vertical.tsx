import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-panorama-vertical')
export default class PanoramaVertical extends WeElement<IconProps> {
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
          d="M3.15625 1L20.8443 1L20.4582 2.28706L20.4576 2.28891L20.4551 2.29765L20.4438 2.33618C20.4337 2.37108 20.4184 2.42417 20.3988 2.49424C20.3595 2.6344 20.3028 2.84237 20.2344 3.10842C20.0975 3.6408 19.9142 4.40419 19.7309 5.32112C19.3628 7.16163 19.0003 9.59072 19.0003 12C19.0003 14.4093 19.3628 16.8384 19.7309 18.6789C19.9142 19.5958 20.0975 20.3592 20.2344 20.8916C20.3028 21.1576 20.3595 21.3656 20.3988 21.5058C20.4184 21.5758 20.4337 21.6289 20.4438 21.6638L20.4551 21.7023L20.4576 21.7111L20.4581 21.7127L20.8443 23L3.15625 23L3.54237 21.7129L3.54292 21.7111L3.54551 21.7023L3.55678 21.6638C3.56691 21.6289 3.58215 21.5758 3.60177 21.5058C3.64102 21.3656 3.69775 21.1576 3.76616 20.8916C3.90306 20.3592 4.08632 19.5958 4.2697 18.6789C4.6378 16.8384 5.00028 14.4093 5.00028 12C5.00028 9.59072 4.6378 7.16163 4.2697 5.32112C4.08632 4.40419 3.90306 3.6408 3.76616 3.10842C3.69775 2.84237 3.64102 2.6344 3.60177 2.49424C3.58215 2.42417 3.56691 2.37108 3.55678 2.33618L3.54551 2.29765L3.54292 2.28891L3.54245 2.28735L3.15625 1ZM5.80122 3C5.92905 3.51879 6.08 4.17457 6.23086 4.92888C6.61276 6.83837 7.00028 9.40928 7.00028 12C7.00028 14.5907 6.61276 17.1616 6.23086 19.0711C6.08 19.8254 5.92905 20.4812 5.80122 21L18.1993 21C18.0715 20.4812 17.9206 19.8254 17.7697 19.0711C17.3878 17.1616 17.0003 14.5907 17.0003 12C17.0003 9.40928 17.3878 6.83837 17.7697 4.92888C17.9206 4.17457 18.0715 3.51879 18.1993 3L5.80122 3Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
