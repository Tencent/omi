import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-drink')
export default class Drink extends WeElement<IconProps> {
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
        <g id="&amp;#233;&amp;#165;&amp;#174;&amp;#230;&amp;#150;&amp;#153;_drink">
          <path
            id="Union"
            d="M14.4807 1H20V3H15.9794L15.3291 5.22222H20.0706L18.8569 23H6.21764L5.34779 10.2778C3.47418 9.86298 2 8.2393 2 6.22222C2 3.90206 3.91363 2.05556 6.23139 2.05556C8.20418 2.05556 9.88418 3.39329 10.3406 5.22222H13.2452L14.4807 1ZM12.66 7.22222H7.14471L7.38137 10.7041L11.4477 11.365L12.66 7.22222ZM11.9956 13.4803L7.52121 12.753L8.08548 21H16.9888L17.4405 14.384L11.9989 13.4809L11.9956 13.4803ZM17.5773 12.3794L17.9294 7.22222H14.7439L13.4359 11.692L17.5773 12.3794ZM8.2106 5.22222C7.84137 4.5343 7.10214 4.05556 6.23139 4.05556C4.97986 4.05556 4 5.04458 4 6.22222C4 7.01865 4.48089 7.74502 5.20097 8.11792L5.00415 5.22222H8.2106Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
