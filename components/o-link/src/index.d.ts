import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
    disabled?: boolean;
    underline?: boolean;
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
    };
    render(props: any): JSX.Element;
}
export {};
