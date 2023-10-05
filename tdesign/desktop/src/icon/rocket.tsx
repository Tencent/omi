import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-rocket')
export default class Rocket extends WeElement<IconProps> {
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
          d="M19.5566 3.09961H20.8997V4.44275C20.8997 6.29927 20.1622 8.07975 18.8495 9.3925L11.2931 16.9489L7.05048 12.7062L14.6068 5.14986C15.9196 3.83711 17.7001 3.09961 19.5566 3.09961ZM18.0029 13.0675L20.2637 10.8067C21.9515 9.11889 22.8997 6.8297 22.8997 4.44275V1.09961H19.5566C17.1696 1.09961 14.8804 2.04782 13.1926 3.73565L10.9319 5.99642L5.275 5.28931L1.04008 9.52423L14.4751 22.9593L18.71 18.7243L18.0029 13.0675ZM16.2113 14.8591L16.6041 18.0018L14.4751 20.1308L12.7073 18.3631L16.2113 14.8591ZM9.14024 7.78803L5.63627 11.292L3.8685 9.52423L5.99754 7.39519L9.14024 7.78803ZM5.63627 16.9489L2.10074 20.4844L0.686523 19.0702L4.22206 15.5346L5.63627 16.9489ZM8.4647 19.7773L4.92916 23.3128L3.51495 21.8986L7.05048 18.3631L8.4647 19.7773Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
