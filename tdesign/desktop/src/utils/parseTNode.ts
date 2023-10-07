import { WeElement } from 'omi'
import isFunction from 'lodash/isFunction'
import { TNode, OmiNode } from '../common'
import log from '../_common/js/log'

// 解析 TNode 数据结构
export function parseTNode(
  renderNode: TNode | TNode<any> | undefined,
  renderParams?: any,
  defaultNode?: OmiNode,
): OmiNode {
  let node: OmiNode = null

  if (typeof renderNode === 'function') {
    node = renderNode(renderParams)
  } else {
    node = renderNode ?? defaultNode
  }
  return node as OmiNode
}
