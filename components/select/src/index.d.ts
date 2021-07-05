import { WeElement } from 'omi';
import '@omiu/popover';
interface Props {
    items: any[];
    active: boolean;
    value: string | any[];
    placeholder: string;
    size: 'big' | 'medium' | 'small' | 'mini';
}
export default class Select extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        value: string;
        size: string;
    };
    static propTypes: {
        items: ArrayConstructor;
        active: BooleanConstructor;
        value: StringConstructor;
        placeholder: StringConstructor;
        size: StringConstructor;
    };
    onInputClick: () => void;
    onInputBlur: () => void;
    selectedIndex: number;
    onItemClick: (item: any, index: any) => void;
    _refInput: any;
    inputHeight: any;
    resetInputHeight(): void;
    inputWidth: number;
    tags: any;
    resetInputWidth(): void;
    installed(): void;
    handleResize: () => void;
    uninstall(): void;
    render(props: any): JSX.Element;
}
export {};
