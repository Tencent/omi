import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-git-repository-commits')
export default class GitRepositoryCommits extends WeElement<IconProps> {
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
          d="M3 5.5C3 3.01472 5.01472 1 7.5 1H21V23H16V21H19V16H16.5V14H19V3H7.5C6.11929 3 5 4.11929 5 5.5V14.7578C5.71505 14.2791 6.57493 14 7.5 14H9.5V16H7.5C6.11929 16 5 17.1193 5 18.5C5 19.8807 6.11929 21 7.5 21H10V23H7.5C5.01472 23 3 20.9853 3 18.5V5.5ZM8 5H10.0039V7.00391H8V5ZM8 8H10.0039V10.0039H8V8ZM13 14.6152L16.9139 18.3644L15.5304 19.8086L14 18.3427V23H12V18.3427L10.4696 19.8086L9.08611 18.3644L13 14.6152Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
