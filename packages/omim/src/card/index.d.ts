import { WeElement } from 'omi';
import '../icon-button';
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
        buttons: ObjectConstructor;
        icons: ObjectConstructor;
    };
    btnClick: (evt: any, index: any) => void;
    iconClick: (evt: any, index: any) => void;
    render(props: any): JSX.Element;
}
export {};
