import { WeElement } from 'omi';
import '../icon';
interface Props {
    title: string;
    ripple: boolean;
    short: boolean;
    shortCollapsed: boolean;
    prominent: boolean;
    dense: boolean;
    fixed: boolean;
    navigationButton: object;
    actionItems: Array<object>;
}
interface Data {
}
export default class topAppBar extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        title: StringConstructor;
        ripple: BooleanConstructor;
        short: BooleanConstructor;
        shortCollapsed: BooleanConstructor;
        prominent: BooleanConstructor;
        dense: BooleanConstructor;
        fixed: BooleanConstructor;
        navigationButton: ObjectConstructor;
        actionItems: ArrayConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
