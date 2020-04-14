import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    size?: 'medium' | 'small' | 'mini';
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    loading?: boolean;
    disabled?: boolean;
    icon?: string;
    autofocus?: boolean;
    nativeType?: 'button' | 'submit' | 'reset';
    block?: boolean;
}
export default class Button extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        size: string;
        plain: boolean;
        round: boolean;
        circle: boolean;
        loading: boolean;
        disabled: boolean;
        autofocus: boolean;
        nativeType: string;
        block: boolean;
    };
    static propTypes: {
        size: StringConstructor;
        type: StringConstructor;
        plain: BooleanConstructor;
        round: BooleanConstructor;
        circle: BooleanConstructor;
        loading: BooleanConstructor;
        disabled: BooleanConstructor;
        icon: StringConstructor;
        autofocus: BooleanConstructor;
        nativeType: StringConstructor;
        block: BooleanConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
