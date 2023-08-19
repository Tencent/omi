import { HorizontalAlignEnum, SizeEnum, StatusEnum, TNode } from '@src/common'

export type InputProps = {
    autoWidth: boolean;
    showClearIconOnEmpty: boolean;
    clearable: boolean;
    align: HorizontalAlignEnum;
    size: SizeEnum;
    status: StatusEnum;
    tips: TNode;
    onChangeValue: (value: any) => void;
  } & HTMLInputElement
