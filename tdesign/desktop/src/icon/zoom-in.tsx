import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-zoom-in')
export default class ZoomIn extends WeElement<IconProps> {
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
          d="M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959ZM11.5 6.5L11.5 9.5H14.5V11.5H11.5V14.5H9.5V11.5H6.5V9.5H9.5L9.5 6.5L11.5 6.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
