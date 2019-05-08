import { WeElement } from 'omi';
import { MDCSnackbar } from '@material/snackbar';
interface Props {
    show?: boolean;
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
    };
    snackbar: MDCSnackbar;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
