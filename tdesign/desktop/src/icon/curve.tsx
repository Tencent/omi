import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-curve')
export default class Curve extends WeElement<IconProps> {
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
          d="M4.32799 7.43769C3.5036 8.99443 3 10.7687 3 11.7576V12.7576H1V11.7576C1 10.3222 1.65181 8.21769 2.56052 6.50171C3.02178 5.63069 3.58262 4.79463 4.21995 4.16167C4.83934 3.54654 5.65775 3 6.62162 3C7.5601 3 8.35682 3.48963 8.97581 4.07853C9.60292 4.67516 10.1503 5.46824 10.611 6.30601C11.5327 7.98192 12.2098 10.026 12.4848 11.5837L12.4871 11.597L12.4891 11.6103C12.6624 12.7739 13.293 14.7276 14.1631 16.3833C14.5968 17.2085 15.0627 17.9067 15.52 18.3838C15.9997 18.8844 16.331 19 16.5 19C16.686 19 17.0129 18.8851 17.4609 18.4242C17.8934 17.9793 18.3288 17.3207 18.7195 16.5277C19.5077 14.9282 20 13.0197 20 11.7576V10.7576H22V11.7576C22 13.4045 21.3978 15.6172 20.5136 17.4117C20.0681 18.3157 19.523 19.1722 18.8951 19.8182C18.2827 20.4482 17.4694 21 16.5 21C15.5136 21 14.6903 20.4086 14.0761 19.7677C13.4394 19.1034 12.872 18.2258 12.3927 17.3137C11.4399 15.5007 10.7275 13.3414 10.513 11.919C10.273 10.5689 9.66756 8.74085 8.85855 7.26975C8.45271 6.53176 8.02123 5.9309 7.59725 5.52753C7.16514 5.11643 6.83855 5 6.62162 5C6.43009 5 6.09309 5.12013 5.62929 5.58075C5.18343 6.02355 4.73329 6.67234 4.32799 7.43769ZM4 11H9V13H4V11ZM14 11H19V13H14V11Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
