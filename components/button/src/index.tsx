import { tag, WeElement, h, extractClass, OmiProps } from 'omi'
import * as css from './index.scss'

export interface Props {
  size?: 'medium' | 'small' | 'mini'
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
  plain?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean
  icon?: string
  autofocus?: boolean
  nativeType?: 'button' | 'submit' | 'reset'
  block?: boolean
  text?: string
}

@tag('o-button')
export default class Button extends WeElement<Props> {
  static css = css

  static defaultProps = {
    plain: false,
    round: false,
    circle: false,
    loading: false,
    disabled: false,
    autofocus: false,
    nativeType: 'button',
    block: false,
  }

  static propTypes = {
    size: String,
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    autofocus: Boolean,
    nativeType: String,
    block: Boolean,
    text: String,
  }

  render(props: OmiProps<Props>) {
    return (
      <button
        disabled={props.disabled}
        {...extractClass(props, 'o-button', {
          ['o-button-' + props.type]: props.type,
          ['o-button-' + props.size]: props.size,
          'is-plain': props.plain,
          'is-round': props.round,
          'is-circle': props.circle,
          'is-disabled': props.disabled,
          'is-block': props.block,
        })}
        type={props.nativeType}
      >
        {props.loading && [
          <svg
            class="loading"
            viewBox="0 0 1024 1024"
            focusable="false"
            data-icon="loading"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
          </svg>,
          ' ',
        ]}
        {props.text}
        <slot></slot>
      </button>
    )
  }
}
