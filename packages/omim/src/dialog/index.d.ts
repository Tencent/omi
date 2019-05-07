import { WeElement } from 'omi';
import '../button';
interface Props {
    show: boolean;
    scrollable: boolean;
    scrimcancel: boolean;
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
        scrimcancel: BooleanConstructor;
        title: StringConstructor;
        message: StringConstructor;
        cancelbutton: ObjectConstructor;
        confirmbutton: ObjectConstructor;
    };
    installed(): void;
    showDialog: boolean;
    onScrimCancel: (e: any) => void;
    render(props: any): JSX.Element;
}
export {};
