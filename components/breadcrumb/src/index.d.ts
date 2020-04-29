import { WeElement } from 'omi';
interface Props {
    split: string;
    items: any[];
}
export default class Breadcrumb extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        split: string;
    };
    static propTypes: {
        items: ArrayConstructor;
        split: StringConstructor;
    };
    _tempIcon: any;
    render(props: any): JSX.Element;
}
export {};
