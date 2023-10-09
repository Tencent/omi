import { WeElement } from 'omi';
interface Props {
    name: string;
    leavingTime?: number;
    autoRemove?: boolean;
    delay?: number;
}
export default class TransitionGroup extends WeElement<Props> {
    static propTypes: {
        name: StringConstructor;
        leavingTime: NumberConstructor;
        autoRemove: BooleanConstructor;
        delay: NumberConstructor;
    };
    static isLightDOM: boolean;
    static defaultProps: {
        name: string;
    };
    transitionTarget: any;
    installed(): void;
    callback: () => void;
    enter(node: any, index: any): void;
    leave(node: any, index: any): void;
    once(name: any, callback: any): void;
    elOnce(el: any, name: any, callback: any): void;
    update(parent: any): void;
    render(): void;
}
export { };
