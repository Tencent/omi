import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-lighthouse-1')
export default class Lighthouse1 extends WeElement<IconProps> {
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
          d="M11.9996 0.922852L18.2994 3.4428L17.5566 5.29975L16.9996 5.07692V9.99988H18.9996V11.9999H17.093C17.257 13.9053 17.6137 15.9379 17.9781 17.6689C18.2246 18.8396 18.4712 19.8568 18.656 20.5806C18.7483 20.9424 18.8251 21.2303 18.8786 21.427C18.9053 21.5253 18.9262 21.6008 18.9403 21.6513L18.9562 21.7078L18.96 21.7215L18.9609 21.7246L19.3253 22.9999H13.2188L12.2188 18.9999H11.7803L10.7803 22.9999H4.67383L5.03801 21.7253L5.03908 21.7215L5.04295 21.7078L5.05882 21.6513C5.0729 21.6008 5.09379 21.5253 5.12052 21.427C5.17398 21.2303 5.25078 20.9424 5.34314 20.5806C5.52796 19.8568 5.77454 18.8396 6.02101 17.6689C6.38542 15.9379 6.74214 13.9053 6.90609 11.9999H4.99956V9.99988H6.99956V5.07692L6.44247 5.29975L5.69969 3.4428L11.9996 0.922852ZM8.99956 4.27692V9.99988H14.9996V4.27692L11.9996 3.07692L8.99956 4.27692ZM15.0862 11.9999H8.91288C8.74474 14.0864 8.35738 16.2794 7.97811 18.0809C7.73303 19.245 7.48806 20.2606 7.30021 20.9999H9.21878L10.2188 16.9999H13.7803L14.7803 20.9999H16.6989C16.5111 20.2606 16.2661 19.245 16.021 18.0809C15.6417 16.2794 15.2544 14.0864 15.0862 11.9999ZM10.9996 5.99793H13.0035V8.00184H10.9996V5.99793Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
