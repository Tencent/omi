import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-city-4')
export default class City4 extends WeElement<IconProps> {
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
          d="M18.5 1.71924L15 4.51924V8.38183L12 6.88183L9 8.38183V4.51924L5.5 1.71924L2 4.51924V21.9999H22V4.51924L18.5 1.71924ZM9 10.6179L12 9.1179L15 10.6179V19.9999H13V15.9999H11V19.9999H9V10.6179ZM7 19.9999H4V5.48049L5.5 4.28049L7 5.48049V19.9999ZM17 19.9999V5.48049L18.5 4.28049L20 5.48049V19.9999H17ZM14 11.9999H10V13.9999H14V11.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
