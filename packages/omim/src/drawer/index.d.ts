import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    position?: 'left' | 'right' | 'top' | 'bottom';
    show?: boolean;
}
export default class Drawer extends WeElement<Props> {
    static css: any;
    static propTypes: {
        show: BooleanConstructor;
        position: StringConstructor;
    };
    static defaultProps: {};
    onMaskClick: () => void;
    render(props: any): JSX.Element;
    _getTransfrom(position: any): string;
}
export {};
