import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-bone')
export default class Bone extends WeElement<IconProps> {
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
          d="M17.5 3C16.6716 3 16 3.67157 16 4.5C16 4.76166 16.0661 5.00488 16.1818 5.21687L16.5404 5.87382L5.87382 16.5404L5.21687 16.1818C5.00488 16.0661 4.76166 16 4.5 16C3.67157 16 3 16.6716 3 17.5C3 18.2335 3.52743 18.8458 4.22398 18.9748L4.89997 19.1L5.02516 19.776C5.15416 20.4726 5.76654 21 6.5 21C7.32843 21 8 20.3284 8 19.5C8 19.2383 7.93385 18.9951 7.81815 18.7831L7.45961 18.1262L18.1262 7.45961L18.7831 7.81815C18.9951 7.93385 19.2383 8 19.5 8C20.3284 8 21 7.32843 21 6.5C21 5.76654 20.4726 5.15416 19.776 5.02516L19.1 4.89997L18.9748 4.22398C18.8458 3.52743 18.2335 3 17.5 3ZM14 4.5C14 2.567 15.567 1 17.5 1C18.9878 1 20.2573 1.92751 20.7644 3.23565C22.0725 3.74271 23 5.01224 23 6.5C23 8.433 21.433 10 19.5 10C19.17 10 18.8498 9.95408 18.5461 9.86816L9.86816 18.5461C9.95408 18.8498 10 19.17 10 19.5C10 21.433 8.433 23 6.5 23C5.01224 23 3.74271 22.0725 3.23565 20.7644C1.92751 20.2573 1 18.9878 1 17.5C1 15.567 2.567 14 4.5 14C4.82999 14 5.15015 14.0459 5.45394 14.1318L14.1318 5.45394C14.0459 5.15015 14 4.82999 14 4.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
