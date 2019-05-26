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
export default class Row extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        cols: ObjectConstructor;
    };
    install(): void;
    render(props: any): JSX.Element;
}
export {};
