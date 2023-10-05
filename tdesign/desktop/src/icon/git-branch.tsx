import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-git-branch')
export default class GitBranch extends WeElement<IconProps> {
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
          d="M5.5 19.5C4.67157 19.5 4 18.8284 4 18C4 17.1716 4.67157 16.5 5.5 16.5C6.32843 16.5 7 17.1716 7 18C7 18.8284 6.32843 19.5 5.5 19.5ZM2 18C2 19.933 3.567 21.5 5.5 21.5C7.433 21.5 9 19.933 9 18C9 16.4761 8.02611 15.1797 6.66677 14.6992C6.97558 13.9933 7.68018 13.5 8.5 13.5H15.5C17.7091 13.5 19.5 11.7091 19.5 9.5V9.35506C20.9457 8.92479 22 7.58551 22 6C22 4.067 20.433 2.5 18.5 2.5C16.567 2.5 15 4.067 15 6C15 7.58551 16.0543 8.92479 17.5 9.35506V9.5C17.5 10.6046 16.6046 11.5 15.5 11.5H8.5C7.77143 11.5 7.08835 11.6948 6.5 12.0351V9.35506C7.94574 8.92479 9 7.58551 9 6C9 4.067 7.433 2.5 5.5 2.5C3.567 2.5 2 4.067 2 6C2 7.58551 3.05426 8.92479 4.5 9.35506V14.6449C3.05426 15.0752 2 16.4145 2 18ZM18.5 7.5C17.6716 7.5 17 6.82843 17 6C17 5.17157 17.6716 4.5 18.5 4.5C19.3284 4.5 20 5.17157 20 6C20 6.82843 19.3284 7.5 18.5 7.5ZM5.5 7.5C4.67157 7.5 4 6.82843 4 6C4 5.17157 4.67157 4.5 5.5 4.5C6.32843 4.5 7 5.17157 7 6C7 6.82843 6.32843 7.5 5.5 7.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
