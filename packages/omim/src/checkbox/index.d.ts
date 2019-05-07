import { WeElement } from 'omi';
interface Props {
    label?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    checked?: boolean;
    value: string;
}
interface Data {
}
export default class Checkbox extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        label: StringConstructor;
        disabled: BooleanConstructor;
        indeterminate: BooleanConstructor;
        checked: BooleanConstructor;
        value: StringConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
