import { WeElement } from 'omi';
interface Props {
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
    disabled?: boolean;
    underline?: boolean;
    href?: string;
    target: string;
}
export default class Link extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        underline: boolean;
        disabled: boolean;
    };
    static propTypes: {
        type: StringConstructor;
        disabled: BooleanConstructor;
        underline: BooleanConstructor;
        href: StringConstructor;
        target: StringConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
