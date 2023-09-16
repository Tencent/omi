import { TNode } from '@src/common'

export type BadgeProps = {
    color?: string
    content?: string | TNode
    count?: string | number | TNode
    default?: string | TNode
    dot?: boolean
    maxCount?: number
    offset?: Array<string | number>
    shape?: 'circle' | 'round'
    showZero?: boolean
    size?: 'small' | 'medium'
}