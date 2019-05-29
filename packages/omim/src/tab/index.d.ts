import { WeElement } from 'omi';
import '../icon';
interface Props {
    defaultActive: string;
    width: string;
    align: 'start' | 'end' | 'center';
    useMinWidth: boolean;
    stacked: boolean;
}
interface Data {
}
export default class Tab extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    data: {
        active: any;
        tabBar: any;
    };
    static propTypes: {
        defaultActive: StringConstructor;
        width: StringConstructor;
        align: StringConstructor;
        useMinWidth: BooleanConstructor;
        stacked: BooleanConstructor;
    };
    installed(): void;
    uninstall(): void;
    activateTab(value: any): void;
    renderButton(vnode: any, activeProp: any): JSX.Element;
    render(props: any): JSX.Element;
}
export {};
