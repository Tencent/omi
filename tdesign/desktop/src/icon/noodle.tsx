import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-noodle')
export default class Noodle extends WeElement<IconProps> {
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
        <g id="&amp;#233;&amp;#157;&amp;#162;&amp;#230;&amp;#157;&amp;#161;_noodle">
          <path
            id="Union"
            d="M15 3L22 3V5H21V10L22 10V12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12V10L3 10C3 6.68629 5.68629 4 9 4C12.3137 4 15 6.68629 15 10L16 10V5L15 5L15 3ZM18 5V10H18.9995L19 5H18ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12H4ZM5 10L6 10C6 8.34315 7.34315 7 9 7C10.6569 7 12 8.34315 12 10L13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10ZM10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10H10Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
