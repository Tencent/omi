import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-parentheses')
export default class Parentheses extends WeElement<IconProps> {
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
          d="M5.44539 4.53903L5.00736 5.43799C4.04211 7.41891 3.5 9.64472 3.5 12C3.5 14.3552 4.04211 16.581 5.00736 18.5619L5.44539 19.4609L3.64748 20.337L3.20944 19.438C2.11414 17.1902 1.5 14.6654 1.5 12C1.5 9.33456 2.11414 6.80976 3.20944 4.56192L3.64748 3.66296L5.44539 4.53903ZM20.3525 3.66296L20.7906 4.56192C21.8859 6.80976 22.5 9.33456 22.5 12C22.5 14.6654 21.8859 17.1902 20.7906 19.438L20.3525 20.337L18.5546 19.4609L18.9926 18.5619C19.9579 16.581 20.5 14.3552 20.5 12C20.5 9.64472 19.9579 7.41891 18.9926 5.43799L18.5546 4.53903L20.3525 3.66296Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
