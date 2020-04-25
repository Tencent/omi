import { WeElement } from 'omi';
interface Props {
    size?: number;
    color?: string;
}
export default class Loading extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        size: number;
    };
    static propTypes: {
        size: NumberConstructor;
        color: StringConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
