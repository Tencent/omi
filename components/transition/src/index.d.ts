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
}
export default class Transition extends WeElement<Props> {
    static propTypes: {
        name: StringConstructor;
        leavingTime: NumberConstructor;
        autoRemove: BooleanConstructor;
        appear: BooleanConstructor;
    };
    static isLightDom: boolean;
    static defaultProps: {
        name: string;
    };
    _show: boolean;
    installed(): void;
    toggle(): void;
    callback: () => void;
    enter(): void;
    leave(): void;
    once(name: any, callback: any): void;
    render(): void;
}
export {};
