import { WeElement } from 'omi';
interface Props {
    buffer?: number;
    progress?: number;
}
interface Data {
}
export default class LinearProgress extends WeElement<Props, Data> {
    static css: any;
    static defaultProps: {
        buffer: number;
        progress: number;
    };
    static propTypes: {
        buffer: NumberConstructor;
        progress: NumberConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
