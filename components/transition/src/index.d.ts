/**
 * o-transition element based on vue-transition
 * Tom Fales (@enlightenmentor)
 * Licensed under the MIT License
 * https://github.com/enlightenmentor/vue-transition/blob/master/LICENSE
 *
 * modified by dntzhang
 *
 */
import { WeElement } from 'omi';
interface Props {
    name: string;
    leavingTime?: number;
    autoRemove?: boolean;
    appear?: boolean;
    disappear?: boolean;
    delay?: number;
}
export default class Transition extends WeElement<Props> {
    static propTypes: {
        name: StringConstructor;
        leavingTime: NumberConstructor;
        autoRemove: BooleanConstructor;
        appear: BooleanConstructor;
        disappear: BooleanConstructor;
        delay: NumberConstructor;
    };
    static isLightDOM: boolean;
    static defaultProps: {
        name: string;
        delay: number;
    };
    _show: boolean;
    installed(): void;
    receiveProps(): void;
    toggle(): Promise<unknown>;
    callback: () => void;
    enter(): Promise<unknown>;
    leave(): Promise<unknown>;
    once(name: any, callback: any): void;
    render(): void;
}
export { };
