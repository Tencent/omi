import { WeElement } from 'omi';
interface Props {
    checkbox?: boolean;
}
interface Data {
}
export default class Tree extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        checkbox: BooleanConstructor;
        node: ObjectConstructor;
    };
    _preSelected: any;
    toggle: (id: any, open: any) => void;
    _check: (node: any, state: any) => void;
    onNodeClick: (id: any) => void;
    renderNode(node: any): JSX.Element;
    _isChecked(node: any, obj: any, tag: any): "indeterminate" | "checked" | "unchecked";
    _getChildCount(node: any): number;
    _fixChecked(node: any): void;
    render(props: any): JSX.Element;
}
export {};
