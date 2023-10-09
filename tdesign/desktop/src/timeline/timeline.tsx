import { h, tag, WeElement, OmiProps, cloneElement, classNames } from 'omi'
import { TdTimelineProps } from './type'
import css from './style/index'
import { toArray } from 'lodash'
import { StyledProps } from '../common'
import { TdClassNamePrefix } from '../utils'
import '../loading'
import { getAlign } from './getAlign'
import timelineItemCss from './style/timeline-item.less'

export interface TimelineProps extends TdTimelineProps, StyledProps {}

@tag('t-timeline')
export default class Timeline extends WeElement<TimelineProps> {
  static css = css as string
  static defaultProps = {
    labelAlign: 'left',
    layout: 'vertical',
    mode: 'alternate',
    reverse: false,
    theme: 'default',
  }
  static propTypes = {
    labelAlign: String,
    layout: String,
    mode: String,
    reverse: Boolean,
    theme: String,
  }

  itemProps = {
    theme: Timeline.defaultProps.theme,
    reverse: Timeline.defaultProps.reverse,
    layout: Timeline.defaultProps.layout,
    globalAlign: Timeline.defaultProps.labelAlign,
    mode: Timeline.defaultProps.mode,
  }
  componentName = TdClassNamePrefix('timeline')
  timelineItems: any
  itemsStatus: any
  hasLabelItem: any

  updateItemProps = () => {
    const { theme, reverse, layout, labelAlign: globalAlign, mode } = this.props
    this.itemProps = {
      theme: theme,
      reverse: reverse,
      layout: layout,
      globalAlign: globalAlign,
      mode: mode,
    }
  }
  updateItemsStatus = () => {
    this.timelineItems = toArray(this.props.children).filter(
      (child: JSX.Element) => child.nodeName === 't-timeline-item',
    )
    this.itemsStatus = this.timelineItems.map((child: JSX.Element) => child.attributes?.dotColor || 'primary')
    this.hasLabelItem = this.timelineItems.some((item: any) => !!item?.attributes?.label)
  }

  beforeRender() {
    this.updateItemProps()
    this.updateItemsStatus()
  }
  install() {
    this.updateItemProps()
    this.updateItemsStatus()
  }
  render(props: OmiProps<TimelineProps>) {
    const { componentName, timelineItems, hasLabelItem, itemProps, itemsStatus } = this
    const { labelAlign, class: className, style, reverse, layout, mode } = props
    const renderAlign = getAlign(labelAlign, layout)

    if (reverse) {
      timelineItems.reverse()
    }

    const itemsCounts = timelineItems.length

    const timelineClassName = classNames(
      componentName,
      {
        [`${componentName}-${renderAlign}`]: true,
        [`${componentName}-reverse`]: reverse,
        [`${componentName}-${layout}`]: true,
        [`${componentName}-label`]: hasLabelItem,
        [`${componentName}-label--${mode}`]: true,
      },
      className,
    )

    return (
      <ul class={timelineClassName} style={style}>
        {timelineItems.map((ele: JSX.Element, index: number) =>
          cloneElement(ele, {
            index,
            class: classNames([ele?.attributes?.class], {
              [`${componentName}-item--last`]: index === itemsCounts - 1,
            }),
            status: itemsStatus[index],
            ...itemProps,
            css: timelineItemCss,
          }),
        )}
      </ul>
    )
  }
}
