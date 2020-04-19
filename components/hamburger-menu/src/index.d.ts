import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    active?: boolean;
    ariaLabel?: string;
    color?: string;
}
export default class Button extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        active: boolean;
        ariaLabel: string;
        color: string;
    };
    static propTypes: {
        active: BooleanConstructor;
        ariaLabel: StringConstructor;
        color: StringConstructor;
    };
    onClick: () => void;
    render(props: any): JSX.Element;
}
export {};
