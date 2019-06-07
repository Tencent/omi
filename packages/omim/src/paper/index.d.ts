import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    elevation: number;
    square?: boolean;
}
interface Data {
}
export default class Paper extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        elevation: NumberConstructor;
        square: BooleanConstructor;
    };
    static defaultProps: {
        elevation: number;
    };
    render(props: any): JSX.Element;
}
export {};
