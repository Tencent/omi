import { WeElement } from 'omi';
import '@omiu/transition';
interface Props {
    type: string;
    menus: any[];
    actions: any[];
    visible: boolean;
}
export default class Dialog extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        type: string;
        menus: any[];
        actions: any[];
        visible: boolean;
    };
    static propTypes: {
        type: StringConstructor;
        menus: ArrayConstructor;
        actions: ArrayConstructor;
        visible: BooleanConstructor;
    };
    renderMenuItem(): JSX.Element[];
    open(): void;
    handleMaskClick: (e: any) => void;
    close: () => void;
    onAfterLeave: () => void;
    render(props: any): JSX.Element;
}
export {};
