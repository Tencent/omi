import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-system-3')
export default class System3 extends WeElement<IconProps> {
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
          d="M2 2H7.07713C9.24103 2 11 3.75897 11 5.92277V11H5.92287C3.75893 11 2 9.24099 2 7.07705V2ZM4 4V7.07705C4 8.13647 4.86355 9 5.92287 9H9V5.92277C9 4.86357 8.13649 4 7.07713 4H4ZM16.9229 4C15.8635 4 15 4.86357 15 5.92277V9H18.0771C19.1365 9 20 8.13647 20 7.07705V4H16.9229ZM13 5.92277C13 3.75897 14.759 2 16.9229 2H22V7.07705C22 9.24099 20.2411 11 18.0771 11H13V5.92277ZM5.92287 15C4.86355 15 4 15.8635 4 16.9229V20H7.07713C8.13649 20 9 19.1364 9 18.0772V15H5.92287ZM2 16.9229C2 14.759 3.75893 13 5.92287 13H11V18.0772C11 20.241 9.24103 22 7.07713 22H2V16.9229ZM13 13H18.0771C20.2411 13 22 14.759 22 16.9229V22H16.9229C14.759 22 13 20.241 13 18.0772V13ZM15 15V18.0772C15 19.1364 15.8635 20 16.9229 20H20V16.9229C20 15.8635 19.1365 15 18.0771 15H15Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
