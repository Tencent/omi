import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-city-5')
export default class City5 extends WeElement<IconProps> {
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
          d="M18.5 1.71924L15 4.51924V9.62795C13.3794 11.3538 10.6206 11.3538 9 9.62795V4.51924L5.5 1.71924L2 4.51924V21.9999H22V4.51924L18.5 1.71924ZM9 12.1412C10.8541 13.1827 13.1459 13.1827 15 12.1412V19.9999H13V14.9999H11V19.9999H9V12.1412ZM7 19.9999H4V5.48049L5.5 4.28049L7 5.48049V19.9999ZM17 19.9999V5.48049L18.5 4.28049L20 5.48049V19.9999H17Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
