import { WeElement } from 'omi';
import '../icon';
interface Props {
    defaultActive: string;
    width: string;
    align: 'start' | 'end' | 'center';
    useMinWidth: boolean;
}
interface Data {
}
export default class Tabs extends WeElement<Props, Data> {
    static css: any;
    data: {
        active: any;
        tabBar: any;
    };
    installed(): void;
    uninstall(): void;
    activateTab(prop: any): void;
    renderButton(vnode: any, activeProp: any): JSX.Element;
    render(props: any): JSX.Element;
}
export {};
