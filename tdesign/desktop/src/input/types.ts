import { HorizontalAlignEnum, SizeEnum, StatusEnum, TNode } from '@src/common'

export type InputProps = HTMLInputElement &
  HTMLTextAreaElement & {
    autoWidth: boolean
    showClearIconOnEmpty: boolean
    clearable: boolean
    align: HorizontalAlignEnum
    size: SizeEnum
    status: StatusEnum
    tips: TNode
    onChange: (value: any) => void
  }
