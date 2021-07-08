import { WeElement } from 'omi';
import '@omiu/button';
interface Props {
    content?: string;
    effect?: string;
    position?: string;
}
export default class ToolTip extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        content: string;
        effect: string;
        position: string;
    };
    static propTypes: {
        content: StringConstructor;
        effect: StringConstructor;
        position: StringConstructor;
    };
    popEl: any;
    refEl: any;
    install(): void;
    cancel: () => void;
    confirm: () => void;
    showConfirm: (evt: any) => void;
    isShow: boolean;
    render(props: any): JSX.Element;
}
export {};
