import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-percent')
export default class Percent extends WeElement<IconProps> {
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
          d="M6 5C5.17157 5 4.5 5.67157 4.5 6.5C4.5 7.32843 5.17157 8 6 8C6.82843 8 7.5 7.32843 7.5 6.5C7.5 5.67157 6.82843 5 6 5ZM2.5 6.5C2.5 4.567 4.067 3 6 3C7.933 3 9.5 4.567 9.5 6.5C9.5 8.433 7.933 10 6 10C4.067 10 2.5 8.433 2.5 6.5ZM20.4142 5L5 20.4142L3.58579 19L19 3.58579L20.4142 5ZM18 16C17.1716 16 16.5 16.6716 16.5 17.5C16.5 18.3284 17.1716 19 18 19C18.8284 19 19.5 18.3284 19.5 17.5C19.5 16.6716 18.8284 16 18 16ZM14.5 17.5C14.5 15.567 16.067 14 18 14C19.933 14 21.5 15.567 21.5 17.5C21.5 19.433 19.933 21 18 21C16.067 21 14.5 19.433 14.5 17.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
