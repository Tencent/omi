import { WeElement } from 'omi';
interface Props {
    label?: string;
    menu?: object;
}
interface Data {
}
export default class Select extends WeElement<Props, Data> {
    static css: string;
    static resetTheme(): void;
    static propTypes: {
        label: StringConstructor;
        menu: ObjectConstructor;
    };
    installed(): void;
    install(): void;
    render(props: any): JSX.Element;
}
export {};
