import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-connection')
export default class MapConnection extends WeElement<IconProps> {
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
          d="M6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4ZM2 6C2 3.79086 3.79086 2 6 2C7.86384 2 9.42994 3.27477 9.87398 5H18.0828L18.1644 5.01361C18.7904 5.11793 19.7025 5.42021 20.4834 6.01889C21.2894 6.6368 22 7.61442 22 9C22 10.3856 21.2894 11.3632 20.4834 11.9811C19.7025 12.5798 18.7904 12.8821 18.1644 12.9864L18.0828 13H6C5.76324 13 5.22785 13.1483 4.7497 13.5309C4.30321 13.8881 4 14.3717 4 15C4 15.6283 4.30321 16.1119 4.7497 16.4691C5.22785 16.8517 5.76324 17 6 17H17V14.5L21.6667 18L17 21.5V19H6C5.23676 19 4.27215 18.6483 3.5003 18.0309C2.69679 17.3881 2 16.3717 2 15C2 13.6283 2.69679 12.6119 3.5003 11.9691C4.27215 11.3517 5.23676 11 6 11H17.9098C18.2842 10.9254 18.8274 10.7306 19.2666 10.3939C19.7106 10.0535 20 9.61442 20 9C20 8.38558 19.7106 7.94653 19.2666 7.60611C18.8274 7.26943 18.2842 7.07465 17.9098 7H9.87398C9.42994 8.72523 7.86384 10 6 10C3.79086 10 2 8.20914 2 6Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
