import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-fog-sunny')
export default class FogSunny extends WeElement<IconProps> {
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
          d="M13 1V4H11V1H13ZM20.4853 4.92848L18.364 7.0498L16.9497 5.63559L19.0711 3.51426L20.4853 4.92848ZM4.9289 3.51431L7.05022 5.63563L5.63601 7.04984L3.51469 4.92852L4.9289 3.51431ZM12 8C9.79086 8 8 9.79086 8 12C8 12.5707 8.11893 13.111 8.3324 13.5996L8.73277 14.516L6.90006 15.3167L6.49969 14.4004C6.17797 13.664 6 12.8515 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 12.8515 17.822 13.664 17.5003 14.4004L17.0999 15.3167L15.2672 14.516L15.6676 13.5996C15.8811 13.111 16 12.5707 16 12C16 9.79086 14.2091 8 12 8ZM1 11H4V13H1V11ZM20 11H23V13H20V11ZM2 17H8V19H2V17ZM10 17H22V19H10V17ZM17 21H22V23H17V21ZM2 21H15V23H2V21Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
