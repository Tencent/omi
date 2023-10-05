import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-wave-right')
export default class WaveRight extends WeElement<IconProps> {
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
          d="M19.0473 0.373535L19.8707 0.941022C21.0771 1.77248 22.1236 2.81891 22.9551 4.02526L23.5226 4.84862L21.8759 5.98365L21.3084 5.16029C20.6149 4.15422 19.7419 3.2812 18.7358 2.58779L17.9124 2.0203L19.0473 0.373535ZM12.1982 4.29137C13.1306 3.35893 14.6424 3.35893 15.5749 4.29137C15.6772 4.39369 15.7683 4.50298 15.8481 4.61771C16.7795 3.96543 18.0723 4.0552 18.9041 4.88702C19.7359 5.71883 19.8257 7.0117 19.1734 7.94302C19.2882 8.02288 19.3975 8.11397 19.4998 8.21629C20.4322 9.14873 20.4322 10.6605 19.4998 11.593L19.08 12.0127C19.1832 12.0871 19.2818 12.1707 19.3746 12.2635C20.3063 13.1952 20.3063 14.7057 19.3746 15.6374L15.0542 19.9578C12.2465 22.7655 7.69442 22.7655 4.88675 19.9578L4.04244 19.1135C1.73217 16.8032 1.27016 13.2257 2.91775 10.4043L5.14403 6.59192C5.77989 5.50306 7.21313 5.19467 8.24056 5.92564C8.72911 6.27322 9.03869 6.79947 9.1206 7.36896L12.1982 4.29137ZM18.0856 10.1787C18.237 10.0274 18.237 9.78189 18.0856 9.6305C17.9343 9.47923 17.6891 9.47911 17.5377 9.63014C17.5376 9.63026 17.5378 9.63001 17.5377 9.63014L12.3007 14.8671L10.8865 13.4529L17.4899 6.84947C17.6413 6.69808 17.6413 6.45262 17.4899 6.30123C17.3385 6.14984 17.0931 6.14984 16.9417 6.30123L10.3382 12.9047L8.92403 11.4905L14.1606 6.25383C14.312 6.10244 14.312 5.85698 14.1606 5.70559C14.0093 5.55419 13.7638 5.55419 13.6124 5.70559L8.14397 11.174C7.58133 11.7367 6.61848 11.45 6.45574 10.6707C6.42367 10.5171 6.42816 10.3582 6.46872 10.2068L7.13734 7.71151C7.15306 7.65281 7.13066 7.59051 7.08113 7.55528C7.01145 7.50571 6.91424 7.52662 6.87112 7.60047L4.64483 11.4128C3.45558 13.4494 3.78906 16.0317 5.45666 17.6993L6.30096 18.5436C8.32758 20.5702 11.6134 20.5702 13.64 18.5436L17.9604 14.2232C18.111 14.0726 18.111 13.8284 17.9604 13.6777C17.8098 13.5271 17.5656 13.5271 17.415 13.6777L14.2632 16.8296L12.8489 15.4154L18.0856 10.1787Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
