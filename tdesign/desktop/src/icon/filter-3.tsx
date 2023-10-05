import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-filter-3')
export default class Filter3 extends WeElement<IconProps> {
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
          d="M12.0192 0.00219727L15.5092 7.99035L23.4973 11.4804L15.5092 14.9704L12.0192 22.9585L8.52917 14.9704L0.541016 11.4804L8.52917 7.99035L12.0192 0.00219727ZM21.3244 3.32469L19.7556 4.10559L21.3244 4.8865L22.1054 6.45532L22.8863 4.8865L24.4551 4.10559L22.8863 3.32469L22.1054 1.75586L21.3244 3.32469ZM12.0192 4.99776L10.0481 9.50928L5.53658 11.4804L10.0481 13.4514L12.0192 17.9629L13.9902 13.4514L18.5018 11.4804L13.9902 9.50928L12.0192 4.99776ZM19.3351 14.7559L20.6344 17.3661L23.2446 18.6654L20.6344 19.9647L19.3351 22.575L18.0358 19.9647L15.4256 18.6654L18.0358 17.3661L19.3351 14.7559Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
