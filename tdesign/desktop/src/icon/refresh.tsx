import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-refresh')
export default class Refresh extends WeElement<IconProps> {
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
          d="M20.4997 5.83468C18.5918 3.20865 15.4961 1.5 11.9997 1.5C6.57341 1.5 2.10958 5.61542 1.55717 10.896L1.45312 11.8905L3.44227 12.0986L3.54632 11.104C3.9933 6.83125 7.60814 3.5 11.9997 3.5C15.0404 3.5 17.7099 5.09688 19.2125 7.5H15.4997V9.5H22.4997V2.5H20.4997V5.83468ZM20.5572 11.9014L20.4532 12.896C20.0062 17.1687 16.3913 20.5 11.9997 20.5C8.95904 20.5 6.28956 18.9031 4.78702 16.5H8.49974V14.5H1.49974V21.5H3.49974V18.1653C5.40769 20.7914 8.50342 22.5 11.9997 22.5C17.4261 22.5 21.8899 18.3846 22.4423 13.104L22.5464 12.1095L20.5572 11.9014Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
