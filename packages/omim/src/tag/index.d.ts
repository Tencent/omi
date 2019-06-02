import { WeElement } from 'omi';
import '../icon';
interface Props {
    type: string;
    active: boolean;
    size: string;
    icon: string;
    svgIcon: object;
}
interface Data {
}
export default class Tag extends WeElement<Props, Data> {
    static css: any;
    static resetTheme(): void;
    static propTypes: {
        type: StringConstructor;
        active: BooleanConstructor;
        size: StringConstructor;
        icon: StringConstructor;
        svgIcon: ObjectConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
