import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    list: object;
}
export default class Menu extends WeElement<Props> {
    static css: any;
    static defaultProps: {};
    static propTypes: {
        list: ObjectConstructor;
    };
    clickHandler: (item: any) => void;
    render(props: any): JSX.Element;
}
export {};
