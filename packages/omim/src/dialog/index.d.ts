import { WeElement } from 'omi';
import { MDCDialog } from '@material/dialog';
import '../button';
interface Props {
    show?: boolean;
    scrollable?: boolean;
    title?: string;
    cancelButton?: object;
    confirmButton?: object;
}
interface Data {
}
export default class Dialog extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
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
    render(props: any): JSX.Element;
}
export {};
