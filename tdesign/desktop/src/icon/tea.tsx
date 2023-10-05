import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-tea')
export default class Tea extends WeElement<IconProps> {
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
        <g id="&amp;#232;&amp;#140;&amp;#182;_tea">
          <path
            id="Union"
            d="M11.0004 2V7H9.00041V2H11.0004ZM7.00041 3V7H5.00041V3H7.00041ZM15.0004 3V7H13.0004V3H15.0004ZM2.92676 8H21.0004V13C21.0004 15.2091 19.2095 17 17.0004 17H16.0669C15.5284 18.2443 14.6199 19.2901 13.4843 20H20.0004V22H3.00041V20H6.50591C4.79741 18.9327 3.60555 17.1027 3.422 14.9613L3.42138 14.9541L2.92676 8ZM16.5754 15H17.0004C18.105 15 19.0004 14.1046 19.0004 13V10H16.9318L16.5794 14.9541L16.5788 14.9613C16.5777 14.9742 16.5766 14.9871 16.5754 15ZM14.9268 10H5.07406L5.41529 14.7974C5.6226 17.1749 7.61317 19 10.0004 19C12.0585 19 13.8359 17.6205 14.4124 15.711C14.5014 15.4162 14.5571 15.1245 14.5855 14.7975L14.9268 10Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
