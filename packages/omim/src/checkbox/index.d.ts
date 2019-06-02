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
    static css: string;
    static resetTheme(): void;
    static propTypes: {
        label: StringConstructor;
        disabled: BooleanConstructor;
        indeterminate: BooleanConstructor;
        checked: BooleanConstructor;
        value: StringConstructor;
    };
    changeHandler: (e: any) => void;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
