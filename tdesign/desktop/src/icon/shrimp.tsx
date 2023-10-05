import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-shrimp')
export default class Shrimp extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#153;&amp;#190;_shrimp">
          <path
            id="Union"
            d="M17.5984 5.99073L14 9.58686V5C15.3244 5 16.5497 5.35851 17.5984 5.99073ZM12 5V11L10 11C7.97723 11 6.21627 10.4087 4.98059 9.38636C3.76404 8.37989 3 6.91311 3 5L12 5ZM14 14.4153L17.5899 18.0074C16.5377 18.635 15.3054 19 14 19V14.4153ZM12 17V19H8C8 17.8954 8.89543 17 10 17H12ZM14 21C16.1908 21 18.2151 20.202 19.7726 18.9051C21.7557 17.254 23 14.7793 23 12C23 9.2351 21.7355 6.74979 19.7816 5.10234C18.2136 3.78037 16.2053 3 14 3H1V5C1 7.50516 2.02682 9.53839 3.7057 10.9274C5.36545 12.3005 7.60449 13 10 13H12V15H10C7.79086 15 6 16.7909 6 19V21H14ZM19.1528 16.7421L15.4131 13L20.9302 13C20.7273 14.4375 20.0919 15.7275 19.1528 16.7421ZM20.9282 11L15.4153 11L19.1524 7.26525C20.0827 8.28201 20.722 9.57491 20.9282 11ZM9.00195 5.99805H6.99805V8.00195H9.00195V5.99805Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
