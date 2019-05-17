import { WeElement } from 'omi';
import { MDCTopAppBar } from '@material/top-app-bar';
import '../icon';
interface Props {
    heading?: string;
    short?: boolean;
    shortCollapsed?: boolean;
    prominent?: boolean;
    dense?: boolean;
    fixed?: boolean;
    adjust?: boolean;
    navigationIcon?: object;
    actionItems?: object;
    scrollTarget?: EventTarget;
}
interface Data {
}
export default class topAppBar extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        heading: StringConstructor;
        short: BooleanConstructor;
        shortCollapsed: BooleanConstructor;
        prominent: BooleanConstructor;
        dense: BooleanConstructor;
        fixed: BooleanConstructor;
        adjust: BooleanConstructor;
        navigationIcon: ObjectConstructor;
        actionItems: ObjectConstructor;
        scrollTarget: {
            new (): EventTarget;
            prototype: EventTarget;
        };
    };
    static defaultProps: {};
    topAppBar: MDCTopAppBar;
    update(): void;
    installed(): void;
    onNavigation: (evt: Event) => void;
    onAction: (evt: any) => void;
    render(props: any): JSX.Element;
}
export {};
