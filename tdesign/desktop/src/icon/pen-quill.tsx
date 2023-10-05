import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-pen-quill')
export default class PenQuill extends WeElement<IconProps> {
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
          d="M23.3017 8.11756L12.1627 19.2122L6.74577 18.5154L3.07339 22.1878L1.65918 20.7736L5.32789 17.1049L4.58597 11.6948L15.6717 0.563965L17.4885 6.35116L23.3017 8.11756ZM15.557 6.87582L14.7544 4.31924L6.70199 12.4044L7.10315 15.3296L15.557 6.87582ZM8.53242 16.7288L11.4457 17.1035L19.522 9.05936L16.9756 8.2856L8.53242 16.7288Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
