import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-backup')
export default class Backup extends WeElement<IconProps> {
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
          d="M12 4C9.0798 4 6.69051 6.27638 6.51088 9.15072L6.46201 9.93262L5.69115 10.0723C3.59195 10.4528 2 12.2915 2 14.5C2 16.9853 4.01472 19 6.5 19H17.5C19.9853 19 22 16.9853 22 14.5C22 12.2915 20.408 10.4528 18.3089 10.0723L17.538 9.93262L17.4891 9.15072C17.3095 6.27638 14.9202 4 12 4ZM4.59837 8.28287C5.1802 4.71919 8.27221 2 12 2C15.7278 2 18.8198 4.71919 19.4016 8.28287C22.0637 9.09632 24 11.5712 24 14.5C24 18.0899 21.0898 21 17.5 21H6.5C2.91015 21 0 18.0899 0 14.5C0 11.5712 1.93625 9.09632 4.59837 8.28287ZM12 7.08579L16.4142 11.5L15 12.9142L13 10.9142L13 17H11L11 10.9142L9 12.9142L7.58579 11.5L12 7.08579Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
