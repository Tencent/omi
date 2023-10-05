import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-milk')
export default class Milk extends WeElement<IconProps> {
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
        <g id="&amp;#231;&amp;#137;&amp;#155;&amp;#229;&amp;#165;&amp;#182;_milk">
          <path
            id="Union"
            d="M17.85 1H6.15V4.59026L4 9.49026V23H20V9.49026L17.85 4.59026V1ZM16.9322 7.47622L18 9.90974V21H16.05V9.87786L16.9322 7.47622ZM14.05 10.7V21H6V10.7H14.05ZM6.5308 8.7L7.80325 5.8H15.4173L14.352 8.7H6.5308ZM8.15 3.8V3H15.85V3.8H8.15ZM13 13H11.5743L9.9984 14.5838L8.41536 13H7V19H9V16.4141L10.0016 17.4162L11 16.4127V19H13V13Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
