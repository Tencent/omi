import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    items: object;
    singleSelection?: boolean;
    checkbox?: boolean;
    radio?: boolean;
    checkboxLeft?: boolean;
    radioLeft?: boolean;
    width?: number;
    height?: number;
    onItemClick?: (evt: CustomEvent) => void;
}
export default class List extends WeElement<Props> {
    static css: any;
    static propTypes: {
        items: ObjectConstructor;
        singleSelection: BooleanConstructor;
        checkbox: BooleanConstructor;
        radio: BooleanConstructor;
        checkboxLeft: BooleanConstructor;
        radioLeft: BooleanConstructor;
        width: NumberConstructor;
        height: NumberConstructor;
    };
    static defaultProps: {};
    installed(): void;
    _renderCheckbox(props: any, item: any): JSX.Element;
    _renderRadio(props: any, item: any): JSX.Element;
    render(props: any): JSX.Element;
}
export {};
