import { WeElement } from 'omi';
interface Props {
    group?: boolean;
    disabled?: boolean;
    dense?: boolean;
    avatar?: boolean;
    twoLine?: boolean;
}
interface Data {
}
export default class List extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static propTypes: {
        group: BooleanConstructor;
        disabled: BooleanConstructor;
        dense: BooleanConstructor;
        avatar: BooleanConstructor;
        twoLine: BooleanConstructor;
    };
    static defaultProps: {};
    listAll: any[];
    install(): void;
    /**
     * Find the specified element name node (if there is a duplicate name node, only the first one is returned)
     * 查找指定元素名节点(如果有重复名称节点，只返回第一个)
     * @param nodes All nodes to be found (待查找的所有节点)
     * @param str Specify the node name (指定节点名称)
     */
    findElement(nodes: any, str: any): any;
    renderList(node: any): JSX.Element;
    groupNum: number;
    groupHeight: Object;
    onGroup: (evt: any) => void;
    render(props: any): JSX.Element;
}
export {};
