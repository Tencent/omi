import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-anchor')
export default class Anchor extends WeElement<IconProps> {
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
          d="M11.9997 3C10.8951 3 9.99966 3.89543 9.99966 5C9.99966 6.10457 10.8951 7 11.9997 7C13.1042 7 13.9997 6.10457 13.9997 5C13.9997 3.89543 13.1042 3 11.9997 3ZM7.99966 5C7.99966 2.79086 9.79052 1 11.9997 1C14.2088 1 15.9997 2.79086 15.9997 5C15.9997 6.86384 14.7249 8.42994 12.9997 8.87398V10.5H17.4997V12.5H12.9997V20.958C16.1328 20.6907 18.6429 19.1616 19.8022 16.73L18.5723 15.5L22.6199 11.4523L22.4851 14.0518C22.1902 19.7402 17.4549 23 11.9994 23C6.54397 23 1.80866 19.7402 1.5137 14.0518L1.37891 11.4523L5.42657 15.5L4.19662 16.73C5.35598 19.1617 7.8662 20.6908 10.9994 20.958V19L10.9997 12.5H6.49966V10.5H10.9997V8.87398C9.27443 8.42994 7.99966 6.86384 7.99966 5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
