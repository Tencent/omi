import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-tools')
export default class Tools extends WeElement<IconProps> {
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
          d="M6.53385 1.86579C9.60307 0.617451 13.2574 1.23778 15.7501 3.73054C17.9027 5.88313 18.6574 8.90017 18.0214 11.6586L23.1748 16.812L21.7605 18.2262L15.773 12.2387L15.9505 11.663C16.6384 9.43131 16.0992 6.908 14.3359 5.14475C12.7092 3.51804 10.4337 2.93229 8.34011 3.39158L12.5682 7.61962L7.6184 12.5694L3.39036 8.34133C2.93107 10.4349 3.51682 12.7104 5.14353 14.3371C6.90678 16.1004 9.43009 16.6396 11.6617 15.9517L12.2375 15.7742L18.225 21.7618L16.8108 23.176L11.6574 18.0226C8.89895 18.6587 5.88191 17.9039 3.72932 15.7514C1.23656 13.2586 0.61623 9.60429 1.86457 6.53507L2.11838 5.91103L3.79047 5.91301L7.6184 9.74094L9.73972 7.61962L5.91179 3.79169L5.90981 2.1196L6.53385 1.86579ZM15.7501 14.3371L20.6999 19.2869L19.2857 20.7011L14.3359 15.7514L15.7501 14.3371Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
