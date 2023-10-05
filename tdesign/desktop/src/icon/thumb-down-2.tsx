import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-thumb-down-2')
export default class ThumbDown2 extends WeElement<IconProps> {
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
          d="M13.4456 22.2358L11.7304 21.6641C10.2196 21.1605 9.20048 19.7465 9.20048 18.154V15.7H5.3317C3.49304 15.7 2.087 14.0611 2.36658 12.2438L3.5512 4.54383C3.77635 3.08034 5.0356 2 6.51631 2H22.0005V13.9H17.1503L13.4456 22.2358ZM17.5005 11.9H20.0005V4H17.5005V11.9ZM15.5005 4H6.51631C6.02274 4 5.60299 4.36011 5.52794 4.84794L4.34333 12.5479C4.25013 13.1537 4.71881 13.7 5.3317 13.7H11.2005V18.154C11.2005 18.883 11.6653 19.5306 12.3554 19.7642L15.5005 12.6878V4Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
