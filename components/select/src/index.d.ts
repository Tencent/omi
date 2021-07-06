import { WeElement } from 'omi';
import '@omiu/popover';
interface Props {
    items: any[];
    active: boolean;
    value: string | any[];
    placeholder: string;
    size: 'big' | 'medium' | 'small' | 'mini';
    multiple: boolean;
}
export default class Select extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        value: string;
        size: string;
        multiple: boolean;
    };
    static propTypes: {
        items: ArrayConstructor;
        active: BooleanConstructor;
        value: StringConstructor;
        placeholder: StringConstructor;
        size: StringConstructor;
        multiple: BooleanConstructor;
    };
    onInputClick: () => void;
    onInputBlur: () => void;
    selectedIndex: number;
    selectedIndexMap: {};
    selectedItems: any[];
    onItemClick: (item: any, index: any, evt: any) => void;
    _refInput: any;
    inputHeight: any;
    resetInputHeight(): void;
    inputWidth: number;
    tags: any;
    resetInputWidth(): void;
    installed(): void;
    resetSize: () => void;
    uninstall(): void;
    render(props: any): JSX.Element;
}
export {};
