import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-folder-off')
export default class FolderOff extends WeElement<IconProps> {
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
          d="M9.48159 2.5L11.4816 5L14.001 5V7L10.5203 7L8.52034 4.5L3.00106 4.5L3 15.998L3 15.9991L3 16.0013L3.00276 17.4134L1.00324 19.413L1 16.002L1 16.0009L1.00089 2.5H9.48159Z"
          fill="currentColor"
        />
        <path
          d="M21.4142 4L20.4142 5H23V20H5.4142L2.99999 22.4142L1.58577 21L20 2.58579L21.4142 4ZM18.4142 7L7.4142 18H21V7H18.4142Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
