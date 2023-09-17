import { TNode, SizeEnum } from "@src/common";

export interface RadioOptionObj {
    label?: string | TNode
    value?: string | number | boolean
    disabled?: boolean
}

export type RadioOption = string | number | RadioOptionObj
export type RadioValue = string | number | boolean
export type RadioVariant = 'outline' | 'primary-filled' | 'default-filled'

export type RadioProps = {
    allowUncheck?:boolean
    checked?:boolean
    defaultChecked?:boolean
    default?:string | TNode
    disabled?:boolean
    label?:string | TNode
    name?:string
    value?:RadioValue
    onChange?: (checked: boolean, context: { e: Event }) => void
    onClick?: (context: { e: MouseEvent }) => void
}

export type RadioGroupProps = {
    allowUncheck?: boolean
    disabled?: boolean
    name?: string
    options?: Array<RadioOption>
    size?:SizeEnum
    value?:RadioValue
    defaultValue?:RadioValue
    variant?: RadioVariant
    onChange?: (value: RadioValue, context: { e: Event }) => void
}