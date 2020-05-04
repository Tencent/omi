import { WeElement } from 'omi';
interface Props {
    value?: string;
    disabled?: boolean;
    type?: string;
    placeholder?: string;
    clearable?: boolean;
    size?: 'medium' | 'small' | 'mini';
    suffixIcon?: string;
    prefixIcon?: string;
    maxLength?: number;
    autoComplete?: string;
    block?: boolean;
}
export default class Input extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        type: string;
        autosize: boolean;
        rows: number;
        trim: boolean;
        autoComplete: string;
        block: boolean;
    };
    static propTypes: {
        disabled: BooleanConstructor;
        type: StringConstructor;
        placeholder: StringConstructor;
        clearable: BooleanConstructor;
        suffixIcon: StringConstructor;
        size: StringConstructor;
        prefixIcon: StringConstructor;
        maxLength: NumberConstructor;
        autoComplete: StringConstructor;
        block: BooleanConstructor;
    };
    _tempTagName: string;
    valueLength: number;
    handleBlur: () => void;
    handleFocus: () => void;
    handleChange: (evt: any) => void;
    handleInput: (evt: any) => void;
    focus(): void;
    blur(): void;
    clearInput: () => void;
    render(props: any): JSX.Element;
}
export {};
