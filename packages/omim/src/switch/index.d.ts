import { WeElement } from 'omi';
import { MDCSwitch, MDCSwitchFoundation } from '@material/switch';
interface Props {
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    value: string;
}
interface Data {
}
export default class Switch extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        label: StringConstructor;
        disabled: BooleanConstructor;
        checked: BooleanConstructor;
        value: StringConstructor;
    };
    static defaultProps: {};
    switchControl: MDCSwitch;
    switchFoundation: MDCSwitchFoundation;
    updated(): void;
    installed(): void;
    onInput: (evt: any) => void;
    render(props: any): JSX.Element[];
}
export {};
