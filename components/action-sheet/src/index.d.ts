import { WeElement } from 'omi';
interface Props {
    type: string;
    menus: any[];
    actions: any[];
    show: boolean;
}
export default class ActionSheet extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        type: string;
        menus: any[];
        actions: any[];
        show: boolean;
    };
    static propTypes: {
        type: StringConstructor;
        menus: ArrayConstructor;
        actions: ArrayConstructor;
        show: BooleanConstructor;
    };
    renderMenuItem(): JSX.Element[];
    show(): void;
    hide(): void;
    renderActions(): JSX.Element[];
    handleMaskClick: (e: any) => void;
    render(): JSX.Element;
}
export {};
