import { TElement, TNode, ThemeCommon } from "@src/common"

export type AlertProps = {
  className: String
  style: String
  close: TNode
  icon: TNode
  maxLine: Number
  message: TNode | string | string[]
  operation: TElement
  theme: "success" | "info" | "warning" | "error"
  title: String
  onClose: Function
  onClosed: Function
}
