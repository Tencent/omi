import { WeElement } from 'omi';
import '../icon';
import '../theme.ts';
interface Props {
    dot?: boolean;
    content?: string;
    x?: number;
    y?: number;
}
export default class Badge extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        x: number;
        y: number;
    };
    static propTypes: {
        dot: BooleanConstructor;
        content: StringConstructor;
        x: NumberConstructor;
        y: NumberConstructor;
    };
    installed(): void;
    uninstall(): void;
    render(props: any): JSX.Element;
}
export {};
