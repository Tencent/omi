import { WeElement } from 'omi';
import '../icon';
interface Props {
    ripple: boolean;
    raised: boolean;
    dense: boolean;
    unelevated: boolean;
    outlined: boolean;
    icon: object;
}
interface Data {
}
export default class Button extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        ripple: BooleanConstructor;
        raised: BooleanConstructor;
        dense: BooleanConstructor;
        unelevated: BooleanConstructor;
        outlined: BooleanConstructor;
        icon: ObjectConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
