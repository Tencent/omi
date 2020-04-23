import { WeElement } from 'omi';
interface Props {
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    value: string;
    name?: string;
}
export default class Radio extends WeElement<Props> {
    static css: any;
    static propTypes: {
        label: StringConstructor;
        disabled: BooleanConstructor;
        checked: BooleanConstructor;
        value: StringConstructor;
        name: StringConstructor;
    };
    group: Radio[];
    installed(): void;
    isChecked: boolean;
    clickHandler: () => void;
    render(props: any): JSX.Element;
    getScopeRoot(current: any): any;
}
export {};
