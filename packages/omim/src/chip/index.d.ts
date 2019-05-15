import { WeElement } from 'omi';
interface Props {
    id?: string;
    selected?: boolean;
    shouldRemoveOnTrailingIconClick?: boolean;
}
interface Data {
}
export default class chip extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        id: StringConstructor;
        selected: BooleanConstructor;
        shouldRemoveOnTrailingIconClick: BooleanConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
