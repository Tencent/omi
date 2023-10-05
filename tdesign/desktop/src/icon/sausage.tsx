import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sausage')
export default class Sausage extends WeElement<IconProps> {
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
        <g id="&amp;#233;&amp;#166;&amp;#153;&amp;#232;&amp;#130;&amp;#160;_sausage">
          <path
            id="Union"
            d="M19.9983 2.00293V3.99941H22.0023V5.99941H20.7451C21.2068 7.45561 20.8602 9.11256 19.7054 10.2674L10.2656 19.7072C9.11077 20.862 7.45381 21.2086 5.99761 20.7469L5.99761 22.001H3.99761L3.99761 20.0001H2.00195V18.0001H3.2508C2.78915 16.5439 3.13571 14.887 4.2905 13.7322L13.7304 4.2923C14.8852 3.13751 16.5421 2.79095 17.9983 3.2526V2.00293H19.9983ZM18.2912 5.70652C17.4223 4.8376 16.0135 4.8376 15.1446 5.70652L5.70472 15.1464C4.8358 16.0153 4.8358 17.4241 5.70472 18.293C6.57363 19.1619 7.98243 19.1619 8.85134 18.293L18.2912 8.85314C19.1601 7.98422 19.1601 6.57543 18.2912 5.70652Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
