import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-liquor')
export default class Liquor extends WeElement<IconProps> {
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
        <g id="&amp;#233;&amp;#133;&amp;#146;_liquor">
          <path
            id="Union"
            d="M19.4999 1.08594L22.9141 4.50015L17.9999 9.41436L17.9999 13.4144L9.41407 22.0001C8.63303 22.7812 7.3667 22.7812 6.58565 22.0001L1.99985 17.4144C1.2188 16.6333 1.2188 15.367 1.99985 14.5859L10.5857 6.00014L14.5857 6.00015L19.4999 1.08594ZM4.99988 14.4143L3.41406 16.0001L7.99986 20.5859L9.58566 19.0001L4.99988 14.4143ZM14.9999 13.5859L15.9999 12.5859L15.9999 8.58594L20.0857 4.50015L19.4999 3.91437L15.4141 8.00015L11.4141 8.00014L10.4141 9.00014L14.9999 13.5859L13.5857 15.0001L8.99988 10.4144L6.41411 13.0001L10.9999 17.5859M8.99792 12.9982H11.0018V15.0021H8.99792V12.9982Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
