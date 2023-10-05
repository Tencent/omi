import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-textformat-wrap')
export default class TextformatWrap extends WeElement<IconProps> {
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
          d="M2 4H3H21H22V6H21H3H2V4ZM2 11H3H17C18.1478 11 19.3791 11.2843 20.35 12.0125C21.3601 12.7701 22 13.9458 22 15.5C22 17.0542 21.3601 18.2299 20.35 18.9875C19.3791 19.7157 18.1478 20 17 20H14H11.5858L13.2929 18.2929L15.2929 16.2929L16 15.5858L17.4142 17L16.7071 17.7071L16.4142 18H17C17.8522 18 18.6209 17.7843 19.15 17.3875C19.6399 17.0201 20 16.4458 20 15.5C20 14.5542 19.6399 13.9799 19.15 13.6125C18.6209 13.2157 17.8522 13 17 13H3H2V11ZM3 18H2V20H3H9H10V18H9H3Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
