import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-gesture-expansion')
export default class GestureExpansion extends WeElement<IconProps> {
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
          d="M6 0H11V5H9V3.41421L5.41421 7H7V9H2V4H4V5.58579L7.58579 2H6V0ZM10.2441 7.56574C10.2441 6.04382 11.4779 4.81006 12.9998 4.81006C14.5217 4.81006 15.7555 6.04382 15.7555 7.56573V10.5195H16.9138C17.4021 10.5195 17.8817 10.6492 18.3035 10.8954L21.9282 13.0111C23.0547 13.6687 23.5662 15.0257 23.1539 16.2632L21.3715 21.6138C20.9964 22.7397 19.9428 23.4992 18.7561 23.4992H11.6706C10.8144 23.4992 10.0068 23.1014 9.48499 22.4227L5.18667 16.8314L6.12778 15.4189C6.55806 14.7731 7.34118 14.4583 8.0987 14.6268L10.2441 15.1038V7.56574ZM12.9998 6.81006C12.5825 6.81006 12.2441 7.14839 12.2441 7.56574V17.5974L7.74597 16.5972L7.64537 16.7482L11.0706 21.2037C11.2138 21.39 11.4355 21.4992 11.6706 21.4992H18.7561C19.0818 21.4992 19.3711 21.2908 19.474 20.9817L21.2564 15.6311C21.3696 15.2914 21.2292 14.9189 20.92 14.7384L17.2953 12.6227C17.1795 12.5551 17.0479 12.5195 16.9138 12.5195H13.7555V7.56573C13.7555 7.14839 13.4171 6.81006 12.9998 6.81006Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
