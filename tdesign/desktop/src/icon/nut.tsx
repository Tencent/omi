import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-nut')
export default class Nut extends WeElement<IconProps> {
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
        <g id="&amp;#229;&amp;#157;&amp;#154;&amp;#230;&amp;#158;&amp;#156;_nut">
          <path
            id="Union"
            d="M17.474 4.80469C17.8869 4.18168 18.3044 3.42475 18.5514 2.68366L20.4488 3.31612C20.0895 4.39401 19.4791 5.43758 18.9281 6.22161C19.9961 7.44432 20.8823 9.09576 21.2715 10.8128C21.7399 12.8792 21.5151 15.2128 19.7783 16.9496L17.6569 19.071L16.9308 18.3449C15.033 20.0485 12.836 21.3085 10.667 21.8328C8.19914 22.4294 5.66908 22.0831 3.79301 20.207C1.91693 18.3309 1.57066 15.8009 2.16718 13.333C2.69146 11.164 3.95147 8.96702 5.65513 7.06916L4.92902 6.34305L7.05034 4.22173C8.77692 2.49514 11.1094 2.27163 13.1607 2.72248C14.7607 3.07415 16.3031 3.85396 17.474 4.80469ZM16.2174 6.36052C15.2964 5.61177 14.0385 4.96316 12.7314 4.67585C11.0845 4.31388 9.54566 4.55483 8.46455 5.63594L7.75745 6.34305L13.1214 11.707H16.5356V15.1212L17.6569 16.2425L18.364 15.5354C19.4556 14.4439 19.6953 12.9061 19.321 11.255C19.0307 9.97392 18.3869 8.72836 17.626 7.78102C17.4195 7.99472 17.2017 8.21246 16.9732 8.44095L16.9498 8.46436L15.5356 7.05014C15.7925 6.79324 16.0169 6.56858 16.2174 6.36052ZM15.5144 16.9284L14.5356 15.9496V13.707H12.293L7.0716 8.48563C5.58182 10.1671 4.53594 12.0456 4.1112 13.8029C3.62787 15.8025 3.9591 17.5447 5.20722 18.7928C6.45534 20.0409 8.19752 20.3722 10.1971 19.8888C11.9544 19.4641 13.8329 18.4182 15.5144 16.9284Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
