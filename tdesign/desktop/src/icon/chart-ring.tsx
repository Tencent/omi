import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chart-ring')
export default class ChartRing extends WeElement<IconProps> {
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
          d="M11 3.05493C6.50005 3.55237 3 7.36745 3 12C3 16.9706 7.02944 21 12 21C14.1312 21 16.0894 20.2592 17.6312 19.0211L15.508 16.8684C14.5217 17.5802 13.3094 18.0004 12 18.0004C8.68629 18.0004 6 15.3141 6 12.0004C6 9.02741 8.16229 6.55944 11 6.08336V3.05493ZM13 3.05493V6.08336C15.5125 6.50488 17.4955 8.4879 17.917 11.0004H20.9451C20.4841 6.8286 17.1718 3.51609 13 3.05493ZM20.945 13.0004H17.9169C17.7661 13.8986 17.4156 14.7294 16.9132 15.445L19.0427 17.6041C20.0723 16.3119 20.7537 14.73 20.945 13.0004ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 8.0004C9.79086 8.0004 8 9.79127 8 12.0004C8 14.2095 9.79086 16.0004 12 16.0004C13.1177 16.0004 14.1268 15.5433 14.8537 14.8034C15.5637 14.0806 16 13.0924 16 12.0004C16 9.79127 14.2091 8.0004 12 8.0004Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
