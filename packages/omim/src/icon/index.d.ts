import { WeElement } from 'omi';
interface Props {
    onClick: (...arg: any) => {};
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
