import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    total: number;
    half: boolean;
    value: number;
}
export default class Rate extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        value: number;
    };
    static propTypes: {
        value: NumberConstructor;
        half: BooleanConstructor;
        total: NumberConstructor;
        color: StringConstructor;
    };
    _current: number;
    _rect: any;
    _hover: boolean;
    onSelect: (evt: any) => void;
    onMouseMove: (evt: any) => void;
    base: HTMLElement;
    installed(): void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    _getClass: (i: any, current: any) => "_star _star-half " | "_star" | "_star _star-empty ";
    render(props: any): JSX.Element;
}
export {};
