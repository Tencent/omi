import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-youtube')
export default class LogoYoutube extends WeElement<IconProps> {
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
        <g clip-path="url(#clip0_8726_9984)">
          <path
            d="M8.92684 2.5H15.0732C16.8966 2.49997 18.3664 2.49995 19.5223 2.65537C20.7225 2.81672 21.733 3.16191 22.5355 3.96447C23.3381 4.76702 23.6833 5.77752 23.8446 6.97767C24.0001 8.13363 24 9.6034 24 11.4269V12.5731C24 14.3966 24.0001 15.8664 23.8446 17.0223C23.6833 18.2225 23.3381 19.233 22.5355 20.0355C21.733 20.8381 20.7225 21.1833 19.5223 21.3446C18.3664 21.5001 16.8966 21.5 15.0731 21.5H8.92686C7.1034 21.5 5.63363 21.5001 4.47767 21.3446C3.27752 21.1833 2.26702 20.8381 1.46447 20.0355C0.661912 19.233 0.31672 18.2225 0.155365 17.0223C-4.89801e-05 15.8664 -2.68071e-05 14.3966 7.30224e-07 12.5732V11.4268C-2.68071e-05 9.60338 -4.89801e-05 8.13362 0.155365 6.97767C0.31672 5.77752 0.661912 4.76702 1.46447 3.96447C2.26702 3.16191 3.27752 2.81672 4.47767 2.65537C5.63362 2.49995 7.10338 2.49997 8.92684 2.5ZM4.74416 4.63753C3.76579 4.76907 3.2477 5.00966 2.87868 5.37868C2.50966 5.7477 2.26907 6.26579 2.13753 7.24416C2.00213 8.2513 2 9.58611 2 11.5V12.5C2 14.4139 2.00213 15.7487 2.13753 16.7558C2.26907 17.7342 2.50966 18.2523 2.87868 18.6213C3.2477 18.9903 3.76579 19.2309 4.74416 19.3625C5.7513 19.4979 7.08611 19.5 9 19.5H15C16.9139 19.5 18.2487 19.4979 19.2558 19.3625C20.2342 19.2309 20.7523 18.9903 21.1213 18.6213C21.4903 18.2523 21.7309 17.7342 21.8625 16.7558C21.9979 15.7487 22 14.4139 22 12.5V11.5C22 9.58611 21.9979 8.2513 21.8625 7.24416C21.7309 6.2658 21.4903 5.7477 21.1213 5.37868C20.7523 5.00966 20.2342 4.76907 19.2558 4.63753C18.2487 4.50213 16.9139 4.5 15 4.5H9C7.08611 4.5 5.7513 4.50213 4.74416 4.63753ZM8.80078 6.96438L17.4962 12.0008L8.80078 17.0373V6.96438ZM10.8008 10.4341V13.5676L13.5058 12.0008L10.8008 10.4341Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}
