import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-image-search')
export default class ImageSearch extends WeElement<IconProps> {
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
          d="M2 2H22V11H20V4H4V13.5858L9 8.58579L12.9142 12.5L11.5 13.9142L9 11.4142L4 16.4142V20H11V22H2V2ZM15.5469 7C14.9946 7 14.5469 7.44772 14.5469 8C14.5469 8.55228 14.9946 9 15.5469 9C16.0992 9 16.5469 8.55228 16.5469 8C16.5469 7.44772 16.0992 7 15.5469 7ZM12.5469 8C12.5469 6.34315 13.89 5 15.5469 5C17.2037 5 18.5469 6.34315 18.5469 8C18.5469 9.65685 17.2037 11 15.5469 11C13.89 11 12.5469 9.65685 12.5469 8ZM17.6538 14.5C15.912 14.5 14.5 15.912 14.5 17.6538C14.5 19.3957 15.912 20.8077 17.6538 20.8077C18.5256 20.8077 19.3131 20.4554 19.885 19.8829C20.4562 19.3112 20.8077 18.5245 20.8077 17.6538C20.8077 15.912 19.3957 14.5 17.6538 14.5ZM12.5 17.6538C12.5 14.8075 14.8075 12.5 17.6538 12.5C20.5002 12.5 22.8077 14.8075 22.8077 17.6538C22.8077 18.7146 22.4865 19.7014 21.937 20.521L23.9142 22.501L22.499 23.9142L20.5232 21.9356C19.7032 22.4859 18.7156 22.8077 17.6538 22.8077C14.8075 22.8077 12.5 20.5002 12.5 17.6538Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
