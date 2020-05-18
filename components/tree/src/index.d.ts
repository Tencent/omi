import { WeElement } from 'omi';
interface Props {
    data?: any[];
    padding: number;
}
export default class Tree extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        padding: number;
    };
    static propTypes: {
        data: ArrayConstructor;
        padding: NumberConstructor;
    };
    onNodeClick: (evt: any, node: any) => void;
    _tempTagName: string;
    prevSelectedNode: any;
    onNodeArrowClick: (node: any) => void;
    onContextMenu: (evt: any, node: any) => void;
    onActionIcon: (evt: any, icon: any) => void;
    fold(): void;
    _fold(node: any): void;
    onEditInputBlur: () => void;
    onEditInputChange: (evt: any) => void;
    editInput: any;
    prevBlurSelectedNode: any;
    installed(): void;
    renderNode(node: any, level: any): JSX.Element;
    render(props: any): JSX.Element;
}
export {};
