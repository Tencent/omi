import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-numbers-9-1')
export default class Numbers91 extends WeElement<IconProps> {
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
          d="M11.5822 20.5H9.27323L12.7458 14.4478C12.5032 14.4822 12.2551 14.5 12.0029 14.5C9.10343 14.5 6.75293 12.1495 6.75293 9.25C6.75293 6.3505 9.10344 4 12.0029 4C14.9024 4 17.2529 6.35051 17.2529 9.25C17.2529 10.0188 17.087 10.7516 16.7882 11.4122C16.6567 11.7028 16.4994 11.9794 16.3193 12.239L11.5822 20.5ZM14.9842 10.5468C15.1568 10.1508 15.2529 9.71288 15.2529 9.25C15.2529 7.45507 13.7979 6 12.0029 6C10.208 6 8.75293 7.45507 8.75293 9.25C8.75293 11.0449 10.208 12.5 12.0029 12.5C13.0812 12.5 14.0382 11.9749 14.63 11.1641L14.9842 10.5468Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
