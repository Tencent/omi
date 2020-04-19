import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    list?: any[];
    activeIndex: number;
}
export default class Tabs extends WeElement<Props> {
    static css: any;
    static propTypes: {
        list: ArrayConstructor;
        activeIndex: NumberConstructor;
    };
    _x: any;
    _width: any;
    baseRect: any;
    onTabClick: (evt: any, index: any) => void;
    setActiveBar(ele: any, index: any): void;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
