import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-location')
export default class Location extends WeElement<IconProps> {
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
          d="M12 3C8.13401 3 5 6.13401 5 10C5 12.8623 6.7821 15.6231 8.73804 17.7625C9.69817 18.8126 10.6614 19.6709 11.3855 20.2668C11.6187 20.4588 11.8263 20.6229 12 20.7567C12.1737 20.6229 12.3813 20.4588 12.6146 20.2669C13.3386 19.6711 14.3019 18.8129 15.262 17.7627C17.2179 15.6235 19 12.8627 19 10C19 6.13401 15.866 3 12 3ZM12 23.2136L11.4329 22.8236L11.4302 22.8218L11.424 22.8175L11.4032 22.803C11.3856 22.7906 11.3606 22.773 11.3287 22.7502C11.2649 22.7046 11.1736 22.6384 11.0585 22.5526C10.8285 22.3811 10.5033 22.131 10.1145 21.8111C9.33859 21.1725 8.30183 20.2494 7.26196 19.112C5.2179 16.8762 3 13.637 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10C21 13.6373 18.7821 16.8765 16.738 19.1123C15.6981 20.2496 14.6614 21.1727 13.8854 21.8112C13.4967 22.1311 13.1715 22.3812 12.9415 22.5527C12.8264 22.6385 12.735 22.7047 12.6712 22.7503C12.6394 22.7731 12.6144 22.7907 12.5967 22.803L12.5759 22.8175L12.5698 22.8218L12.5678 22.8232L12 23.2136ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
