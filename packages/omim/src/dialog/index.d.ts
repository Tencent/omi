import { WeElement } from 'omi';
import '../icon';
import '../button';
interface Props {
    show: boolean;
    scrollable: boolean;
    title: string;
    message: string;
    cancelButton: object;
    confirmButton: object;
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
        cancelButton: ObjectConstructor;
        confirmButton: ObjectConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
