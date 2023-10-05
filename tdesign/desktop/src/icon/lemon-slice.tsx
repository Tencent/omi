import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-lemon-slice')
export default class LemonSlice extends WeElement<IconProps> {
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
        <g id="&amp;#230;&amp;#159;&amp;#160;&amp;#230;&amp;#170;&amp;#172;&amp;#231;&amp;#137;&amp;#135;_lemon-slice">
          <path
            id="Union"
            d="M17.9948 0.59082L1.59101 16.9946L2.28767 17.7017C3.32811 18.7576 4.81067 19.8194 6.41297 20.62C8.00676 21.4163 9.81034 21.9998 11.4882 21.9998C14.6668 21.9998 17.5461 20.7102 19.6283 18.6281C21.7104 16.546 23 13.6667 23 10.488C23 8.81017 22.4165 7.00659 21.6202 5.41278C20.8196 3.81048 19.7578 2.32791 18.7018 1.28747L17.9948 0.59082ZM20.8989 9.38974L12.7266 8.68746L17.9697 3.44435C18.636 4.24026 19.2958 5.23532 19.8311 6.30668C20.35 7.3453 20.7281 8.40801 20.8989 9.38974ZM13.1452 10.7308L20.9567 11.4021C20.7747 13.3126 20.028 15.0576 18.8842 16.4698L13.1452 10.7308ZM17.47 17.884C16.0578 19.0278 14.3128 19.7745 12.4022 19.9565L11.731 12.145L17.47 17.884ZM9.68765 11.7264L10.3899 19.8987C9.40819 19.7279 8.34549 19.3498 7.30687 18.8308C6.23552 18.2956 5.24046 17.6358 4.44455 16.9695L9.68765 11.7264Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
