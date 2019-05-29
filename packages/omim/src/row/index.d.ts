import { WeElement } from 'omi';
interface Props {
    cols: object;
    gutter?: number;
    justify?: string;
    align?: string;
    type?: string;
}
interface Data {
}
export default class Row extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static propTypes: {
        cols: ObjectConstructor;
        gutter: NumberConstructor;
        justify: StringConstructor;
        align: StringConstructor;
        type: StringConstructor;
    };
    install(): void;
    _init(): void;
    render(props: any): JSX.Element;
}
export {};
