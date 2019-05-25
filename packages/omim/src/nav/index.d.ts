import { WeElement } from 'omi';
interface Props {
    checkbox?: boolean;
    node: object;
}
interface Data {
}
export default class Nav extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        checkbox: BooleanConstructor;
        node: ObjectConstructor;
    };
    _preSelected: any;
    toggle: (id: any, open: any) => void;
    onNodeClick: (id: any) => void;
    renderNode(node: any): JSX.Element;
    _getChildCount(node: any): number;
    render(props: any): JSX.Element;
}
export {};
