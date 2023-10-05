import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-close-octagon')
export default class CloseOctagon extends WeElement<IconProps> {
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
          d="M16.3492 1.49963L22.5 7.65039V16.3489L16.3492 22.4996H7.65076L1.5 16.3489L1.5 7.65039L7.65076 1.49963L16.3492 1.49963ZM15.5208 3.49963L8.47918 3.49963L3.5 8.47882L3.5 15.5204L8.47918 20.4996H15.5208L20.5 15.5204L20.5 8.47882L15.5208 3.49963ZM16.5959 8.81799L13.4142 11.9996L16.5959 15.1813L15.1816 16.5955L12 13.4138L8.81768 16.5962L7.40347 15.182L10.5858 11.9996L7.40347 8.81731L8.81768 7.4031L12 10.5854L15.1816 7.40378L16.5959 8.81799Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
