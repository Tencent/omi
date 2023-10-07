import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { TdProgressProps } from './type'
import css from './style/index'
import progressIconCss from './style/progress_icon.less'
import { OmiNode, StyledProps } from '../common'
import { getBackgroundColor } from '../utils'

import '../icon/check'
import '../icon/close'
import '../icon/error'
import '../icon/check-circle-filled'
import '../icon/close-circle-filled'
import '../icon/error-circle-filled'
import { TdClassNamePrefix } from '../utils'

export interface ProgressProps extends TdProgressProps, StyledProps {}

@tag('t-progress')
export default class Progress extends WeElement<ProgressProps> {
  static css = css as string
  static defaultProps = { label: true, percentage: 0, size: 'medium', theme: 'line' }
  static propTypes = {
    color: [String, Array, Object],
    label: Object,
    percentage: Number,
    size: [String, Number],
    status: String,
    strokeWidth: [String, Number],
    theme: String,
    trackColor: String,
  }

  componentName = TdClassNamePrefix('progress')

  iconMap = {
    success: (
      <t-icon-check-circle-filled
        class={classNames(`${this.componentName}--status--success`, `${this.componentName}__icon`)}
        css={progressIconCss}
      />
    ),
    error: (
      <t-icon-close-circle-filled
        class={classNames(`${this.componentName}--status--warning`, `${this.componentName}__icon`)}
        css={progressIconCss}
      />
    ),
    warning: (
      <t-icon-error-circle-filled
        class={classNames(`${this.componentName}--status--error`, `${this.componentName}__icon`)}
        css={progressIconCss}
      />
    ),
  }

  install() {}

  render(props: OmiProps<ProgressProps>) {
    const { componentName } = this
    let { iconMap } = this
    const { theme, percentage, label, color = '', trackColor, strokeWidth, size, class: className } = props
    let { status } = props
    if (!status && percentage >= 100) {
      status = 'success'
    }
    let progressDom: any
    const statusClassName = `${componentName}--status--${status}`

    const getInfoContent = () => {
      if (!label) {
        return ''
      }
      let info: any
      // 为布尔值，默认百分百展示，否则之间展示 label 内容
      if (typeof label === 'boolean') {
        info = <div class={`${componentName}__info`}>{`${percentage}%`}</div>
        if (['success', 'error', 'warning'].includes(status)) {
          info = <div class={`${componentName}__info`}>{iconMap[status]}</div>
        }
      } else {
        info = <div class={`${componentName}__info`}>{label}</div>
      }
      return info
    }
    if (theme === 'circle') {
      iconMap = {
        success: (
          <t-icon-check
            class={classNames(
              `${componentName}--status--success`,
              `${componentName}--circle`,
              `${componentName}__icon`,
            )}
            css={progressIconCss}
          />
        ),
        error: (
          <t-icon-close
            class={classNames(`${componentName}--status--error`, `${componentName}--circle`, `${componentName}__icon`)}
            css={progressIconCss}
          />
        ),
        warning: (
          <t-icon-error
            class={classNames(
              `${componentName}--status--warning`,
              `${componentName}--circle`,
              `${componentName}__icon`,
            )}
            css={progressIconCss}
          />
        ),
      }
      // 获取直径
      const getDiameter = (): number => {
        let diameter = 112
        if (!size) {
          return diameter
        }
        switch (size) {
          default:
            diameter = Number(size)
            break
          case 'small':
            diameter = 72
            break
          case 'medium':
            diameter = 112
            break
          case 'large':
            diameter = 160
            break
        }
        return diameter
      }
      // 获取环形进度条 环的宽度
      const getCircleStokeWidth = (): number => {
        if (!strokeWidth) {
          if (size === 'small') {
            return 4
          }
        }
        if (typeof strokeWidth !== 'number' || Number.isNaN(strokeWidth)) {
          return 6
        }
        return strokeWidth
      }
      // 环形进度条尺寸(进度条占位空间，长宽占位)
      const circleStokeWidth = getCircleStokeWidth()
      // 直径
      const diameter = getDiameter()
      // 半径
      const radius = diameter / 2
      // 内环半径
      const innerRadius = radius - circleStokeWidth

      const perimeter = Math.PI * 2 * radius
      const percent = percentage / 100
      const strokeDasharray = `${perimeter * percent}  ${perimeter * (1 - percent)}`
      // 自适应文字，根据半路，适度调整
      const fontSizeRatio = innerRadius * 0.27
      const circleBoxStyle = {
        width: diameter,
        height: diameter,
        fontSize: 4 + fontSizeRatio,
      }
      const circlePathStyle = {
        stroke: color,
        strokeLinecap: circleStokeWidth < 30 ? 'round' : 'buff',
      }
      const circleCenterInViewBox = radius + circleStokeWidth / 2
      progressDom = (
        <div
          class={classNames(`${componentName}--circle`, {
            [`${statusClassName}`]: status,
          })}
          style={circleBoxStyle}
        >
          {getInfoContent()}
          <svg
            width={diameter}
            height={diameter}
            viewBox={`0 0 ${diameter + circleStokeWidth} ${diameter + circleStokeWidth}`}
          >
            <circle
              cx={circleCenterInViewBox}
              cy={circleCenterInViewBox}
              r={radius}
              stroke-width={circleStokeWidth}
              stroke={trackColor || 'var(--td-bg-color-component)'}
              fill="none"
            ></circle>
            {percentage > 0 && (
              <circle
                cx={circleCenterInViewBox}
                cy={circleCenterInViewBox}
                r={radius}
                stroke-width={circleStokeWidth}
                fill="none"
                transform={`matrix(0,-1,1,0,0,${diameter + circleStokeWidth})`}
                stroke-dasharray={strokeDasharray}
                class={`${componentName}__circle-inner`}
                style={circlePathStyle}
              ></circle>
            )}
          </svg>
        </div>
      )
      return <div class={classNames(className)}>{progressDom}</div>
    }
    const getHeight = (): string => {
      if (strokeWidth) {
        return typeof strokeWidth === 'string' ? strokeWidth : `${strokeWidth}px`
      }
    }
    const trackStyle = {
      height: getHeight(),
      backgroundColor: trackColor,
      borderRadius: getHeight(),
    }
    const barStyle = {
      width: `${percentage}%`,
      background: getBackgroundColor(color),
      borderRadius: getHeight(),
    }
    if (theme === 'plump') {
      const PLUMP_SEPARATE = 10
      progressDom = (
        <div
          class={classNames(`${componentName}__bar`, `${componentName}--plump`, {
            [`${statusClassName}`]: status,
            [`${componentName}--over-ten`]: percentage > PLUMP_SEPARATE,
            [`${componentName}--under-ten`]: percentage <= PLUMP_SEPARATE,
          })}
          style={trackStyle}
        >
          {percentage > PLUMP_SEPARATE ? (
            <div class={`${componentName}__inner`} style={barStyle}>
              {label && <div class={`${componentName}__info`} style={{ color: '#fff' }}>{`${percentage}%`}</div>}
            </div>
          ) : (
            <>
              <div class={`${componentName}__inner`} style={barStyle}></div>
              {getInfoContent()}
            </>
          )}
        </div>
      )
    } else {
      progressDom = (
        <div
          class={classNames(`${componentName}--thin`, {
            [`${statusClassName}`]: status,
          })}
        >
          <div class={`${componentName}__bar`} style={trackStyle}>
            <div class={`${componentName}__inner`} style={barStyle}></div>
          </div>
          {getInfoContent()}
        </div>
      )
    }
    return (
      <div class={classNames(className)} style={props.style}>
        {progressDom}
      </div>
    )
  }
}
