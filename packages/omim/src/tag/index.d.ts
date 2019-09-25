import { WeElement } from 'omi';
import '../icon';
import '../theme.ts';
interface Props {
    type: string;
    active: boolean;
    size: string;
    icon: string;
    svgIcon: object;
}
export default class Tag extends WeElement<Props> {
    static css: any;
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
