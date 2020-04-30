import { WeElement } from 'omi';
interface Props {
    appear?: boolean;
    show?: boolean;
    name: string;
    remove?: boolean;
    delay?: number;
}
export default class TransitionGroup extends WeElement<Props> {
    static propTypes: {
        name: StringConstructor;
        appear: BooleanConstructor;
        show: BooleanConstructor;
        remove: BooleanConstructor;
        delay: NumberConstructor;
    };
    static defaultProps: {
        name: string;
        appear: boolean;
        show: boolean;
    };
    install(): void;
    installed(): void;
    appearing(el: any, index: any): void;
    callback: () => void;
    receiveProps(): boolean;
    once(name: any, callback: any): void;
    elOnce(el: any, name: any, callback: any): void;
    render(props: any): any;
}
export {};
