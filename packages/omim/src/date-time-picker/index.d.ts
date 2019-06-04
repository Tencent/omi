import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    show?: boolean;
    type?: string;
    init?: string;
    past?: string;
    future?: string;
    lan?: string;
}
interface Data {
}
export default class DateTimePicker extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        type: string;
        show: boolean;
    };
    install(): void;
    static propTypes: {
        type: StringConstructor;
        show: BooleanConstructor;
        init: StringConstructor;
        past: StringConstructor;
        future: StringConstructor;
        lan: StringConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
