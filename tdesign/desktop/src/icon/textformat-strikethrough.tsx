import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-textformat-strikethrough')
export default class TextformatStrikethrough extends WeElement<IconProps> {
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
          d="M7.97741 3.08274C9.29975 2.27621 10.8694 2.00122 12.0027 2.00122C14.4567 2.00122 16.2894 2.99224 18.0562 4.16237L18.8899 4.71454L17.7856 6.382L16.9518 5.82982C15.279 4.7219 13.8552 4.00122 12.0027 4.00122C11.1311 4.00122 9.94806 4.22344 9.01884 4.7902C8.13845 5.32717 7.49716 6.15363 7.49716 7.49998C7.49716 7.95639 7.5748 8.32673 7.69642 8.6319L8.06661 9.56086L6.2087 10.3012L5.83851 9.37228C5.61576 8.81334 5.49716 8.18959 5.49716 7.49998C5.49716 5.34198 6.60623 3.91906 7.97741 3.08274ZM4 11H20V13H17.0371C17.8895 13.801 18.5 14.9321 18.5 16.5039C18.5 18.6619 17.3909 20.0849 16.0198 20.9212C14.6974 21.7277 13.1277 22.0027 11.9945 22.0027C9.53841 22.0027 7.70916 21.0144 5.94354 19.833L5.11245 19.2768L6.22471 17.6146L7.0558 18.1708C8.72058 19.2848 10.1407 20.0027 11.9945 20.0027C12.866 20.0027 14.0491 19.7805 14.9783 19.2137C15.8587 18.6768 16.5 17.8503 16.5 16.5039C16.5 15.2006 15.8618 14.4535 14.9511 13.939C14.0031 13.4034 12.8346 13.1719 11.9043 13.0012H8.0044V13H4V11Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
