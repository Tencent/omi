import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    list?: any[];
    activeIndex: number;
    type?: 'card' | 'border-card';
    position?: 'left' | 'right' | 'top' | 'bottom';
    closable?: boolean;
}
export default class Tabs extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        position: string;
        closable: boolean;
    };
    static propTypes: {
        list: ArrayConstructor;
        activeIndex: NumberConstructor;
        type: StringConstructor;
        position: StringConstructor;
        closable: BooleanConstructor;
    };
    _x: any;
    _width: any;
    baseRect: any;
    onTabClick: (evt: any, index: any) => void;
    setActiveBar(ele: any, index: any): void;
    installed(): void;
    _tempTagName: string;
    render(props: any): JSX.Element;
}
export {};
