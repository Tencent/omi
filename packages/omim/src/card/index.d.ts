import { WeElement } from 'omi';
import '../icon-button';
import '../theme.ts';
interface Props {
    width?: string;
    img?: string;
    title: string;
    subTitle?: string;
    content: string;
    buttons?: object;
    icons?: object;
    topTitle?: boolean;
    overImg?: boolean;
}
export default class Card extends WeElement<Props> {
    static css: any;
    static propTypes: {
        width: StringConstructor;
        img: StringConstructor;
        title: StringConstructor;
        subTitle: StringConstructor;
        content: StringConstructor;
        buttons: ObjectConstructor;
        icons: ObjectConstructor;
        topTitle: BooleanConstructor;
        overImg: BooleanConstructor;
    };
    btnClick: (evt: any, index: any) => void;
    iconClick: (evt: any, index: any) => void;
    render(props: any): JSX.Element;
}
export {};
