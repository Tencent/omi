import { WeElement } from 'omi';
import '@omiu/icon/check-circle-rounded';
import '@omiu/icon/cancel-rounded';
import '@omiu/icon/check-rounded';
import '@omiu/icon/close-rounded';
interface Props {
    type?: 'line' | 'circle';
    percent?: number;
    status?: 'success' | 'error';
    strokeColor?: string;
    trailColor?: string;
    style?: string;
    strokeWidth?: number;
    width?: number;
    textColor?: string;
}
export default class extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        type: string;
        percent: number;
        status: any;
        strokeColor: any;
        trailColor: any;
        strokeWidth: any;
        width: any;
        textColor: any;
    };
    static propTypes: {
        type: StringConstructor;
        percent: NumberConstructor;
        status: StringConstructor;
        strokeColor: StringConstructor;
        trailColor: StringConstructor;
        strokeWidth: NumberConstructor;
        width: NumberConstructor;
        textColor: StringConstructor;
    };
    _state: any;
    setPercent: object;
    install(): void;
    render(props: any): JSX.Element;
}
export {};
