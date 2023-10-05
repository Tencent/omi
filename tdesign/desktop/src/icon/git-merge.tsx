import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-git-merge')
export default class GitMerge extends WeElement<IconProps> {
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
          d="M5.5 4.5C4.67157 4.5 4 5.17157 4 6C4 6.82843 4.67157 7.5 5.5 7.5C6.32843 7.5 7 6.82843 7 6C7 5.17157 6.32843 4.5 5.5 4.5ZM2 6C2 4.067 3.567 2.5 5.5 2.5C7.433 2.5 9 4.067 9 6C9 7.52388 8.02611 8.8203 6.66677 9.30081C6.97558 10.0067 7.68018 10.5 8.5 10.5H15.5C17.7091 10.5 19.5 12.2909 19.5 14.5V14.6449C20.9457 15.0752 22 16.4145 22 18C22 19.933 20.433 21.5 18.5 21.5C16.567 21.5 15 19.933 15 18C15 16.4145 16.0543 15.0752 17.5 14.6449V14.5C17.5 13.3954 16.6046 12.5 15.5 12.5H8.5C7.77143 12.5 7.08835 12.3052 6.5 11.9649V14.6449C7.94574 15.0752 9 16.4145 9 18C9 19.933 7.433 21.5 5.5 21.5C3.567 21.5 2 19.933 2 18C2 16.4145 3.05426 15.0752 4.5 14.6449V9.35506C3.05426 8.92479 2 7.58551 2 6ZM18.5 16.5C17.6716 16.5 17 17.1716 17 18C17 18.8284 17.6716 19.5 18.5 19.5C19.3284 19.5 20 18.8284 20 18C20 17.1716 19.3284 16.5 18.5 16.5ZM5.5 16.5C4.67157 16.5 4 17.1716 4 18C4 18.8284 4.67157 19.5 5.5 19.5C6.32843 19.5 7 18.8284 7 18C7 17.1716 6.32843 16.5 5.5 16.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
