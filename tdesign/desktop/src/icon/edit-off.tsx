import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-edit-off')
export default class EditOff extends WeElement<IconProps> {
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
          d="M15.7481 2.94736C16.5292 2.16631 17.7955 2.16631 18.5766 2.94736L21.0514 5.42223C21.8325 6.20328 21.8325 7.46961 21.0514 8.25066L18.7015 10.6006L16.4986 12.8034L15.0844 11.3891L16.5802 9.89346L14.1053 7.41859L12.6095 8.91431L11.1953 7.50005L13.3982 5.29729L15.7481 2.94736ZM15.5195 6.00439L17.9944 8.47927L19.6372 6.83645L17.1623 4.36157L15.5195 6.00439ZM4.00015 2.58588L21.4144 20.0001L20.0002 21.4143L13.9438 15.3579L9.15796 20.1437L2.77822 21.2202L3.85466 14.8404L8.64047 10.0546L2.58594 4.00009L4.00015 2.58588ZM10.0547 11.4688L5.72052 15.803L5.21818 18.7802L8.19539 18.2779L12.5296 13.9437L10.0547 11.4688Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
