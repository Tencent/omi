import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-css3')
export default class Css3 extends WeElement<IconProps> {
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
          d="M1.94141 1H22.059L20.9614 20.2076L12.0002 23.568L3.03898 20.2076L1.94141 1ZM4.05895 3L4.96138 18.7924L12.0002 21.432L19.039 18.7924L19.9414 3H4.05895ZM5.48248 5H18.33L18.2222 6.88688L10.9322 10.3768L18.0228 10.3768L17.618 17.4612L11.9999 19.568L6.38168 17.4612L6.2677 15.4665L6.26752 15.4632L6.19267 14.0734H8.20284L8.2647 15.3568L8.30408 16.0461L11.9999 17.432L15.6956 16.0461L15.9052 12.3768L6.09115 12.3768L5.98548 10.5276L13.3541 7H12.0007L5.74641 7.01163L5.48248 5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
