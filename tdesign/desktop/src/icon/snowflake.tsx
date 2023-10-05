import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-snowflake')
export default class Snowflake extends WeElement<IconProps> {
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
          d="M13 1V2.58579L14 1.58579L15.4142 3L13 5.41421L13 9.61712L16.943 5.6361L18.3639 7.0435L14.4143 11.0313L18.583 11.0028L21 8.58579L22.4142 10L21.4142 11H23V13H21.4142L22.4142 14L21 15.4142L18.5886 13.0028L14.4142 13.0314L18.3639 16.9429L16.9566 18.364L13 14.4456L13 18.5858L15.4142 21L14 22.4142L13 21.4142L13 23L11 23L11 21.4142L10 22.4142L8.58579 21L11 18.5858L11 14.4456L7.04339 18.364L5.63606 16.9429L9.58576 13.0314L5.41138 13.0028L3 15.4142L1.58579 14L2.58579 13L1 13L1 11L2.58578 11L1.58579 10L3 8.58579L5.41704 11.0028L9.58573 11.0313L5.63606 7.0435L7.05705 5.6361L11 9.61712L11 5.41421L8.58579 3L10 1.58579L11 2.58578V1L13 1Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
