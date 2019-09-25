import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    checkbox?: boolean;
    node: object;
}
export default class Tree extends WeElement<Props> {
    static css: any;
    static propTypes: {
        checkbox: BooleanConstructor;
        node: ObjectConstructor;
    };
    _preSelected: any;
    toggle: (id: any, open: any, node: any) => void;
    _check: (node: any, state: any) => void;
    checkAll(node: any, checked: any): void;
    onNodeClick: (node: any) => void;
    getNodeById(id: any, node: any): any;
    renderNode(node: any): JSX.Element;
    _isChecked(node: any, obj: any, tag: any): "checked" | "indeterminate" | "unchecked";
    _getChildCount(node: any): number;
    render(props: any): JSX.Element;
}
export {};
