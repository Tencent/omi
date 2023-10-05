import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sun-rising')
export default class SunRising extends WeElement<IconProps> {
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
          d="M13 3V6H11V3H13ZM20.4853 6.92848L18.364 9.0498L16.9497 7.63559L19.0711 5.51426L20.4853 6.92848ZM4.9289 5.51431L7.05022 7.63563L5.63601 9.04984L3.51469 6.92852L4.9289 5.51431ZM12 10C9.79086 10 8 11.7909 8 14V15H6V14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14V15H16V14C16 11.7909 14.2091 10 12 10ZM1 13H4V15H1V13ZM20 13H23V15H20V13ZM12 15.7981L15.3028 18H23V20H14.6972L12 18.2018L9.30278 20H1V18H8.69722L12 15.7981Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
