import { WeElement } from 'omi';
import '../icon';
import '../theme.ts';
interface Props {
    chips: [{
        text: string;
        selected?: boolean;
        leading?: {
            icon: object | string;
        };
        trailing?: {
            icon: object | string;
            role?: string;
            tabindex?: number;
        };
        checkmark: boolean;
    }];
    input?: boolean;
    choice?: boolean;
    filter?: boolean;
    ripple?: boolean;
}
interface Data {
}
export default class Chips extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        ripple: boolean;
    };
    static propTypes: {
        ripple: BooleanConstructor;
        chips: ObjectConstructor;
        input: BooleanConstructor;
        choice: BooleanConstructor;
        filter: BooleanConstructor;
    };
    trailingClickHandle: (index: any) => void;
    chipClickHandle: (index: any) => void;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
