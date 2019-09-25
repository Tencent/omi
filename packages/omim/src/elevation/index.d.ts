import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    z: number;
}
export default class Elevation extends WeElement<Props> {
    static css: any;
    static propTypes: {
        z: NumberConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
