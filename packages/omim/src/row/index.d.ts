import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    cols: object;
    gutter?: number;
    justify?: string;
    align?: string;
    type?: string;
}
export default class Row extends WeElement<Props> {
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
