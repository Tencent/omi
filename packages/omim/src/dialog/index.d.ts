import { WeElement } from 'omi';
import '../button';
interface Props {
    show: boolean;
    scrollable: boolean;
    title: string;
    message: string;
    cancelbutton: object;
    confirmbutton: object;
}
interface Data {
}
export default class Dialog extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        show: BooleanConstructor;
        scrollable: BooleanConstructor;
        title: StringConstructor;
        message: StringConstructor;
        cancelbutton: ObjectConstructor;
        confirmbutton: ObjectConstructor;
    };
    installed(): void;
    stringToHtml: (str: any) => any;
    render(props: any): JSX.Element;
}
export {};
