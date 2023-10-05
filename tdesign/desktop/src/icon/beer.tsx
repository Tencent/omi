import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-beer')
export default class Beer extends WeElement<IconProps> {
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
        <g id="&amp;#229;&amp;#149;&amp;#164;&amp;#233;&amp;#133;&amp;#146;_beer">
          <path
            id="Union"
            d="M5.15163 4C5.67244 2.30469 7.4684 1 9.5 1C10.4878 1 11.415 1.31569 12.164 1.77C12.704 2.09756 13.1896 2.52079 13.5498 3H14.5C16.433 3 18 4.567 18 6.5L18 6.5141C18.0001 6.75054 18.0002 7.37728 17.8828 8H19C19.4967 8 20.0538 8.12581 20.4744 8.56001C20.889 8.98807 21 9.54067 21 10.0169V18C21 18.476 20.8889 19.0312 20.4655 19.4575C20.0409 19.885 19.4838 20 19 20H17V21C17 21.476 16.8889 22.0312 16.4655 22.4575C16.0409 22.885 15.4838 23 15 23H6C5.5162 23 4.95915 22.885 4.53447 22.4575C4.11106 22.0312 4 21.476 4 21V15.8293C2.83481 15.4175 2 14.3062 2 13V7C2 5.34315 3.34315 4 5 4H5.15163ZM6 15.8293V21H15V10H8V13C8 14.3062 7.16519 15.4175 6 15.8293ZM17 10V18H19V10.0169C19 10.0111 19 10.0055 18.9999 10H17ZM15.8152 8C15.8407 7.938 15.8707 7.84688 15.8988 7.72057C15.9969 7.27897 16 6.75702 16 6.5C16 5.67157 15.3284 5 14.5 5H12.382L12.1056 4.44721C11.9585 4.15301 11.6234 3.78127 11.1267 3.48C10.6392 3.18431 10.0664 3 9.5 3C7.9733 3 7 4.15378 7 5V6H5C4.44772 6 4 6.44772 4 7V13C4 13.5523 4.44772 14 5 14C5.55228 14 6 13.5523 6 13V8H15.8152Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
