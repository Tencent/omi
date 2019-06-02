import { WeElement } from 'omi';
import '../theme.ts';
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
    static css: any;
    static propTypes: {
        cols: ObjectConstructor;
        gutter: NumberConstructor;
        justify: StringConstructor;
        align: StringConstructor;
        type: StringConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
