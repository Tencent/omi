import { WeElement } from 'omi';
import '@omiu/transition';
interface Props {
    visible: boolean;
    title: String;
    width: String;
}
export default class Dialog extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        visible: boolean;
        width: string;
    };
    static propTypes: {
        visible: BooleanConstructor;
        title: StringConstructor;
        width: StringConstructor;
    };
    open(): void;
    handleMaskClick: () => void;
    close: () => void;
    onAfterLeave: () => void;
    render(props: any): JSX.Element;
}
export {};
