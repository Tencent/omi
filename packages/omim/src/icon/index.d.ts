import { WeElement } from 'omi';
interface Props {
    path?: string;
    paths?: object;
    view?: number;
    scale?: number;
    color?: string;
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
    };
    render(props: any): JSX.Element;
}
export {};
