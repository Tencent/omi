import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-folder-blocked')
export default class FolderBlocked extends WeElement<IconProps> {
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
          d="M1 2.5H9.48063L11.4806 5H23V10H21V7H10.5194L8.51937 4.5H3V19H11.5V21H1V2.5ZM18.5 13.5C16.567 13.5 15 15.067 15 17C15 17.6031 15.152 18.17 15.4205 18.6652L20.1654 13.9206C19.6701 13.6521 19.1032 13.5 18.5 13.5ZM21.5795 15.3348L16.8346 20.0794C17.3299 20.3479 17.8968 20.5 18.5 20.5C20.433 20.5 22 18.933 22 17C22 16.3969 21.848 15.83 21.5795 15.3348ZM13 17C13 13.9624 15.4624 11.5 18.5 11.5C20.0186 11.5 21.395 12.1168 22.3892 13.111C23.3833 14.1052 24 15.4816 24 17C24 20.0376 21.5376 22.5 18.5 22.5C16.9814 22.5 15.605 21.8832 14.6108 20.889C13.6167 19.8948 13 18.5184 13 17Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
