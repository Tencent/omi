import { WeElement } from 'omi';
interface Props {
}
interface Data {
}
export default class Breadcrumb extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static defaultProps: {
        split: string;
    };
    static propTypes: {
        items: ObjectConstructor;
        split: StringConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
