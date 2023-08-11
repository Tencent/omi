import { h, OmiProps, tag, WeElement, render, classNames } from 'omi'
import css from './style'
import { ButtonProps } from './types'
import { TdClassNamePefix } from '../utils'

@tag('t-button')
export default class Button extends WeElement<ButtonProps> {
  static propTypes = {
    disabled: Boolean,
    loading: Boolean,
    block: Boolean,
    ghost: Boolean,
  }
  static css = css as string

  render(props: OmiProps<ButtonProps>) {
    const { disabled, loading, block, ghost } = props

    const { href, icon } = props
    const { size, suffix, shape, tag, type, validity } = props
    const { onClick } = props

    return (
      <button
        className={classNames(
          TdClassNamePefix('button'),
          TdClassNamePefix('button--theme-primary'),
          TdClassNamePefix('button--variant-base'),
          {
            [TdClassNamePefix('size-full-width')]: block,
          },
          {
            [TdClassNamePefix('is-loading')]: loading,
          },
          {
            [TdClassNamePefix('is-disabled')]: disabled,
          },
          {
            [TdClassNamePefix('button--ghost')]: ghost,
          },
        )}
      >
        {loading && (
          <div
            style="display:flex;"
            class={classNames(
              TdClassNamePefix('loading'),
              TdClassNamePefix('loading--center'),
              TdClassNamePefix('size-m'),
              TdClassNamePefix('loading--inherit-color'),
            )}
          >
            <svg
              className={classNames(TdClassNamePefix('loading__gradient'), TdClassNamePefix('icon-loading'))}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFF"
                d="M8 1.5C4.41038 1.5 1.5 4.41038 1.5 8C1.5 11.5896 4.41038 14.5 8 14.5V12.875C5.30761 12.875 3.125 10.6924 3.125 8C3.125 5.30761 5.30761 3.125 8 3.125C10.6924 3.125 12.875 5.30761 12.875 8H14.5C14.5 4.41038 11.5896 1.5 8 1.5Z"
                fill-opacity="0.9"
              />
            </svg>
          </div>
        )}
        <span className="t-button__text">
          <slot></slot>
        </span>
      </button>
    )
  }
}
