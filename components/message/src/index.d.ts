import { WeElement } from 'omi';
interface Props {
    type?: 'success' | 'warning' | 'info' | 'error';
    message: string;
    showClose: boolean;
    center: boolean;
    duration: number;
}
export default class Message extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        duration: number;
    };
    static propTypes: {
        showClose: BooleanConstructor;
        type: StringConstructor;
        message: StringConstructor;
        center: BooleanConstructor;
        duration: NumberConstructor;
    };
    enter: boolean;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
