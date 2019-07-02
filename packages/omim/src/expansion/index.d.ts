import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    expand: boolean;
}
interface Data {
}
export default class Expansion extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        expand: BooleanConstructor;
    };
    preHeight: number;
    receiveProps(): boolean;
    setAttribute(attr: any, value: any): void;
    removeAttribute(attr: any): void;
    install(): void;
    render(props: any): JSX.Element;
}
export {};
