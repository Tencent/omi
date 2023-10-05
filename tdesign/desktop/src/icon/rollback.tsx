import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-rollback')
export default class Rollback extends WeElement<IconProps> {
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
          d="M20.9293 13.9999C20.444 17.3922 17.5266 19.9999 14.0001 19.9999H5.50015L5.50015 17.9999H14.0002C16.7616 17.9999 19.0001 15.7613 19.0001 12.9999C19.0001 10.2385 16.7616 7.99991 14.0001 7.99991L6.91436 7.99991L9.41436 10.4999L8.00015 11.9141L3.08594 6.99991L8.00015 2.08569L9.41436 3.49991L6.91436 5.99991L14.0001 5.99991C17.8661 5.99991 21.0001 9.13392 21.0001 12.9999V13.9999H20.9293Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
