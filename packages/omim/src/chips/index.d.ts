import { WeElement } from 'omi';
interface Props {
    input?: boolean;
    choice?: boolean;
    filter?: boolean;
}
interface Data {
}
export default class chipSet extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        input: BooleanConstructor;
        choice: BooleanConstructor;
        filter: BooleanConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
