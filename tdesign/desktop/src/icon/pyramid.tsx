import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-pyramid')
export default class Pyramid extends WeElement<IconProps> {
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
          d="M10.9999 2.96045L15.4395 10.8531L16.4999 8.92514L23.6912 22.0002H0.290039L10.9999 2.96045ZM13.2275 11.0002L10.9999 7.03991L8.77223 11.0002H13.2275ZM7.64723 13.0002L3.70973 20.0002H9.99989V13.0002H7.64723ZM11.9999 13.0002V17.107L14.2586 13.0002H11.9999ZM12.6912 20.0002H15.4999V17.0002H14.3412L12.6912 20.0002ZM17.4999 20.0002H20.3086L18.6586 17.0002H17.4999V20.0002ZM17.5586 15.0002L16.4999 13.0752L15.4412 15.0002H17.5586Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
