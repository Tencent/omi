import { WeElement } from 'omi';
import '../text-field';
import '../theme.ts';
interface Props {
    type: 'date' | 'time' | 'color' | 'datetime-local';
    label: string;
}
export default class Picker extends WeElement<Props> {
    static css: any;
    static defaultProps: {};
    static propTypes: {
        type: StringConstructor;
        label: StringConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
