import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
}
interface Data {
}
export default class Breadcrumb extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        split: string;
    };
    static propTypes: {
        items: ObjectConstructor;
        split: StringConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
