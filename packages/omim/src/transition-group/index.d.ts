import { WeElement } from 'omi';
interface Props {
    appear?: boolean;
    show?: boolean;
    name: string;
    remove?: boolean;
}
interface Data {
}
export default class TransitionGroup extends WeElement<Props, Data> {
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
    callback: () => void;
    receiveProps(): boolean;
    once(name: any, callback: any): void;
    elOnce(el: any, name: any, callback: any): void;
    render(props: any): any;
}
export {};
