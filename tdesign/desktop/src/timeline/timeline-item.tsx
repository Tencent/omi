import { h, tag, WeElement, OmiProps, classNames, cloneElement } from 'omi'
import { TdTimelineItemProps, TdTimelineProps } from './type'
import css from './style/index'
import { StyledProps } from '../common'
import { TdClassNamePrefix, parseTNode } from '../utils'
import { isObject } from 'lodash'
import { getAlign } from './getAlign'
import '../loading'

const DefaultTheme = ['default', 'primary', 'success', 'warning', 'error']
interface SubItem {
  index?: number
  theme?: TdTimelineProps['theme']
  reverse?: TdTimelineProps['reverse']
  status?: any
  layout?: TdTimelineProps['layout']
  globalAlign?: TdTimelineProps['labelAlign']
  mode?: TdTimelineProps['mode']
}
export interface TimelineItemProps extends TdTimelineItemProps, StyledProps, SubItem {}

@tag('t-timeline-item')
export default class TimelineItem extends WeElement<TimelineItemProps> {
  static css = css as string
  static defaultProps = { dotColor: 'primary' }
  static propTypes = {
    children: Object,
    content: Object,
    dot: Object,
    dotColor: String,
    label: Object,
    labelAlign: String,
    loading: Boolean,
    index: Number,
  }

  componentName = TdClassNamePrefix('timeline-item')

  render(props: OmiProps<TimelineItemProps>) {
    const { componentName } = this
    const {
      class: className,
      style,
      dot,
      dotColor,
      labelAlign,
      children,
      index,
      content,
      label,
      loading = false,
      theme,
      reverse,
      status,
      layout,
      globalAlign,
      mode,
    } = props

    console.log('item props: ', props)
    const renderAlign = getAlign(globalAlign, layout)

    // 计算节点模式 CSS 类名
    const getPositionClassName = (index: number) => {
      // 横向布局 以及 纵向布局对应为不同的样式名
      const left = layout === 'horizontal' ? 'top' : 'left'
      const right = layout === 'horizontal' ? 'bottom' : 'right'
      // 单独设置则单独生效
      if (renderAlign === 'alternate') {
        return labelAlign || index % 2 === 0 ? `${componentName}-${left}` : `${componentName}-${right}`
      }
      if (renderAlign === 'left' || renderAlign === 'top') {
        return `${componentName}-${left}`
      }
      if (renderAlign === 'right' || renderAlign === 'bottom') {
        return `${componentName}-${right}`
      }
      return ''
    }

    const ele = parseTNode(dot)
    let dotElement = undefined
    if (isObject(ele)) {
      dotElement = cloneElement(ele, {
        class: classNames(ele?.attributes?.class, `${componentName}__dot-content`),
      })
    }

    // 节点类名
    const itemClassName = classNames(
      {
        [`${componentName}`]: true,
        [`${componentName}-horizontal`]: layout === 'horizontal',
        [`${componentName}-alternate`]: globalAlign === 'alternate',
        [`${componentName}-label--alternate`]: mode === 'alternate',
        [`${componentName}-global-left`]: globalAlign === 'left',
        [`${componentName}-global-right`]: globalAlign === 'right',
        [`${getPositionClassName(index)}`]: true,
      },
      className,
    )

    // 连线类名
    const tailClassName = classNames({
      [`${componentName}__tail`]: true,
      [`${componentName}__tail--theme-${theme}`]: true,
      [`${componentName}__tail--status-${status}`]: reverse,
    })

    // 圆圈类名
    const dotClassName = classNames({
      [`${componentName}__dot`]: true,
      [`${componentName}__dot--custom`]: !!dotElement || (!dotElement && loading),
      [`${componentName}__dot--${dotColor}`]: DefaultTheme.includes(dotColor),
    })

    const labelClassName = classNames(`${componentName}__label`, {
      [`${componentName}__label--${mode}`]: true,
    })

    return (
      <li class={itemClassName} style={style}>
        {mode === 'alternate' && label && <div class={labelClassName}>{label}</div>}
        <div class={`${componentName}__wrapper`}>
          <div class={dotClassName} style={{ borderColor: !DefaultTheme.includes(dotColor) && dotColor }}>
            {!dotElement && loading && <t-loading size="12px" class={`${componentName}__dot-content`} />}
            {dotElement}
          </div>
          <div class={tailClassName} />
        </div>
        <div class={`${componentName}__content`}>
          {content || children}
          {mode === 'same' && label && <div class={labelClassName}>{label}</div>}
        </div>
      </li>
    )
  }
}
