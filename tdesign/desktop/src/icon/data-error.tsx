import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-data-error')
export default class DataError extends WeElement<IconProps> {
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
          d="M2 2H22V14H20V13H4L4 20.0004H14V22.0004H2L2 2ZM4 11H20V4H4V11ZM5.99805 6.5H8.00195V8.50391H5.99805V6.5ZM16.8789 15.4644L19.0002 17.5858L21.1215 15.4644L22.5358 16.8787L20.4144 19L22.5358 21.1213L21.1215 22.5355L19.0002 20.4142L16.8789 22.5355L15.4647 21.1213L17.586 19L15.4647 16.8787L16.8789 15.4644ZM5.99805 15.5H8.00195V17.5039H5.99805V15.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
