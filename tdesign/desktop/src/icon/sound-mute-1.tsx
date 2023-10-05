import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sound-mute-1')
export default class SoundMute1 extends WeElement<IconProps> {
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
          d="M15 1.29004V22.7095L5.7369 17.4998L1 17.4998L1 6.49976H5.7369L15 1.29004ZM4.99882 8.49976H3L3 15.4998L4.99882 15.4998L4.99882 8.49976ZM6.99882 15.9149L13 19.29V4.70949L6.99882 8.08465V15.9149ZM17.8787 8.46423L20 10.5855L22.1213 8.46423L23.5355 9.87844L21.4142 11.9998L23.5355 14.1211L22.1213 15.5353L20 13.414L17.8787 15.5353L16.4645 14.1211L18.5858 11.9998L16.4645 9.87844L17.8787 8.46423Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
