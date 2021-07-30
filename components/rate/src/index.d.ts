import { WeElement } from 'omi';
import '@omiu/o-icon';
interface Props {
    value?: Number;
    max?: Number;
    precision?: Number;
    disabled?: Boolean;
    readonly: Boolean;
    icon?: String;
    color?: String;
    view?: Number;
}
export default class Rate extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        size: number;
        value: number;
        max: number;
        precision: number;
        disabled: boolean;
        readonly: boolean;
        color: string;
        width: number;
    };
    static propTypes: {
        value: NumberConstructor;
        max: NumberConstructor;
        precision: NumberConstructor;
        disabled: BooleanConstructor;
        readonly: BooleanConstructor;
        icon: StringConstructor;
        color: StringConstructor;
        width: NumberConstructor;
    };
    state: any;
    install(): void;
    handleMousemove: (evt: any) => void;
    handleMouseleave: (evt: any) => void;
    submit(index: any): void;
    render(props: any): JSX.Element;
}
export {};
