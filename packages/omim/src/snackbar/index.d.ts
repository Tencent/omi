import { WeElement } from 'omi';
import { MDCSnackbar } from '@material/snackbar';
interface Props {
    show?: boolean;
    stacked?: boolean;
    msg: string;
    buttonText?: string;
    leading?: boolean;
}
interface Data {
}
export default class Snackbar extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        show: boolean;
    };
    static propTypes: {
        show: BooleanConstructor;
        stacked: BooleanConstructor;
        msg: StringConstructor;
        buttonText: StringConstructor;
        leading: BooleanConstructor;
    };
    snackbar: MDCSnackbar;
    installed(): void;
    updated(): void;
    render(props: any): JSX.Element;
}
export {};
