import { WeElement } from 'omi';
import { MDCDialog } from '@material/dialog';
import '../button';
import '../theme.ts';
interface Props {
    show?: boolean;
    scrollable?: boolean;
    title?: string;
    cancelButton?: object;
    confirmButton?: object;
}
declare class Dialog extends WeElement<Props> {
    static css: any;
    static confirm: any;
    static alert: any;
    static prompt: any;
    static propTypes: {
        show: BooleanConstructor;
        scrollable: BooleanConstructor;
        title: StringConstructor;
        cancelButton: ObjectConstructor;
        confirmButton: ObjectConstructor;
    };
    dialog: MDCDialog;
    updated(): void;
    installed(): void;
    onScrim: (e: any) => void;
    onCancel: (e: any) => void;
    onConfirm: (e: any) => void;
    _fire(type: any, e: any): void;
    render(props: any): JSX.Element;
}
export default Dialog;
