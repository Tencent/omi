import { WeElement } from 'omi';
interface Props {
    masonry: boolean;
    list: object;
}
interface Data {
}
export default class ImageList extends WeElement<Props, Data> {
    static css: any;
    static resetTheme(): void;
    static defaultProps: {};
    static propTypes: {
        masonry: BooleanConstructor;
        list: ObjectConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
