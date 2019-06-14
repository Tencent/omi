import { WeElement } from 'omi';
import '../list';
import '../theme.ts';
interface Props {
    left: object[];
    right: object[];
}
interface Data {
}
export default class TransferList extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {};
    leftToRight: () => void;
    rightToLeft: () => void;
    render(props: any): JSX.Element;
}
export {};
