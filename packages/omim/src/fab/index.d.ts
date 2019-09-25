import { WeElement } from 'omi';
import '../icon';
import '../theme.ts';
interface Props {
    ripple: boolean;
    mini: boolean;
    iconRight: boolean;
    icon: string;
}
export default class Fab extends WeElement<Props> {
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
