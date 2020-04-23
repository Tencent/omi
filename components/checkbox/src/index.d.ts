import { WeElement } from 'omi';
interface Props {
    disabled: boolean;
    checked: boolean;
    value: string;
    label: string;
    indeterminate: boolean;
}
export default class Table extends WeElement<Props> {
    static css: any;
    static propTypes: {
        label: StringConstructor;
        disabled: BooleanConstructor;
        indeterminate: BooleanConstructor;
        checked: BooleanConstructor;
        value: StringConstructor;
    };
    changeHandler: (e: any) => void;
    render(props: any): JSX.Element;
}
export {};
