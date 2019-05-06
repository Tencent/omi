import { WeElement } from 'omi';
interface Props {
}
interface Data {
}
export default class LayoutGrid extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        scale: number;
    };
    static propTypes: {
        path: StringConstructor;
        paths: ObjectConstructor;
        scale: NumberConstructor;
    };
    install(): void;
    render(props: any): JSX.Element;
}
export {};
