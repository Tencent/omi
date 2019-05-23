import { WeElement } from 'omi';
interface Props {
    group?: boolean;
    subheader?: boolean;
    disabled?: boolean;
    dense?: boolean;
    avatar?: boolean;
    twoLine?: boolean;
}
interface Data {
}
export default class Switch extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        group: BooleanConstructor;
        subheader: BooleanConstructor;
        disabled: BooleanConstructor;
        dense: BooleanConstructor;
        avatar: BooleanConstructor;
        twoLine: BooleanConstructor;
    };
    static defaultProps: {};
    listAll: any[];
    install(): void;
    renderList(node: any): JSX.Element;
    render(props: any): JSX.Element;
}
export {};
