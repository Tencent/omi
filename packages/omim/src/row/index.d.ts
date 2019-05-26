import { WeElement } from 'omi';
interface Props {
    cols: object;
    gutter: number;
}
interface Data {
}
export default class Row extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        cols: ObjectConstructor;
        gutter: NumberConstructor;
    };
    install(): void;
    render(props: any): JSX.Element;
}
export {};
