import { h, OmiProps, tag, WeElement, render, classNames } from 'omi'
import { InputProps } from './types'
import styles from './sytle'
import { TdClassNamePrefix } from '../../src/utils'

import '../input'

const InputNumebrClassNamePrefix = (name: string) => TdClassNamePrefix('input') + name

@tag('t-input-number')
export default class InputNumber extends WeElement<InputProps> {
  static css = styles

  handleChange = (val: number) => {
    //@ts-ignore
    this.props?.onChangeValue?.(val)
  }

  render(props: InputProps, store: any) {
    const { value } = props

    return (
      <>
        <div class="t-slider__input-container">
          <div class="t-input-number t-size-m t-is-controls-right t-input-number--column t-slider-input">
            <button
              onClick={() => {
                this.handleChange(value - 1)
              }}
              type="button"
              class="t-input-number__decrease t-button t-button--theme-default t-button--variant-outline t-button--shape-square"
            >
              <svg fill="none" viewBox="0 0 24 24" width="1em" height="1em" class="t-icon t-icon-chevron-down t-size-m">
                <path fill="currentColor" d="M17.5 8.09l-5.5 5.5-5.5-5.5L5.09 9.5 12 16.41l6.91-6.91-1.41-1.41z"></path>
              </svg>
            </button>

            <t-input autocomplete="off" value={value || 0} />

            <button
              onClick={() => {
                this.handleChange(value + 1)
              }}
              type="button"
              class="t-input-number__increase t-button t-button--theme-default t-button--variant-outline t-button--shape-square"
            >
              <svg fill="none" viewBox="0 0 24 24" width="1em" height="1em" class="t-icon t-icon-chevron-up t-size-m">
                <path
                  fill="currentColor"
                  d="M17.5 15.91l-5.5-5.5-5.5 5.5-1.41-1.41L12 7.59l6.91 6.91-1.41 1.41z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </>
    )
  }
}
