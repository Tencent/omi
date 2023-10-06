import { h, tag, WeElement, OmiProps, classNames, cloneElement } from 'omi'
import { toArray } from 'lodash'
import style from './style/index'
import './avatar'
import { TdAvatarGroupProps } from './type'
import { StyledProps } from '../common'
import { parseTNode, TdClassNamePrefix } from '../utils'
import borderCss from './style/border.less'
import offsetLeftCss from './style/offset_left.less'
import offsetLeftZIndexCss from './style/offset_left_zIndex.less'
import offsetRightCss from './style/offset_right.less'
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
      this.allChildrenList = childrenList.map((child, index) => {
        let childrenCss = borderCss
        if (cascading === 'right-up' && index !== childrenList.length - 1) {
          childrenCss += offsetRightCss
        } else if (cascading === 'left-up' && index !== 0) {
          childrenCss += offsetLeftCss + offsetLeftZIndexCss
        } else if (cascading === 'left-up') {
          childrenCss += offsetLeftZIndexCss
        }

        return cloneElement(child, {
          key: `avatar-group-item-${index}`,
          css: childrenCss,
        })
      })
    }
    const groupClass = classNames(`${preClass}-group`, this.className, {
      [`${preClass}--offset-right`]: cascading === 'right-up',
      [`${preClass}--offset-left`]: cascading === 'left-up',
    })

    const childrenCount = childrenList.length
    if (props.max && childrenCount > max) {
      const showList = this.allChildrenList.slice(0, max)
      let childrenCss = borderCss
      if (cascading === 'left-up') {
        childrenCss += offsetLeftCss + offsetLeftZIndexCss
      }
      const ellipsisAvatar = (
        <t-avatar class={`${preClass}__collapse`} css={childrenCss}>
          {parseTNode(collapseAvatar) || `+${childrenCount - max}`}{' '}
        </t-avatar>
      )
      showList.push(<div key="t-avatar__collapse">{ellipsisAvatar}</div>)
      return <div class={groupClass}>{showList}</div>
    }
    return <div class={groupClass}>{this.allChildrenList}</div>
  }
}
