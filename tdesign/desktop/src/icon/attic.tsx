import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-attic')
export default class Attic extends WeElement<IconProps> {
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
          d="M12.8103 1.41397L12 0.293457L11.1897 1.41397L11.1875 1.41699L11.1794 1.42813L11.1459 1.47409C11.1159 1.51495 11.0711 1.57582 11.0127 1.65426C10.896 1.81119 10.7252 2.03822 10.5112 2.31587C10.0827 2.87179 9.48318 3.6275 8.79848 4.42821C8.11236 5.23058 7.34918 6.06811 6.593 6.79209C5.82578 7.52664 5.11271 8.09841 4.52647 8.41358C4.14202 8.62027 3.80306 8.77335 3.52403 8.87251C3.23056 8.97681 3.06241 9.00003 3 9.00003L2 9.00003L2 11L3 11C3.32751 11 3.67146 10.9261 4 10.8222L4 20L2 20L2 22L22 22L22 20L20 20L20 10.8222C20.3285 10.9261 20.6725 11 21 11L22 11L22 9.00003L21 9.00003C20.9376 9.00003 20.7694 8.97681 20.476 8.87251C20.1969 8.77335 19.858 8.62027 19.4735 8.41358C18.8873 8.0984 18.1742 7.52664 17.407 6.79209C16.6508 6.06811 15.8876 5.23058 15.2015 4.42821C14.5168 3.6275 13.9173 2.87179 13.4888 2.31587C13.2748 2.03822 13.1041 1.81119 12.9873 1.65426C12.9289 1.57582 12.8841 1.51495 12.8541 1.47409L12.8206 1.42813L12.8125 1.41699L12.8103 1.41397ZM16.8666 9.00003L7.13343 9.00003C7.41837 8.75785 7.70058 8.50053 7.97612 8.23673C8.79706 7.45075 9.60746 6.55955 10.3185 5.72802C10.9813 4.95292 11.5652 4.22096 12 3.66003C12.4348 4.22096 13.0187 4.95292 13.6815 5.72802C14.3925 6.55954 15.2029 7.45075 16.0239 8.23673C16.2994 8.50053 16.5816 8.75785 16.8666 9.00003ZM6 11L18 11L18 20L15 20L15 17C15 15.3432 13.6569 14 12 14C10.3431 14 9 15.3432 9 17L9 20L6 20L6 11ZM11 20L11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17L13 20L11 20Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
