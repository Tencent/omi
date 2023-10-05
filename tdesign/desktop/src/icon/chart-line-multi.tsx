import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-chart-line-multi')
export default class ChartLineMulti extends WeElement<IconProps> {
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
          d="M4 2V20H22V22H2V2H4ZM21.9142 5.5L15.5 11.9142L11.5 7.91421L6.5 12.9142L5.08579 11.5L11.5 5.08579L15.5 9.08579L20.5 4.08579L21.9142 5.5ZM21.9142 10.5L15.5 16.9142L11.5 12.9142L6.5 17.9142L5.08579 16.5L11.5 10.0858L15.5 14.0858L20.5 9.08579L21.9142 10.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
