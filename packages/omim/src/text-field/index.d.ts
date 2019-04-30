import { WeElement } from 'omi';
import { MDCTextField } from '@material/textfield/index';
interface Props {
    fullWidth: boolean;
    textarea: boolean;
    outlined: boolean;
    noLabel: boolean;
    showHelper: boolean;
    helperText: string;
    characterCounter: number[];
    label: '';
    required: boolean;
    pattern: RegExp;
    minLength: number;
    maxLength: number;
    min: number;
    max: number;
    step: number;
    rows: number;
    cols: number;
    value: string;
    disabled: boolean;
    useNativeValidation: boolean;
    valid: boolean;
    helperTextContent: string;
    leadingIconAriaLabel: string;
    trailingIconAriaLabel: string;
    leadingIconContent: string;
    trailingIconContent: string;
}
interface Data {
}
export default class TextField extends WeElement<Props, Data> {
    static defaultProps: {
        showHelper: boolean;
    };
    static css: any;
    mdc: MDCTextField;
    root: HTMLElement;
    installed(): void;
    focus: () => void;
    layout: () => void;
    uninstall(): void;
    refIt: (e: any) => void;
    render(props: any, data: any): JSX.Element[];
}
export {};
