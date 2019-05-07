import { WeElement } from 'omi';
interface Props {
    label?: string;
}
interface Data {
}
export default class Select extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        scale: number;
    };
    static propTypes: {
        label: StringConstructor;
    };
    installed(): void;
    install(): void;
    render(props: any): JSX.Element;
}
export {};
