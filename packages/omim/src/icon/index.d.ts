import { WeElement } from 'omi';
interface Props {
    path?: string;
    paths?: object;
    scale?: number;
}
interface Data {
}
export default class Icon extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        scale: number;
    };
    static propTypes: {
        path: StringConstructor;
        paths: ObjectConstructor;
        scale: NumberConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
