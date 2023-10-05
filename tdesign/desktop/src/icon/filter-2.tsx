import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-filter-2')
export default class Filter2 extends WeElement<IconProps> {
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
          d="M20.8875 2.26995L19.3187 3.05085L20.8875 3.83175L21.6684 5.40053L22.4493 3.83175L24.0181 3.05085L22.4493 2.26996L21.6684 0.701172L20.8875 2.26995ZM7.95887 1.51477L9.05597 3.71882L11.26 4.81592L9.05597 5.91302L7.95887 8.11706L6.86176 5.91302L4.65772 4.81592L6.86176 3.71882L7.95887 1.51477ZM17.2386 3.40212L22.3873 8.55087L7.29817 23.64L2.14941 18.4913L17.2386 3.40212ZM15.2341 8.23507L17.5544 10.5554L19.5589 8.55087L17.2386 6.23055L15.2341 8.23507ZM16.1402 11.9696L13.8198 9.64928L4.97784 18.4913L7.29817 20.8116L16.1402 11.9696Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
