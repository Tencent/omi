import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bifurcate')
export default class Bifurcate extends WeElement<IconProps> {
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
          d="M6 4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6C6.55228 6 7 5.55228 7 5C7 4.44772 6.55228 4 6 4ZM3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5C9 6.27392 8.20597 7.36238 7.08583 7.79747C7.21385 8.46406 7.49775 9.30312 8.02047 10.0533C8.75183 11.1029 9.9579 12 12 12C14.0421 12 15.2482 11.1029 15.9795 10.0533C16.5022 9.30312 16.7861 8.46406 16.9142 7.79747C15.794 7.36238 15 6.27392 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5C21 6.33123 20.1329 7.45994 18.9327 7.85218C18.7891 8.83056 18.4001 10.0778 17.6205 11.1967C16.6869 12.5365 15.1998 13.6748 13 13.9412V16.1707C14.1652 16.5825 15 17.6938 15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 17.6938 9.83481 16.5825 11 16.1707V13.9412C8.80022 13.6748 7.31311 12.5365 6.37953 11.1967C5.59991 10.0778 5.21091 8.83056 5.06728 7.85218C3.86708 7.45994 3 6.33123 3 5ZM18 4C17.4477 4 17 4.44772 17 5C17 5.55228 17.4477 6 18 6C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4ZM12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
