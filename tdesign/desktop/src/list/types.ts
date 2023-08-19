/* eslint-disable */

import { TNode, TElement, SizeEnum } from '@src/common';


export type ListProps = {
  split?:Boolean
  stripe?:Boolean
  dragSort?:Boolean


  asyncLoading?:string | Function
  footer?:string | TNode
  header?:string | TNode


  layout?:string
  size?:string

  onLoadMore?: Function
  onScroll?: Function
}

export type ListItemProps = {
  /**
   * 操作栏
   */
   action?: String | TNode
   /**
    * 内容，同 content
    */
   children?: String | TNode
   /**
    * 内容
    */
   content?: String | TNode

   onClick?: Function
}

export type ListItemMetaProps = {
  /**
   * 列表项内容
   */
   description?: String | TNode
   /**
    * 列表项图片
    */
   image?: String | TNode
   /**
    * 列表项标题
    */
   title?: String | TNode
}
