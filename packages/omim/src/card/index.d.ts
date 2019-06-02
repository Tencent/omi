import { WeElement } from 'omi';
import '../icon-button';
interface Props {
    width?: string;
    img?: string;
    title: string;
    subTitle?: string;
    content: string;
    buttons?: object;
    icons?: object;
}
interface Data {
}
export default class Card extends WeElement<Props, Data> {
    static css: any;
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
