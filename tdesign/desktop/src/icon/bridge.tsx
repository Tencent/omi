import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bridge')
export default class Bridge extends WeElement<IconProps> {
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
          d="M4 2V5.41321C4.11378 5.47028 4.24916 5.53494 4.40614 5.60471C5.01608 5.87579 5.95284 6.22438 7.21693 6.50529C8.48078 6.78615 10.0747 7 12 7C13.9253 7 15.5192 6.78615 16.7831 6.50529C18.0472 6.22438 18.9839 5.87579 19.5939 5.60471C19.7508 5.53494 19.8862 5.47028 20 5.41321V2H22V14.9997L23 15.0004V17.0004H22V22.0004H20V17.0004H4V22.0004H2V17.0004H1V15.0004H2V2H4ZM4 15.0004H6V8.26694C5.19789 8.05387 4.53118 7.82047 4 7.60483V15.0004ZM8 8.69063V15.0004H11V8.98182C9.8934 8.94122 8.89333 8.83525 8 8.69063ZM13 8.98182V15.0004H16V8.69063C15.1067 8.83525 14.1066 8.94122 13 8.98182ZM18 8.26694V15.0004H20L20 7.60483C19.4688 7.82047 18.8021 8.05387 18 8.26694ZM20.446 5.16743C20.4484 5.16587 20.4496 5.16511 20.4495 5.16519L20.4483 5.16593L20.4471 5.16678L20.446 5.16743Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
