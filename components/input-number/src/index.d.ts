import { WeElement } from 'omi';
interface Props {
    value?: number;
    size?: 'medium' | 'small' | 'mini';
    right?: string;
    left?: string;
    disabled?: boolean;
    step?: number;
    max?: number;
    min?: number;
}
export default class InputNumber extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        value: number;
        size: string;
        right: string;
        left: string;
        step: number;
        disabled: boolean;
        max: number;
        min: number;
    };
    static propTypes: {
        value: NumberConstructor;
        size: StringConstructor;
        right: StringConstructor;
        left: StringConstructor;
        step: NumberConstructor;
        disabled: BooleanConstructor;
        max: NumberConstructor;
        min: NumberConstructor;
    };
    __$value: number;
    install(): void;
    _onGetValue: () => number;
    _onSetValue: (value: any) => void;
    handleInput: (evt: any) => void;
    add: (evt: any) => void;
    subtraction: (evt: any) => void;
    clearInput: () => void;
    render(props: any): JSX.Element;
}
export {};
