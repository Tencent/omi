import { WeElement } from 'omi';
interface Props {
    selectedColor: string;
    items: any[];
}
export default class BottomNav extends WeElement<Props> {
    static css: any;
    static defaultProps: {};
    static propTypes: {
        selectedColor: StringConstructor;
        items: ArrayConstructor;
    };
    clickHandler: (item: any) => void;
    _iconTag: any;
    render(props: any): JSX.Element;
}
export {};
