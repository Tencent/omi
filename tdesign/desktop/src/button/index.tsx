import { h, OmiProps, tag, WeElement, render, classNames } from 'omi'
import css from './style'
import { ButtonProps, ButtonShape, ButtonTheme, ButtonVariant } from './types'
import { TdClassNamePefix } from '../utils'
import { SizeEnum } from '@src/common'

@tag('t-button')
export default class Button extends WeElement<ButtonProps> {
  static propTypes = {
    disabled: Boolean,
    loading: Boolean,
    block: Boolean,
    ghost: Boolean,

    theme: String,
    size: String,
    shape: String,
  }
  static css = css as string

  getButtonTheme(theme: ButtonTheme) {
    return TdClassNamePefix(`button--theme-${theme || 'default'}`)
  }

  getButtonValidity(validity: ButtonVariant) {
    return TdClassNamePefix(`button--variant-${validity || 'base'}`)
  }

  getLoadingFill(theme: ButtonTheme, validity: ButtonVariant, disabled: boolean, ghost: boolean,) {
    const target = theme || 'default'
    const val = validity || 'base'

    if (disabled && ghost || ghost && theme === 'default') return '';

    if (val === 'base' && target !== 'default' && !ghost) return 'rgb(255,255,255)';

    const activeMap: { [x: string]: string } = {
      primary: '--td-brand-color-active',
      default: '--td-text-color-primary',
      danger: '--td-error-color-active',
      warning: '--td-warning-color-active',
      success: '--td-success-color-active',
    };

    const disabledMap = {
      primary: '--td-brand-color-disabled',
      default: '--td-text-color-disabled',
      danger: '--td-danger-color-disabled',
      warning: '--td-warning-color-disabled',
      success: '--td-success-color-disabled',
    }

    return disabled ? `var(${disabledMap[target]})` : `var(${activeMap[target]})`
  }

  getButtonSize(size: SizeEnum) {
    const sizeMap = {
      small: "s",
      medium: 'm',
      large: 'l'
    }
    return TdClassNamePefix(`size-${sizeMap[size]}`)
  }

  getButtonShap(shape: ButtonShape) {
    return TdClassNamePefix(`button--shape-${shape}`)
  }

  render(props: OmiProps<ButtonProps>) {
    const { disabled, loading, block, ghost } = props

    const { href, icon } = props
    const { size, suffix, shape, tag, type, theme, variant } = props
    const { onClick } = props

    const tagName = tag || 'button';

    return (
      <tagName
        type={type}
        className={classNames(
          TdClassNamePefix('button'),
          this.getButtonValidity(variant),
          this.getButtonTheme(theme),
          this.getButtonSize(size),
          this.getButtonShap(shape),
          TdClassNamePefix('base'),
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

        {
          icon && (
            <span className={
              classNames(
                TdClassNamePefix('icon')
              )
            }>
              {icon}
            </span>
          )
        }

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
                fill={this.getLoadingFill(theme, variant, disabled, ghost)}
                d="M8 1.5C4.41038 1.5 1.5 4.41038 1.5 8C1.5 11.5896 4.41038 14.5 8 14.5V12.875C5.30761 12.875 3.125 10.6924 3.125 8C3.125 5.30761 5.30761 3.125 8 3.125C10.6924 3.125 12.875 5.30761 12.875 8H14.5C14.5 4.41038 11.5896 1.5 8 1.5Z"
                fill-opacity="0.9"
              />
            </svg>
          </div>
        )}
        <span className="t-button__text">
          <slot></slot>
        </span>
      </tagName>
    )
  }
}
