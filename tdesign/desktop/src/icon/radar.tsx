import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-radar')
export default class Radar extends WeElement<IconProps> {
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
          d="M11 3.05493C6.50005 3.55237 3 7.36745 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 10.02 20.3618 8.19209 19.2797 6.7067L18.6908 5.89845L20.3074 4.72078L20.8962 5.52904C22.2192 7.345 23 9.58278 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1H13V10.2678C13.2429 10.4083 13.4533 10.5982 13.617 10.823C13.8577 11.1533 14 11.5615 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 11.2597 10.4022 10.6134 11 10.2676V7.61151C8.99601 8.06624 7.5 9.85841 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 11.0094 16.1811 10.0962 15.6401 9.35366L15.0513 8.54541L16.6678 7.36774L17.2566 8.176C18.0384 9.24916 18.5 10.5721 18.5 12C18.5 15.5899 15.5899 18.5 12 18.5C8.41015 18.5 5.5 15.5899 5.5 12C5.5 8.75021 7.88491 6.05745 11 5.57645V3.05493Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
