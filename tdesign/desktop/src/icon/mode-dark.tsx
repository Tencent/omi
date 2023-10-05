import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-mode-dark')
export default class ModeDark extends WeElement<IconProps> {
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
          d="M15.844 3.34403L14.416 4.12503L15.844 4.90604L16.625 6.33405L17.406 4.90604L18.834 4.12503L17.406 3.34403L16.625 1.91602L15.844 3.34403ZM10.412 4.15764C6.75443 4.89424 4 8.12547 4 12C4 16.4183 7.58172 20 12 20C14.9602 20 17.5466 18.3918 18.9302 15.9998C13.9918 15.9623 10 11.9473 10 7.00003C10 6.02088 10.1313 5.06319 10.412 4.15764ZM2 12C2 6.47719 6.47715 2.00003 12 2.00003H13.7337L12.8656 3.50073C12.2871 4.50094 12 5.68851 12 7.00003C12 10.866 15.134 14 19 14C19.4618 14 19.9122 13.9555 20.3475 13.8707L22.0301 13.5428L21.4872 15.1689C20.1623 19.1373 16.4167 22 12 22C6.47715 22 2 17.5229 2 12ZM20.5 6.41602L21.4136 8.08645L23.084 9.00003L21.4136 9.91362L20.5 11.5841L19.5864 9.91362L17.916 9.00003L19.5864 8.08645L20.5 6.41602Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
