import { WeElement } from 'omi';
import '../icon';
import '../theme.ts';
interface Props {
    ripple: boolean;
    mini: boolean;
    iconRight: boolean;
    icon: string;
}
interface Data {
}
export default class Fab extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        ripple: BooleanConstructor;
        mini: BooleanConstructor;
        iconRight: BooleanConstructor;
        icon: StringConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
