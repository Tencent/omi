import { WeElement } from 'omi';
interface Props {
    z: number;
}
interface Data {
}
export default class Elevation extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        z: NumberConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
