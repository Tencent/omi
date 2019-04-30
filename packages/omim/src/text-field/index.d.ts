import { WeElement } from 'omi';
import { MDCTextField } from '@material/textfield/index';
interface Props {
    placeholder: '';
    customCSS: string;
}
interface Data {
}
export default class TextField extends WeElement<Props, Data> {
    static css: any;
    textField: MDCTextField;
    root: HTMLElement;
    installed(): void;
    refIt: (e: any) => void;
    render(props: any, data: any): JSX.Element;
}
export {};
