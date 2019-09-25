import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    multipleSelection?: boolean;
    items: any[];
}
export default class ToggleButtons extends WeElement<Props> {
    static defaultProps: {};
    static propTypes: {
        multipleSelection: BooleanConstructor;
        items: ArrayConstructor;
    };
    static css: any;
    installed(): void;
    clickHandler: (item: any) => void;
    render(props: any): JSX.Element;
}
export {};
