import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-sandwich')
export default class Sandwich extends WeElement<IconProps> {
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
        <g id="&amp;#228;&amp;#184;&amp;#137;&amp;#230;&amp;#152;&amp;#142;&amp;#230;&amp;#178;&amp;#187;_sandwich">
          <path
            id="Union"
            d="M13.8 2.51531C14.6382 2.05807 15.6828 2.25718 16.2941 2.99074L21 8.63779V21.9998H3V8.40621L13.8 2.51531ZM5 9.99984V13.9998H19V9.99984H5ZM17.865 7.99984L14.7577 4.27111L7.92166 7.99984H17.865ZM19 15.9998H5V19.9998H19V15.9998Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
