import { WeElement } from 'omi';
interface Props {
    checked: boolean;
}
export default class Switch extends WeElement<Props> {
    static css: any;
    static propTypes: {
        checked: BooleanConstructor;
    };
    _ele: any;
    onChange: () => void;
    render(props: any): JSX.Element;
}
export {};
