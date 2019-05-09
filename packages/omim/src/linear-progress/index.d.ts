import { WeElement } from 'omi';
interface Props {
    buffer?: number;
    value?: number;
    indeterminate: boolean;
    reversed: boolean;
}
interface Data {
}
export default class LinearProgress extends WeElement<Props, Data> {
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
