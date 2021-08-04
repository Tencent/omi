import { WeElement } from 'omi';
interface Props {
    value?: number;
    size?: 'medium' | 'small' | 'mini';
    right?: string;
    left?: string;
    disabled?: boolean;
    step?: number;
    stepStrict?: boolean;
}
export default class InputNumber extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        value: number;
        size: string;
        width: string;
        right: string;
        left: string;
        step: number;
        stepStrict: boolean;
    };
    static propTypes: {
        value: NumberConstructor;
        size: StringConstructor;
        width: StringConstructor;
        right: StringConstructor;
        left: StringConstructor;
    };
    __$value: number;
    install(): void;
    _onGetValue: () => number;
    _onSetValue: (value: any) => void;
    handleInput: (evt: any) => void;
    handleChange: (evt: any) => void;
    handleBlur: () => void;
    handleFocus: () => void;
    focus(): void;
    blur(): void;
    add: (evt: any) => void;
    subtraction: (evt: any) => void;
    render(props: any): JSX.Element;
}
export {};
