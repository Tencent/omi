import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-attach')
export default class Attach extends WeElement<IconProps> {
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
          d="M11.3138 3.1212C13.2664 1.16858 16.4322 1.16858 18.3848 3.1212C20.3375 5.07383 20.3375 8.23965 18.3848 10.1923L10.6067 17.9704C9.4351 19.142 7.53561 19.142 6.36403 17.9704C5.19246 16.7989 5.19246 14.8994 6.36403 13.7278L14.1422 5.94963L15.5564 7.36385L7.77825 15.142C7.38772 15.5325 7.38772 16.1657 7.77825 16.5562C8.16877 16.9468 8.80194 16.9468 9.19246 16.5562L16.9706 8.77806C18.1422 7.60649 18.1422 5.70699 16.9706 4.53542C15.7991 3.36385 13.8996 3.36384 12.728 4.53542L4.94982 12.3136C2.9972 14.2662 2.9972 17.432 4.94982 19.3847C6.90244 21.3373 10.0683 21.3373 12.0209 19.3847L20.5062 10.8994L21.9204 12.3136L13.4351 20.7989C10.7014 23.5325 6.26927 23.5325 3.5356 20.7989C0.801934 18.0652 0.801934 13.633 3.5356 10.8994L11.3138 3.1212Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
