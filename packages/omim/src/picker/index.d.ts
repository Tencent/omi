import { WeElement } from 'omi';
import '../text-field';
interface Props {
    type: 'date' | 'time' | 'color' | 'datetime-local';
}
interface Data {
}
export default class MPicker extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static defaultProps: {
        type: StringConstructor;
    };
    static propTypes: {};
    render(props: any): JSX.Element;
}
export {};
