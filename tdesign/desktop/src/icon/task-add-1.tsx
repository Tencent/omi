import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-task-add-1')
export default class TaskAdd1 extends WeElement<IconProps> {
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
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H13V23H12C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C13.4978 1 14.9281 1.29991 16.2322 1.8439L17.1551 2.2289L16.3851 4.07474L15.4622 3.68974C14.3977 3.24571 13.2288 3 12 3ZM23.4142 4.5L12 15.9142L6.08579 10L7.5 8.58579L12 13.0858L22 3.08579L23.4142 4.5ZM20 15V18H23V20H20V23H18V20H15V18H18V15H20Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
