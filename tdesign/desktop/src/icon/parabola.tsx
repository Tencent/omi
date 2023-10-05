import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-parabola')
export default class Parabola extends WeElement<IconProps> {
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
        <path
          d="M8.08334 7.9121C7.85427 8.35239 7.61319 8.81575 7.4 9.1C6.50999 10.2867 5.79455 11.2184 5.17733 11.8493C4.58278 12.4571 3.881 13 3 13H2V11H3C3.019 11 3.21722 10.9929 3.74767 10.4507C4.25545 9.93164 4.89001 9.11332 5.8 7.9C5.90591 7.75879 6.05183 7.47986 6.2951 7.01487C6.33759 6.93365 6.38305 6.84675 6.43179 6.75392C6.73013 6.18564 7.10948 5.48452 7.57692 4.80707C8.4796 3.49884 9.90309 2 12 2C14.0969 2 15.5204 3.49884 16.4231 4.80707C16.8905 5.48452 17.2699 6.18564 17.5682 6.75392C17.6169 6.84675 17.6624 6.93364 17.7049 7.01486C17.9482 7.47986 18.0941 7.75879 18.2 7.9C19.11 9.11332 19.7445 9.93163 20.2523 10.4507C20.7828 10.9929 20.981 11 21 11H22V13H21C20.119 13 19.4172 12.4571 18.8227 11.8493C18.2055 11.2184 17.49 10.2867 16.6 9.1C16.3868 8.81575 16.1457 8.3524 15.9167 7.91211C15.8765 7.83486 15.8367 7.75832 15.7974 7.68358C15.5051 7.12686 15.172 6.51548 14.7769 5.94293C13.9546 4.75116 13.0531 4 12 4C10.9469 4 10.0454 4.75116 9.22308 5.94293C8.82802 6.51548 8.49487 7.12686 8.20259 7.68358C8.16335 7.75832 8.12353 7.83485 8.08334 7.9121ZM4 16V18H11V16H13V18H20V16H22V21H20V20H13V21H11V20H4V21H2V16H4Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
