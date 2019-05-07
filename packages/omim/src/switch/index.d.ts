import { WeElement } from 'omi';
interface Props {
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    value: string;
}
interface Data {
}
export default class Switch extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        label: StringConstructor;
        disabled: BooleanConstructor;
        checked: BooleanConstructor;
        value: StringConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element[];
}
export {};
