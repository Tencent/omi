import { WeElement } from 'omi';
import { MDCDismissibleDrawerFoundation } from '@material/drawer';
import '../icon';
import '../icon-button';
interface Props {
    frame?: boolean;
    dismissible?: boolean;
    dismissibleSmooth?: boolean;
    modal?: boolean;
    show?: boolean;
    heading?: string;
    subHeading?: string;
    lists?: object;
}
interface Data {
}
export default class Drawer extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static propTypes: {
        frame: BooleanConstructor;
        dismissible: BooleanConstructor;
        dismissibleSmooth: BooleanConstructor;
        modal: BooleanConstructor;
        show: BooleanConstructor;
        heading: StringConstructor;
        subHeading: StringConstructor;
        lists: ObjectConstructor;
    };
    static defaultProps: {};
    drawerFoundation: MDCDismissibleDrawerFoundation;
    listAll: any[];
    initShow: boolean;
    updated(): void;
    install(): void;
    installed(): void;
    onList: (evt: any) => void;
    render(props: any): JSX.Element;
}
export {};
