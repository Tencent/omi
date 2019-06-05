import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    show: boolean;
    x: number;
    y: number;
    direction: string;
    target: string | HTMLElement;
}
export default class Popover extends WeElement<Props, {}> {
    static css: any;
    static defaultProps: {
        x: number;
        y: number;
    };
    static propTypes: {
        show: BooleanConstructor;
        x: NumberConstructor;
        y: NumberConstructor;
        direction: StringConstructor;
        target: StringConstructor;
    };
    close: () => void;
    confirm: () => void;
    left: number;
    top: number;
    _docClickHandler: () => void;
    uninstall(): void;
    mouseDownHandler: (evt: any) => void;
    updated(): void;
    installed(): void;
    getScopeRoot(current: any): any;
    _setPosition(): void;
    render(props: any): JSX.Element;
}
export {};
