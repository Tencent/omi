import { WeElement } from 'omi';
import '../icon';
interface Props {
    title: string;
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
        short: BooleanConstructor;
        shortCollapsed: BooleanConstructor;
        prominent: BooleanConstructor;
        dense: BooleanConstructor;
        fixed: BooleanConstructor;
        navigationButton: ObjectConstructor;
        actionItems: ArrayConstructor;
    };
    installed(): void;
    onNavigation: (evt: Event) => void;
    onAction: (evt: any) => void;
    render(props: any): JSX.Element;
}
export {};
