import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    buffer?: number;
    value?: number;
    indeterminate: boolean;
    reversed: boolean;
}
export default class LinearProgress extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        buffer: number;
        value: number;
    };
    static propTypes: {
        buffer: NumberConstructor;
        value: NumberConstructor;
        indeterminate: BooleanConstructor;
        reversed: BooleanConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
