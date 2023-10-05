import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chimney')
export default class Chimney extends WeElement<IconProps> {
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
          d="M1.71875 2H13.2803L12.0103 7.08014L12.3683 11.1976L14.9995 9.88197L21.9995 13.382V22H1.92555L2.99071 7.08782L1.71875 2ZM4.93065 8L4.0735 20H7.99953V13.382L10.4444 12.1595L10.0827 8H4.93065ZM10.2188 6L10.7188 4H4.2803L4.7803 6H10.2188ZM9.99953 20H13.9995V17H15.9995V20H19.9995V14.618L14.9995 12.118L9.99953 14.618V20Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
