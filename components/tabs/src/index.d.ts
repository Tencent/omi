import { WeElement } from 'omi';
interface Props {
    list?: any[];
    activeIndex: number;
    type?: 'card' | 'border-card';
    position?: 'left' | 'right' | 'top' | 'bottom';
    closable?: boolean;
    addable?: boolean;
}
export default class Tabs extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        position: string;
        closable: boolean;
        addable: boolean;
    };
    static propTypes: {
        list: ArrayConstructor;
        activeIndex: NumberConstructor;
        type: StringConstructor;
        position: StringConstructor;
        closable: BooleanConstructor;
        addable: BooleanConstructor;
    };
    _x: any;
    _width: any;
    baseRect: any;
    onTabClick: (evt: any, index: any) => void;
    setActiveBar(ele: any, index: any): void;
    install(): void;
    installed(): void;
    removeTab(index: any): void;
    addTab(tab: any): void;
    onAddIconClick(): void;
    _tempTagName: string;
    render(props: any): JSX.Element;
}
export {};
