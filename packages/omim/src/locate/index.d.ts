import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    to: string;
    direction: string;
    x: number;
    y: number;
    gutter: number;
}
interface Data {
}
export default class Locate extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        x: number;
        y: number;
        gutter: number;
    };
    static propTypes: {};
    getScopeRoot(current: any): any;
    install(): void;
    _setPosition(): void;
    updated(): void;
    render(props: any): JSX.Element;
}
export {};
