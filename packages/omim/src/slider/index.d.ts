import { WeElement } from 'omi';
interface Props {
    discrete?: boolean;
    value?: number;
    disabled?: boolean;
}
interface Data {
}
export default class Slider extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        value: number;
        step: number;
        min: number;
        max: number;
    };
    static propTypes: {
        discrete: BooleanConstructor;
        value: NumberConstructor;
        disabled: BooleanConstructor;
        min: NumberConstructor;
        max: NumberConstructor;
        step: NumberConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
