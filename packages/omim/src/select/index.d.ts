import { WeElement } from 'omi';
interface Props {
    label?: string;
    menu?: object;
}
interface Data {
}
export default class Select extends WeElement<Props, Data> {
    static css: any;
    static resetTheme(): void;
    static propTypes: {
        label: StringConstructor;
        menu: ObjectConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
