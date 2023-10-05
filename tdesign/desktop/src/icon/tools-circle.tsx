import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-tools-circle')
export default class ToolsCircle extends WeElement<IconProps> {
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
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12ZM15.6906 19.2252L11.4831 15.0176C9.81625 15.4628 7.96248 15.0326 6.65294 13.723C5.15953 12.2296 4.80973 10.0284 5.59766 8.20379L5.91624 7.46604L7.27084 7.72756L9.11387 9.57058L9.57251 9.11194L7.72984 7.26927L7.46709 5.91504L8.20579 5.59624C10.0302 4.80888 12.2309 5.15883 13.724 6.65197C15.0335 7.96151 15.4637 9.81528 15.0186 11.4821L19.2262 15.6897L15.6906 19.2252ZM16.3977 15.6897L12.6882 11.9802L12.9512 11.3595C13.4147 10.2656 13.1989 8.95533 12.3098 8.06618C11.8016 7.55801 11.1559 7.26981 10.4916 7.20264L12.4009 9.11194L9.11387 12.399L7.2034 10.4885C7.27017 11.1535 7.55845 11.8001 8.06715 12.3088C8.9563 13.198 10.2666 13.4137 11.3605 12.9502L11.9811 12.6873L15.6906 16.3968L16.3977 15.6897Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
