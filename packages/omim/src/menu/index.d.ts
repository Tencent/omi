import { WeElement } from 'omi';
import { MDCMenu } from '@material/menu';
interface Props {
    label?: string;
}
interface Data {
}
export default class Menu extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {};
    static propTypes: {};
    menu: MDCMenu;
    installed(): void;
    install(): void;
    render(props: any): JSX.Element;
}
export {};
