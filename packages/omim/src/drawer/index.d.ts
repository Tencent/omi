import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    position?: 'left' | 'right' | 'top' | 'bottom';
    show?: boolean;
}
interface Data {
}
export default class Drawer extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        show: BooleanConstructor;
        position: StringConstructor;
    };
    static defaultProps: {};
    onMaskClick: () => void;
    ctn: any;
    render(props: any): JSX.Element;
    _getTransfrom(position: any): string;
}
export {};
