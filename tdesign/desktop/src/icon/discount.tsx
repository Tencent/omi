import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-discount')
export default class Discount extends WeElement<IconProps> {
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
          d="M11.4963 1.18945L22.0019 1.99757L22.81 12.5032L11.8782 23.435L0.564453 12.1213L11.4963 1.18945ZM12.26 3.25411L3.39288 12.1213L11.8782 20.6066L20.7453 11.7394L20.1392 3.8602L12.26 3.25411ZM16.1203 7.87789C15.7298 7.48737 15.0967 7.48737 14.7061 7.87789C14.3156 8.26842 14.3156 8.90158 14.7061 9.29211C15.0967 9.68263 15.7298 9.68263 16.1203 9.2921C16.5109 8.90158 16.5109 8.26842 16.1203 7.87789ZM13.2919 6.46368C14.4635 5.29211 16.363 5.2921 17.5346 6.46368C18.7061 7.63525 18.7061 9.53475 17.5346 10.7063C16.363 11.8779 14.4635 11.8779 13.2919 10.7063C12.1203 9.53475 12.1203 7.63525 13.2919 6.46368Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
