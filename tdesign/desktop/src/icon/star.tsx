import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-star')
export default class Star extends WeElement<IconProps> {
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
          d="M12.0003 0.630371L14.9029 8.98093L23.7417 9.16105L16.6969 14.5021L19.2569 22.964L12.0003 17.9144L4.74363 22.964L7.30367 14.5021L0.258789 9.16105L9.09761 8.98093L12.0003 0.630371ZM12.0003 6.72181L10.5298 10.9522L6.05209 11.0434L9.62099 13.7492L8.32409 18.0359L12.0003 15.4778L15.6764 18.0359L14.3795 13.7492L17.9484 11.0434L13.4707 10.9522L12.0003 6.72181Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
