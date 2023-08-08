import { h, OmiProps, tag, WeElement } from 'omi'
import css from './style'

export type ButtonProps = {} & HTMLButtonElement

@tag('td-button')
export default class Button extends WeElement<ButtonProps> {
  static css = css as string

  render(props: OmiProps<ButtonProps>) {
    return (
      <button className="t-button t-button--theme-primary t-button--variant-base">
        <span className="t-button__text">
          <slot></slot>
        </span>
      </button>
    )
  }
}
