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
    static css: string;
    static defaultProps: {};
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
    onButtonClick: (evt: Event) => void;
    onIconButtonClick: (evt: Event) => void;
    render(props: any): JSX.Element;
}
export {};
