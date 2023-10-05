import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bug-report')
export default class BugReport extends WeElement<IconProps> {
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
          d="M7.12804 1.59155L9.49299 4.4295C10.2778 4.15121 11.122 3.99996 12 3.99996C12.878 3.99996 13.7222 4.15121 14.507 4.4295L16.872 1.59155L18.4084 2.87192L16.325 5.37205C17.5801 6.25948 18.5512 7.52339 19.0732 8.99996H22V11H19.4836C19.4945 11.1652 19.5 11.3319 19.5 11.5V16.5C19.5 16.668 19.4945 16.8347 19.4836 17H22V19H19.0732C18.0436 21.9129 15.2655 24 12 24C8.73445 24 5.95636 21.9129 4.92676 19H2V17H4.5164C4.50552 16.8347 4.5 16.668 4.5 16.5V11.5C4.5 11.3319 4.50553 11.1652 4.5164 11H2V8.99996H4.92681C5.44878 7.52339 6.41991 6.25948 7.67503 5.37205L5.59159 2.87192L7.12804 1.59155ZM12 5.99996C11.1484 5.99996 10.3446 6.19283 9.62743 6.53634C7.77552 7.42343 6.5 9.31372 6.5 11.5V16.5C6.5 19.5375 8.96243 22 12 22C15.0376 22 17.5 19.5375 17.5 16.5V11.5C17.5 9.31372 16.2245 7.42343 14.3726 6.53634C13.6554 6.19283 12.8516 5.99996 12 5.99996ZM9 9.99996H15V12H9V9.99996ZM9 16H15V18H9V16Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
