import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    path?: string;
    paths?: object;
    view?: number;
    scale?: number;
    color?: string;
    rotate?: boolean;
}
interface Data {
}
export default class Icon extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        view: number;
        scale: number;
    };
    static propTypes: {
        path: StringConstructor;
        paths: ObjectConstructor;
        view: NumberConstructor;
        scale: NumberConstructor;
        color: StringConstructor;
        rotate: BooleanConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
