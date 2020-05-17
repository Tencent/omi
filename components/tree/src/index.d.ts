import { WeElement } from 'omi';
interface Props {
    data?: any[];
}
export default class Tree extends WeElement<Props> {
    static css: any;
    static propTypes: {
        data: ArrayConstructor;
    };
    onNodeClick: (evt: any, node: any) => void;
    _tempTagName: string;
    prevSelectedNode: any;
    onNodeArrowClick: (node: any) => void;
    onContextMenu: (evt: any, node: any) => void;
    onActionIcon: (evt: any, icon: any) => void;
    fold(): void;
    _fold(node: any): void;
    renderNode(node: any, level: any): JSX.Element;
    render(props: any): JSX.Element;
}
export {};
