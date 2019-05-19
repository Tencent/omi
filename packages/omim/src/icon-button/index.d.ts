import { WeElement } from 'omi';
interface Props {
    ripple?: boolean;
    toggle?: object;
    icons: object;
    icon: string;
    imgs: object;
    svg: object;
    color: string;
    disabled: boolean;
}
interface Data {
}
export default class IconButton extends WeElement<Props, Data> {
    static css: string;
    static defaultProps: {
        ripple: boolean;
    };
    static propTypes: {
        ripple: BooleanConstructor;
        toggle: ObjectConstructor;
        icons: ObjectConstructor;
        icon: StringConstructor;
        imgs: ObjectConstructor;
        svg: ObjectConstructor;
        color: StringConstructor;
        disabled: BooleanConstructor;
    };
    install(): void;
    render(props: any): JSX.Element;
}
export {};
