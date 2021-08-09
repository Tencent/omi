import { WeElement } from 'omi';
interface Props {
    value?: string;
    size?: 'medium' | 'small' | 'mini';
    style?: 'justify' | 'right' | 'left';
    disabled?: boolean;
    step?: number;
    strictly?: boolean;
    max?: number;
    min?: number;
    precision?: number;
}
export default class InputNumber extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        value: string;
        size: string;
        style: string;
        step: number;
        strictly: boolean;
        disabled: boolean;
        max: number;
        min: number;
        precision: number;
    };
    static propTypes: {
        value: StringConstructor;
        size: StringConstructor;
        style: StringConstructor;
        step: NumberConstructor;
        strictly: BooleanConstructor;
        disabled: BooleanConstructor;
        max: NumberConstructor;
        min: NumberConstructor;
        precision: NumberConstructor;
    };
    __$value: number;
    preValue: number;
    install(): void;
    _onGetValue: () => string;
    valueAdd: number;
    valueSub: number;
    inputErro: boolean;
    _onSetValue: (value: any) => void;
    handleInput: (evt: any) => void;
    handleChange: (evt: any) => void;
    add: () => void;
    subtraction: () => void;
    render(props: any): JSX.Element;
}
export {};
