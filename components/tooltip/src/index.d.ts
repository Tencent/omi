import { WeElement } from 'omi';
interface Props {
    content?: string;
    effect?: string;
    position?: string;
}
export default class Table extends WeElement<Props> {
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
    installed(): void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    isShow: boolean;
    render(props: any): JSX.Element;
}
export {};
