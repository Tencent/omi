import { WeElement } from 'omi';
import '../icon';
interface Props {
    chips: [{
        text: string;
        selected?: boolean;
        leading?: {
            icon: object;
            tabindex?: number;
            role?: string;
        };
        trailing?: {
            icon: object;
            tabindex?: number;
            role?: string;
        };
        checkmark: boolean;
    }];
    input?: boolean;
    choice?: boolean;
    filter?: boolean;
}
interface Data {
}
export default class chipSet extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        chips: ObjectConstructor;
        input: BooleanConstructor;
        choice: BooleanConstructor;
        filter: BooleanConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
