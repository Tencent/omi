import { WeElement } from 'omi';
interface Props {
    checkbox?: boolean;
    node: object;
}
interface Data {
}
export default class Tree extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static propTypes: {
        checkbox: BooleanConstructor;
        node: ObjectConstructor;
    };
    _preSelected: any;
    toggle: (id: any, open: any) => void;
    _check: (node: any, state: any) => void;
    onNodeClick: (id: any) => void;
    renderNode(node: any): JSX.Element;
    _isChecked(node: any, obj: any, tag: any): "checked" | "indeterminate" | "unchecked";
    _getChildCount(node: any): number;
    render(props: any): JSX.Element;
}
export {};
