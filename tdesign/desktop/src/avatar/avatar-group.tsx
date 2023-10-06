import { h, tag, WeElement, OmiProps, classNames, cloneElement } from 'omi'
import { toArray } from 'lodash'
import style from './style/index'
import './avatar'
import { TdAvatarGroupProps } from './type'
import { StyledProps } from '../common'
import { parseTNode, TdClassNamePrefix } from '../utils'

export interface AvatarGroupProps extends TdAvatarGroupProps, StyledProps {}

@tag('t-avatar-group')
export default class AvatarGroup extends WeElement<AvatarGroupProps> {
  static css = style
  static defaultProps = { cascading: 'right-up' }
  static propTypes = {
    cascading: String,
    max: Number,
    size: String,
    collapseAvatar: Object,
    children: Object,
  }
  preClass = TdClassNamePrefix('avatar')
  allChildrenList: any

  provide = { groupSize: undefined as any }

  install() {
    this.provide = { groupSize: this.props.size }
  }

  render(props: OmiProps<AvatarGroupProps, any>) {
    const { preClass } = this
    const { children, max, cascading, collapseAvatar } = props
    const childrenList = toArray(children)

    if (childrenList.length > 0) {
      this.allChildrenList = childrenList.map((child, index) =>
        cloneElement(child, { key: `avatar-group-item-${index}`, ...child.props }),
      )
    }
    const groupClass = classNames(`${preClass}-group`, this.className, {
      [`${preClass}--offset-right`]: cascading === 'right-up',
      [`${preClass}--offset-left`]: cascading === 'left-up',
    })

    const childrenCount = childrenList.length
    if (props.max && childrenCount > max) {
      const showList = this.allChildrenList.slice(0, max)
      const ellipsisAvatar = (
        <t-avatar class={`${preClass}__collapse`}>{parseTNode(collapseAvatar) || `+${childrenCount - max}`}</t-avatar>
      )
      showList.push(<div key="t-avatar__collapse">{ellipsisAvatar}</div>)
      return <div class={groupClass}>{showList}</div>
    }
    return <div class={groupClass}>{this.allChildrenList}</div>
  }
}
