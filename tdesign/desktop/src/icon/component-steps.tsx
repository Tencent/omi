import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-component-steps')
export default class ComponentSteps extends WeElement<IconProps> {
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
          d="M1 12C1 10.067 2.567 8.5 4.5 8.5C6.08551 8.5 7.42479 9.55426 7.85506 11H8.64494C9.07521 9.55426 10.4145 8.5 12 8.5C13.5855 8.5 14.9248 9.55426 15.3551 11H16.1449C16.5752 9.55426 17.9145 8.5 19.5 8.5C21.433 8.5 23 10.067 23 12C23 13.933 21.433 15.5 19.5 15.5C17.9145 15.5 16.5752 14.4457 16.1449 13H15.3551C14.9248 14.4457 13.5855 15.5 12 15.5C10.4145 15.5 9.07521 14.4457 8.64494 13H7.85506C7.42479 14.4457 6.08551 15.5 4.5 15.5C2.567 15.5 1 13.933 1 12ZM4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12C6 11.1716 5.32843 10.5 4.5 10.5ZM12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5ZM19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12C21 11.1716 20.3284 10.5 19.5 10.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
