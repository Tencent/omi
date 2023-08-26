import { SizeEnum, TNode, TElement } from '../common'

export type IconSVGProps = {
    loadDefaultIcons?: boolean
    name?: string
    size?: string | SizeEnum
    style?: string
    url?: string | Array<string>
    onClick?: (context: { e: MouseEvent }) => void
}

export type IconfontProps = {
    loadDefaultIcons?: boolean
    name?: string
    size?: string | SizeEnum
    style?: string
    tag?: TElement
    url?: string | Array<string>
    onClick?: (context: { e: MouseEvent }) => void
}