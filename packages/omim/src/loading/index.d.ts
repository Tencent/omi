import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    size?: number;
    color?: string;
}
interface Data {
}
export default class Loading extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        size: number;
    };
    static propTypes: {
        size: NumberConstructor;
        color: StringConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
