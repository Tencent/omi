import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-file-search')
export default class FileSearch extends WeElement<IconProps> {
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
          d="M3 1H15.4142L21 6.58579V11.5H19V9H13V3H5V21H12.5V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM17.25 14.5C15.7312 14.5 14.5 15.7312 14.5 17.25C14.5 18.7688 15.7312 20 17.25 20C18.7688 20 20 18.7688 20 17.25C20 15.7312 18.7688 14.5 17.25 14.5ZM12.5 17.25C12.5 14.6266 14.6266 12.5 17.25 12.5C19.8734 12.5 22 14.6266 22 17.25C22 18.2002 21.721 19.0852 21.2405 19.8276L22.9142 21.499L21.501 22.9142L19.826 21.2415C19.0839 21.7214 18.1995 22 17.25 22C14.6266 22 12.5 19.8734 12.5 17.25Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
