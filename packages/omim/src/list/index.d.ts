import { WeElement } from 'omi';
interface Props {
    items: object;
    singleSelection: boolean;
    checkbox: boolean;
    radio: boolean;
    onItemClick: (evt: CustomEvent) => void;
}
interface Data {
}
export default class List extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static propTypes: {
        items: ObjectConstructor;
        singleSelection: BooleanConstructor;
        checkbox: BooleanConstructor;
        radio: BooleanConstructor;
    };
    static defaultProps: {};
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
