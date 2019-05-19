import { WeElement } from 'omi';
import '../icon';
interface Props {
    ripple: boolean;
    raised: boolean;
    dense: boolean;
    unelevated: boolean;
    outlined: boolean;
    svgIcon: object;
    icon: string;
}
interface Data {
}
export default class Button extends WeElement<Props, Data> {
    static css: string;
    static defaultProps: {
        ripple: boolean;
    };
    static propTypes: {
        ripple: BooleanConstructor;
        raised: BooleanConstructor;
        dense: BooleanConstructor;
        unelevated: BooleanConstructor;
        outlined: BooleanConstructor;
        svgIcon: ObjectConstructor;
        icon: StringConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
