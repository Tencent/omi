/**
 * m-transition element based on vue-transition
 * Tom Fales (@enlightenmentor)
 * Licensed under the MIT License
 * https://github.com/enlightenmentor/vue-transition/blob/master/LICENSE
 *
 * modified by dntzhang
 *
 */
import { WeElement } from 'omi';
interface Props {
    appear: boolean;
    active?: boolean;
    name: string;
}
interface Data {
}
export default class Transition extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        name: StringConstructor;
        appear: BooleanConstructor;
        active: BooleanConstructor;
    };
    static defaultProps: {
        name: string;
        appear: boolean;
        active: boolean;
    };
    install(): void;
    toggle(): void;
    callback: () => void;
    appear(): void;
    enter(): void;
    leave(): void;
    once(name: any, callback: any): void;
    render(): JSX.Element;
}
export {};
