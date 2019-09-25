import { WeElement } from 'omi';
import '../icon';
import '../theme.ts';
interface Props {
    items: any[];
}
export default class BottomNav extends WeElement<Props> {
    static css: any;
    static defaultProps: {};
    static propTypes: {
        selectedColor: StringConstructor;
        items: ArrayConstructor;
    };
    installed(): void;
    clickHandler: (item: any) => void;
    render(props: any): JSX.Element;
}
export {};
