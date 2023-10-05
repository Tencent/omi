import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-base-station')
export default class BaseStation extends WeElement<IconProps> {
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
          d="M6.34412 3.92959L5.63702 4.6367C2.1223 8.15142 2.1223 13.8499 5.63702 17.3646L6.34412 18.0717L4.92991 19.4859L4.2228 18.7788C-0.0729651 14.4831 -0.0729651 7.51825 4.2228 3.22249L4.92991 2.51538L6.34412 3.92959ZM19.0705 2.51538L19.7776 3.22249C24.0734 7.51825 24.0734 14.4831 19.7776 18.7788L19.0705 19.4859L17.6563 18.0717L18.3634 17.3646C21.8781 13.8499 21.8781 8.15142 18.3634 4.6367L17.6563 3.92959L19.0705 2.51538ZM9.52576 7.11124L8.81866 7.81834C7.0613 9.5757 7.0613 12.4249 8.81866 14.1823L9.52576 14.8894L8.11155 16.3036L7.40444 15.5965C4.86603 13.0581 4.86603 8.94254 7.40444 6.40413L8.11155 5.69702L9.52576 7.11124ZM15.8889 5.69702L16.596 6.40413C19.1344 8.94254 19.1344 13.0581 16.596 15.5965L15.8889 16.3036L14.4747 14.8894L15.1818 14.1823C16.9391 12.4249 16.9391 9.5757 15.1818 7.81834L14.4747 7.11124L15.8889 5.69702ZM10.0002 10.9999C10.0002 9.89534 10.8957 8.99991 12.0002 8.99991C13.1048 8.99991 14.0002 9.89534 14.0002 10.9999C14.0002 11.7402 13.598 12.3865 13.0002 12.7323V22.9999H11.0002V12.7323C10.4024 12.3865 10.0002 11.7402 10.0002 10.9999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
