import { h, tag, WeElement, OmiProps, cloneElement, classNames } from 'omi'
import { TdTimelineProps } from './type'
import css from './style/index'
import { toArray } from 'lodash'
import { StyledProps, commonClass } from '../common'
import { TdClassNamePrefix, parseTNode } from '../utils'
import '../loading'
import { getAlign } from './getAlign'

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

  provide = {
    theme: Timeline.defaultProps.theme,
    reverse: Timeline.defaultProps.reverse,
    itemsStatus: [] as any,
    layout: Timeline.defaultProps.layout,
    globalAlign: Timeline.defaultProps.labelAlign,
    mode: Timeline.defaultProps.mode,
  }
  componentName = TdClassNamePrefix('timeline')
  timelineItems: any
  itemsStatus: any
  hasLabelItem: any
  install() {
    const { theme, reverse, layout, labelAlign, mode } = this.props
    this.timelineItems = toArray(this.props.children).filter(
      (child: JSX.Element) => child.nodeName === 't-timeline-item',
    )
    this.itemsStatus = this.timelineItems.map((child: JSX.Element) => child.attributes?.dotColor || 'primary')
    this.hasLabelItem = this.timelineItems.some((item: any) => !!item?.props?.label)
    this.provide = {
      theme: theme,
      reverse: reverse,
      itemsStatus: this.itemsStatus,
      layout: layout,
      globalAlign: labelAlign,
      mode: mode,
    }
  }
  render(props: OmiProps<TimelineProps>) {
    const { componentName, timelineItems, hasLabelItem } = this
    const {
      theme = 'default',
      labelAlign,
      children,
      class: className,
      style,
      reverse = false,
      layout = 'vertical',
      mode = 'alternate',
    } = props
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
          }),
        )}
      </ul>
    )
  }
}
