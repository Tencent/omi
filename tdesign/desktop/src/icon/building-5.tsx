import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-building-5')
export default class Building5 extends WeElement<IconProps> {
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
          d="M11.998 0.811035L20.3816 6.19928L19.3003 7.88175L18.9997 7.68857V11.1057L22.3745 13.168L21.3316 14.8746L20.9997 14.6718V21.9998H2.99973V14.6718L2.6679 14.8746L1.625 13.168L4.99973 11.1057V7.68873L4.69946 7.88181L3.61776 6.19957L11.998 0.811035ZM6.99973 6.40272V9.88345L11.9997 6.8279L16.9997 9.88345V6.40316L11.9982 3.18865L6.99973 6.40272ZM4.99973 13.4496V19.9998H10.9997V15.9998H12.9997V19.9998H18.9997V13.4496L11.9997 9.17179L4.99973 13.4496Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
