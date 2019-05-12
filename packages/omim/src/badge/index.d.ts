import { WeElement } from 'omi';
import '../icon';
interface Props {
}
interface Data {
}
export default class Badge extends WeElement<Props, Data> {
    static css: any;
    data: {
        active: any;
    };
    installed(): void;
    uninstall(): void;
    render(props: any): JSX.Element;
}
export {};
