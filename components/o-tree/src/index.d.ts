import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    data?: object;
}
export default class Tree extends WeElement<Props> {
    static css: any;
    static propTypes: {
        data: ObjectConstructor;
    };
    onNodeClick: (evt: any, node: any) => void;
    prevSelectedNode: any;
    onNodeArrowClick: () => void;
    renderNode(node: any, level: any): JSX.Element;
    render(props: any): JSX.Element;
}
export {};
