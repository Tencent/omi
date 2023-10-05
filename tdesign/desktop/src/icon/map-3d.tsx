import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-map-3d')
export default class Map3d extends WeElement<IconProps> {
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
          d="M12 1.84229L19 5.92562V11.3271C20.0294 11.7793 20.9266 12.3445 21.6106 13.0141C22.4384 13.8245 23 14.8389 23 16C23 17.9635 21.4342 19.472 19.5183 20.43C17.5425 21.4178 14.883 22 12 22C9.11699 22 6.45748 21.4178 4.48172 20.43C2.56577 19.472 1 17.9635 1 16C1 14.8389 1.56155 13.8245 2.38936 13.0141C3.07342 12.3445 3.97057 11.7793 5 11.3271V5.92562L12 1.84229ZM5 13.5588C4.50904 13.8362 4.10308 14.1353 3.78841 14.4433C3.22379 14.996 3 15.5255 3 16C3 16.7979 3.67281 17.7894 5.37615 18.6411C7.01967 19.4629 9.36016 20 12 20C14.6398 20 16.9803 19.4629 18.6239 18.6411C20.3272 17.7894 21 16.7979 21 16C21 15.5255 20.7762 14.996 20.2116 14.4433C19.8969 14.1353 19.491 13.8362 19 13.5588V14.0744L12 18.1577L5 14.0744V13.5588ZM17 12.9256V8.36469L13 10.5882V15.259L17 12.9256ZM11 15.259V10.5882L7 8.36469V12.9256L11 15.259ZM7.87595 6.56339L12 8.85587L16.124 6.56339L12 4.15769L7.87595 6.56339Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
