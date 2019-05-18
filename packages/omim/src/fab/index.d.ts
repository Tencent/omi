import { WeElement } from 'omi';
import '../icon';
interface Props {
    ripple: boolean;
    mini: boolean;
    iconRight: boolean;
    icon: string;
}
interface Data {
}
export default class Fab extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        ripple: BooleanConstructor;
        mini: BooleanConstructor;
        iconRight: BooleanConstructor;
        icon: StringConstructor;
    };
    install(): void;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
