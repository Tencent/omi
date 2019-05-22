import { WeElement } from 'omi';
import { MDCTopAppBar } from '@material/top-app-bar';
import '../icon';
import '../icon-button';
interface Props {
    heading?: string;
    short?: boolean;
    shortCollapsed?: boolean;
    prominent?: boolean;
    dense?: boolean;
    fixed?: boolean;
    adjust?: boolean;
    navigation?: object;
    navigationElement?: object;
    actionItems?: object;
    actionElement?: object;
    scrollTarget?: EventTarget;
    scrollTargetDrawer?: boolean;
}
interface Data {
}
export default class topAppBar extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        heading: StringConstructor;
        short: BooleanConstructor;
        shortCollapsed: BooleanConstructor;
        prominent: BooleanConstructor;
        dense: BooleanConstructor;
        fixed: BooleanConstructor;
        adjust: BooleanConstructor;
        navigation: ObjectConstructor;
        navigationElement: ObjectConstructor;
        actionItems: ObjectConstructor;
        actionElement: ObjectConstructor;
        scrollTarget: {
            new (): EventTarget;
            prototype: EventTarget;
        };
        scrollTargetDrawer: BooleanConstructor;
    };
    static defaultProps: {};
    topAppBar: MDCTopAppBar;
    updated(): void;
    installed(): void;
    isArray(value: any): boolean;
    onNavigation: (evt: Event) => void;
    onAction: (evt: any) => void;
    render(props: any): JSX.Element;
}
export {};
