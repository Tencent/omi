import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sound-high')
export default class SoundHigh extends WeElement<IconProps> {
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
          d="M15 1.29004V22.7095L5.7369 17.4998L1 17.4998L1 6.49976H5.7369L15 1.29004ZM4.99882 8.49976H3L3 15.4998L4.99882 15.4998L4.99882 8.49976ZM6.99882 15.9149L13 19.29V4.70949L6.99882 8.08465V15.9149ZM20.4497 5.6358L21.1569 6.34291C24.281 9.4671 24.281 14.5324 21.1569 17.6566L20.4497 18.3637L19.0355 16.9495L19.7426 16.2424C22.0858 13.8993 22.0858 10.1003 19.7426 7.75712L19.0355 7.05002L20.4497 5.6358ZM17.2678 8.81778L18.682 7.40357L19.3891 8.11068C21.537 10.2586 21.537 13.741 19.3891 15.8888L18.682 16.596L17.2678 15.1817L17.9749 14.4746C19.3417 13.1078 19.3417 10.8917 17.9749 9.52489L17.2678 8.81778ZM16.9142 9.17134L17.6213 9.87844C18.7929 11.05 18.7929 12.9495 17.6213 14.1211L16.9142 14.8282L15.5 13.414L16.2071 12.7069C16.5976 12.3163 16.5976 11.6832 16.2071 11.2927L15.5 10.5855L16.9142 9.17134Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
