import { WeElement } from 'omi';
interface Props {
}
interface Data {
}
export default class Card extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static propTypes: {
        width: StringConstructor;
        img: StringConstructor;
        title: StringConstructor;
        subTitle: StringConstructor;
        content: StringConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
