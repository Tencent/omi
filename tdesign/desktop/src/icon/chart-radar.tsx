import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chart-radar')
export default class ChartRadar extends WeElement<IconProps> {
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
          d="M12 0.763916L23.1856 8.89071L18.9131 22.0401H5.08696L0.814453 8.89071L12 0.763916ZM3.54756 10.8302L6.15808 18.8646L10.382 13.0509L3.54756 10.8302ZM7.77611 20.0401H16.2239L12 14.2264L7.77611 20.0401ZM13.6181 13.0509L17.842 18.8646L20.4525 10.8302L13.6181 13.0509ZM19.8345 8.9281L13 3.96259V11.1487L19.8345 8.9281ZM11 3.96259L4.16559 8.9281L11 11.1487V3.96259Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
