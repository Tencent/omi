import { WeElement } from 'omi';
interface Props {
    items: object;
}
interface Data {
}
export default class List extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static propTypes: {
        items: ObjectConstructor;
    };
    static defaultProps: {};
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
