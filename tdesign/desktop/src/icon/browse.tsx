import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-browse')
export default class Browse extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_7319)">
          <path
            d="M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
