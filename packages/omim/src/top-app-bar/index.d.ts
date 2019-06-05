import { WeElement } from 'omi';
import { MDCTopAppBar } from '@material/top-app-bar';
import '../theme.ts';
interface Props {
    heading?: string;
    short?: boolean;
    shortCollapsed?: boolean;
    prominent?: boolean;
    dense?: boolean;
    fixed?: boolean;
    adjust?: boolean;
    bottom: boolean;
    navigations?: object;
    actionItems?: object;
    scrollTarget?: EventTarget;
    scrollTargetId?: string;
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
        bottom: BooleanConstructor;
        navigations: ObjectConstructor;
        actionItems: ObjectConstructor;
        scrollTarget: {
            new (): EventTarget;
            prototype: EventTarget;
        };
        scrollTargetId: StringConstructor;
    };
    topAppBar: MDCTopAppBar;
    tagNum: Object;
    other: boolean;
    beforeUpdate(): void;
    updated(): void;
    installed(): void;
    _setChildrenAttribute(): void;
    onNavigation: (evt: any) => void;
    onAction: (evt: any) => void;
    _findPathAccessKey(evt: any): any;
    render(props: any): JSX.Element[];
}
export {};
