import { WeElement } from 'omi';
import '@omiu/common/theme.ts';
interface Props {
    disabled?: boolean;
    type?: string;
    placeholder?: string;
    clearable?: boolean;
    size?: 'medium' | 'small' | 'mini';
    suffixIcon?: string;
    prefixIcon?: string;
    maxLength?: number;
    autoComplete?: string;
}
export default class Input extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        type: string;
        autosize: boolean;
        rows: number;
        trim: boolean;
        autoComplete: string;
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
    };
    _tempTagName: string;
    valueLength: number;
    clearInput: () => void;
    render(props: any): JSX.Element;
}
export {};
