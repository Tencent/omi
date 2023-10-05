import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-city-9')
export default class City9 extends WeElement<IconProps> {
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
          d="M8.00905 1.82764L11.9984 4.32008L15.9878 1.82764L22.3718 5.65694L21.343 7.37206L20.9999 7.16622V22.0001H2.99694V7.16622L2.65377 7.37206L1.625 5.65694L8.00905 1.82764ZM4.99694 5.96657V20.0001H6.99987V15.0001H8.99987V20.0001H10.9969V6.05264L7.98777 4.1726L4.99694 5.96657ZM12.9999 20.0001H14.9999V15.0001H16.9999V20.0001H18.9999V5.96657L16.009 4.1726L12.9999 6.05264V20.0001ZM6.99987 8.99816H9.00378V11.0021H6.99987V8.99816ZM14.9999 8.99816H17.0038V11.0021H14.9999V8.99816Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
