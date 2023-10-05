import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-statue-of-jesus')
export default class StatueOfJesus extends WeElement<IconProps> {
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
          d="M10 1H14V5H10V1ZM2 6H22V8.6594L15 11.6594V17H15.7808L17.2808 23H6.71922L8.21922 17H9V11.6594L2 8.6594V6ZM9 9.48346V8H5.53859L9 9.48346ZM11 8V10.5858L13 12.5858V8H11ZM15 8V9.48346L18.4614 8H15ZM13 15.4142L11 13.4142V17H13V15.4142ZM14.2192 19H9.78078L9.28078 21H14.7192L14.2192 19Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
