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
    navigation?: object;
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
        navigation: ObjectConstructor;
        actionItems: ObjectConstructor;
        scrollTarget: {
            new (): EventTarget;
            prototype: EventTarget;
        };
    };
    topAppBar: MDCTopAppBar;
    tagNum: Object;
    beforeUpdate(): void;
    updated(): void;
    installed(): void;
    setChildrenAttribute(): void;
    onNav: (evt: any) => void;
    onAction: (evt: any) => void;
    findPathAccessKey(evt: any): number;
    isArray(value: any): boolean;
    render(props: any): JSX.Element[];
}
export {};
