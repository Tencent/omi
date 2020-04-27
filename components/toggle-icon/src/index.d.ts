import { WeElement } from 'omi';
interface Props {
    isOn?: boolean;
    icons: object;
    imgs: object;
    color: string;
    disabled: boolean;
}
export default class ToggleIcon extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        isOn: boolean;
        icons: any[];
    };
    static propTypes: {
        isOn: BooleanConstructor;
        icons: ObjectConstructor;
        imgs: ObjectConstructor;
        color: StringConstructor;
        disabled: BooleanConstructor;
    };
    tagA: any;
    tagB: any;
    clickHandler: () => void;
    render(props: any): JSX.Element;
}
export {};
