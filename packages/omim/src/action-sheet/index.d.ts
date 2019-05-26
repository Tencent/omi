import { WeElement } from 'omi';
interface Props {
    menus: any[];
    actions?: any[];
    onClose?: (evt: any) => void;
    show?: boolean;
    type: 'ios' | 'android';
}
export default class ActionSheet extends WeElement<Props, {}> {
    static defaultProps: {
        type: string;
        menus: any[];
        actions: any[];
        show: boolean;
    };
    static css: any;
    renderMenuItem(): JSX.Element[];
    actionClick: (item: any) => void;
    menuClick: (item: any) => void;
    renderActions(): JSX.Element[];
    handleMaskClick: (e: any) => void;
    render(): JSX.Element;
}
export {};
