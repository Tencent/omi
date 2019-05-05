import { WeElement } from 'omi';
import '../icon';
interface Props {
    onClick: (...arg: any) => {};
    ripple: boolean;
}
interface Data {
}
export default class Button extends WeElement<Props, Data> {
    static css: any;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
