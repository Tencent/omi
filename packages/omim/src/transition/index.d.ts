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
    removable?: boolean;
    removed?: boolean;
}
export default class Transition extends WeElement<Props> {
    static css: string;
    static propTypes: {
        name: StringConstructor;
        appear: BooleanConstructor;
        show: BooleanConstructor;
        removable: BooleanConstructor;
    };
    static defaultProps: {
        name: string;
        appear: boolean;
        show: boolean;
    };
    installed(): void;
    toggle(): void;
    receiveProps(props: any): void;
    callback: () => void;
    appearing(): void;
    _tempNode: HTMLElement;
    enter(): void;
    leave(): void;
    once(name: any, callback: any): void;
    render(props: any): JSX.Element;
}
export {};
