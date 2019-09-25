import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    nodes: object;
}
export default class Nav extends WeElement<Props> {
    static css: any;
    static propTypes: {
        nodes: ObjectConstructor;
    };
    _preSelected: any;
    toggle: (evt: any, node: any) => void;
    onNodeClick: (node: any) => void;
    getNodeById(id: any, nodes: any): any;
    _getNodeById(id: any, node: any): any;
    renderNode(node: any, level: any): JSX.Element;
    _getChildCount(node: any): number;
    render(props: any): JSX.Element;
}
export {};
