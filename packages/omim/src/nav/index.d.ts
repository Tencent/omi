import { WeElement } from 'omi';
interface Props {
    nodes: object;
}
interface Data {
}
export default class Nav extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        nodes: ObjectConstructor;
    };
    _preSelected: any;
    toggle: (evt: any, id: any, open: any) => void;
    onNodeClick: (id: any) => void;
    renderNode(node: any, level: any): JSX.Element;
    _getChildCount(node: any): number;
    render(props: any): JSX.Element;
}
export {};
