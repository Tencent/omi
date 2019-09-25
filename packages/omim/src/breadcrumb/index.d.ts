import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
}
export default class Breadcrumb extends WeElement<Props> {
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
