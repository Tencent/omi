import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-pen')
export default class Pen extends WeElement<IconProps> {
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
          d="M16.362 2.59529L14.6907 5.64567C13.6459 7.5525 11.9462 9.01665 9.90565 9.76748L6.07717 11.1762L5.33977 17.2428L11.0011 11.5815L12.4153 12.9957L6.75419 18.6568L12.8183 17.9194L14.2359 14.0354C14.9703 12.0233 16.3982 10.3391 18.263 9.28548L21.315 7.56102L22.2989 9.30229L19.2469 11.0267C17.7965 11.8463 16.6859 13.1562 16.1147 14.7211L14.2767 19.7567L2.85059 21.1463L4.23928 9.72135L9.21501 7.89051C10.8021 7.30653 12.1241 6.16775 12.9367 4.68466L14.608 1.63428L16.362 2.59529Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
