import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-filter-clear')
export default class FilterClear extends WeElement<IconProps> {
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
          d="M2.57031 3H21.4302L14.5002 12.8174V21H9.50023V12.8174L2.57031 3ZM6.43015 5L11.5002 12.1826V19H12.5002V12.1826L17.5703 5H6.43015ZM17.8791 13.4647L20.0005 15.586L22.1218 13.4647L23.536 14.8789L21.4147 17.0002L23.536 19.1215L22.1218 20.5358L20.0005 18.4144L17.8791 20.5358L16.4649 19.1215L18.5862 17.0002L16.4649 14.8789L17.8791 13.4647Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
