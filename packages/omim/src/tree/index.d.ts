import { WeElement } from 'omi';
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
export default class Tree extends WeElement<Props, Data> {
    static css: string;
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
