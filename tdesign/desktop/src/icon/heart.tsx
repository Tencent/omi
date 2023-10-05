import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-heart')
export default class Heart extends WeElement<IconProps> {
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
          d="M12.0012 3.81816C14.4475 1.66879 18.1762 1.7618 20.5115 4.09718C22.9438 6.52943 22.9438 10.4729 20.5115 12.9051L15.2865 18.1302L15.2858 18.1295L11.9999 21.4153L4.72056 14.136L3.4891 12.9036C3.48901 12.9035 3.48918 12.9037 3.4891 12.9036C1.0571 10.4714 1.05693 6.52784 3.4891 4.09567C5.82503 1.75974 9.55485 1.66724 12.0012 3.81816ZM15.2856 15.3027L19.0973 11.4909C20.7485 9.83973 20.7485 7.1626 19.0973 5.5114C17.4461 3.86019 14.769 3.86019 13.1178 5.51139L12.0001 6.62714L10.8828 5.50989C9.23165 3.85868 6.55452 3.85868 4.90331 5.50989C3.25211 7.16109 3.25211 9.83822 4.90331 11.4894L6.13477 12.7218L11.9999 18.5869L15.2848 15.3019L15.2856 15.3027Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
