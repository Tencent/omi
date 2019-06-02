import { WeElement } from 'omi';
import { MDCTextField } from '@material/textfield/index';
import '../icon';
import '../theme.ts';
interface Props {
    type: 'date' | 'time' | 'color' | 'datetime-local';
    fullWidth: boolean;
    textarea: boolean;
    outlined: boolean;
    noLabel: boolean;
    showHelper: boolean;
    helperText: string;
    iconRight: boolean;
    counter: boolean;
    path: string;
    paths: string;
    label: string;
    required: boolean;
    pattern: string;
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
    static css: any;
    static defaultProps: {
        showHelper: boolean;
        type: string;
    };
    static propTypes: {
        fullWidth: BooleanConstructor;
        textarea: BooleanConstructor;
        outlined: BooleanConstructor;
        noLabel: BooleanConstructor;
        showHelper: BooleanConstructor;
        helperText: StringConstructor;
        iconRight: BooleanConstructor;
        counter: BooleanConstructor;
        path: StringConstructor;
        paths: StringConstructor;
        label: StringConstructor;
        required: BooleanConstructor;
        pattern: StringConstructor;
        minLength: NumberConstructor;
        maxLength: NumberConstructor;
        min: NumberConstructor;
        max: NumberConstructor;
        step: NumberConstructor;
        rows: NumberConstructor;
        cols: NumberConstructor;
        value: StringConstructor;
        disabled: BooleanConstructor;
        useNativeValidation: BooleanConstructor;
        valid: BooleanConstructor;
        helperTextContent: StringConstructor;
        leadingIconAriaLabel: StringConstructor;
        trailingIconAriaLabel: StringConstructor;
        leadingIconContent: StringConstructor;
        trailingIconContent: StringConstructor;
        leftIcon: StringConstructor;
        rightIcon: StringConstructor;
    };
    mdc: MDCTextField;
    root: HTMLElement;
    installed(): void;
    focus: () => void;
    layout: () => void;
    uninstall(): void;
    refIt: (e: any) => void;
    render(props: any): JSX.Element[];
}
export {};
