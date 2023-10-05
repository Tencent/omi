import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-color-invert')
export default class ColorInvert extends WeElement<IconProps> {
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
          d="M12 1.58569L18.0104 7.5961C20.4744 10.0601 21.1094 13.6604 19.9155 16.71C19.5191 17.7894 18.8886 18.7953 17.998 19.6293C17.4161 20.2089 16.7711 20.6868 16.0852 21.063C15.8485 21.1951 15.6098 21.3117 15.3673 21.4135C12.2635 22.7512 8.52496 22.1523 5.98959 19.6169C2.67014 16.2975 2.67014 10.9156 5.98959 7.5961L12 1.58569ZM15.1574 19.29C15.6096 19.0318 16.0836 18.6781 16.6084 18.1904C17.2562 17.5392 17.7377 16.785 18.0527 15.9806C18.3232 15.2296 18.4494 14.4169 18.4343 13.5927C18.4023 11.8508 17.7388 10.1529 16.5962 9.01031L13 5.41412V19.9556C13.5116 19.9047 13.9641 19.8071 14.3962 19.6472C14.4468 19.6285 14.4974 19.6088 14.5482 19.5881C14.7552 19.5 14.9586 19.4006 15.1574 19.29ZM11 5.41412L7.40381 9.01031C4.8654 11.5487 4.8654 15.6643 7.40381 18.2027C8.41787 19.2168 9.68364 19.8257 11 20.0296V5.41412Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
