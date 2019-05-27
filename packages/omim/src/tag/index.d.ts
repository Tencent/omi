import { WeElement } from 'omi';
import '../icon';
interface Props {
    type: string;
    active: boolean;
    size: string;
    icon: object;
}
interface Data {
}
export default class Tag extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static propTypes: {
        type: StringConstructor;
        active: BooleanConstructor;
        size: StringConstructor;
        icon: ObjectConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
