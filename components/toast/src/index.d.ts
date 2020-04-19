import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    label?: string;
    loading?: boolean;
    done?: boolean;
}
export default class Button extends WeElement<Props> {
    static css: any;
    static propTypes: {
        label: StringConstructor;
        loading: BooleanConstructor;
        done: BooleanConstructor;
    };
    render(props: any): JSX.Element[];
}
export {};
