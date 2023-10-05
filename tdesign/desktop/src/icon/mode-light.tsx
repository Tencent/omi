import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-mode-light')
export default class ModeLight extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7797)">
          <path
            d="M10.999 -0.00390625H13.0029V2H10.999V-0.00390625ZM4.22283 2.80287L5.63975 4.2199L4.22283 5.63682L2.8058 4.2199L4.22283 2.80287ZM19.7794 2.80308L21.196 4.21984L19.7794 5.63673L18.3618 4.21984L19.7794 2.80308ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM-0.000976562 10.9961H2.00293V13H-0.000976562V10.9961ZM21.999 10.9961H24.0029V13H21.999V10.9961ZM4.2228 18.3593L5.63959 19.776L4.2228 21.1936L2.80601 19.776L4.2228 18.3593ZM19.7794 18.3595L21.1959 19.776L19.7794 21.1934L18.3619 19.776L19.7794 18.3595ZM10.999 21.9961H13.0029V24H10.999V21.9961Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
