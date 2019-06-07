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
    appear?: boolean;
    show?: boolean;
    name: string;
    remove?: boolean;
}
interface Data {
}
export default class Transition extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        name: StringConstructor;
        appear: BooleanConstructor;
        show: BooleanConstructor;
        remove: BooleanConstructor;
    };
    static defaultProps: {
        name: string;
        appear: boolean;
        show: boolean;
    };
    install(): void;
    toggle(): void;
    callback: () => void;
    appear(): void;
    _tempNode: HTMLElement;
    enter(): void;
    leave(): void;
    once(name: any, callback: any): void;
    render(): JSX.Element;
}
export {};
