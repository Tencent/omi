import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-support')
export default class Support extends WeElement<IconProps> {
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
          d="M6.38199 4.96777L9.2423 7.82808C10.9088 6.72397 13.0912 6.72397 14.7577 7.82808L17.618 4.96777C14.3422 2.34408 9.65784 2.34408 6.38199 4.96777ZM19.0322 6.38199L16.1719 9.2423C17.276 10.9088 17.276 13.0912 16.1719 14.7577L19.0322 17.618C21.6559 14.3422 21.6559 9.65785 19.0322 6.38199ZM17.618 19.0322L14.7577 16.1719C13.0912 17.276 10.9088 17.276 9.2423 16.1719L6.38199 19.0322C9.65785 21.6559 14.3422 21.6559 17.618 19.0322ZM4.96777 17.618L7.82808 14.7577C6.72397 13.0912 6.72397 10.9088 7.82808 9.2423L4.96777 6.38199C2.34408 9.65785 2.34408 14.3422 4.96777 17.618ZM4.22182 4.22182C8.51759 -0.0739419 15.4824 -0.0739412 19.7782 4.22182C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782C-0.0739405 15.4824 -0.0739429 8.51759 4.22182 4.22182ZM14.1213 9.87868C12.9497 8.70711 11.0503 8.70711 9.87868 9.87868C8.70711 11.0503 8.70711 12.9497 9.87868 14.1213C11.0503 15.2929 12.9497 15.2929 14.1213 14.1213C15.2929 12.9497 15.2929 11.0503 14.1213 9.87868Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
