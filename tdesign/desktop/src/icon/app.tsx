import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-app')
export default class App extends WeElement<IconProps> {
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
          d="M2 2H11V11H2V2ZM4 4V9H9V4H4ZM17.5 4C16.1193 4 15 5.11929 15 6.5C15 7.88071 16.1193 9 17.5 9C18.8807 9 20 7.88071 20 6.5C20 5.11929 18.8807 4 17.5 4ZM13 6.5C13 4.01472 15.0147 2 17.5 2C19.9853 2 22 4.01472 22 6.5C22 8.98528 19.9853 11 17.5 11C15.0147 11 13 8.98528 13 6.5ZM2 13H11V22H2V13ZM4 15V20H9V15H4ZM13 13H22V22H13V13ZM15 15V20H20V15H15Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
