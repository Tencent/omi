import { WeElement } from 'omi';
interface Props {
    label?: string;
    loading?: boolean;
    done?: boolean;
    duration: number;
    autoClose: boolean;
    show: boolean;
}
export default class Button extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        duration: number;
        autoClose: boolean;
        show: boolean;
    };
    static propTypes: {
        label: StringConstructor;
        loading: BooleanConstructor;
        done: BooleanConstructor;
        duration: NumberConstructor;
        autoClose: BooleanConstructor;
        show: BooleanConstructor;
    };
    fadeEnter: any;
    installed(): void;
    close(): void;
    render(props: any): JSX.Element[];
}
export {};
