import { WeElement } from 'omi';
import { MDCDrawer, MDCDismissibleDrawerFoundation } from '@material/drawer';
import '../icon';
interface Props {
    dismissible: boolean;
    modal: boolean;
    removeAnimation: boolean;
    show: boolean;
    heading: string;
    subHeading: string;
}
interface Data {
}
export default class Drawer extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        dismissible: BooleanConstructor;
        modal: BooleanConstructor;
        removeAnimation: BooleanConstructor;
        show: BooleanConstructor;
        heading: StringConstructor;
        subHeading: StringConstructor;
    };
    static defaultProps: {};
    deawer: MDCDrawer;
    drawerFoundation: MDCDismissibleDrawerFoundation;
    updated(): void;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
