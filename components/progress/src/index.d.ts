import { WeElement } from 'omi';
import '@omiu/icon/check-circle-rounded';
import '@omiu/icon/cancel-rounded';
import '@omiu/icon/check-rounded';
import '@omiu/icon/close-rounded';
interface Props {
    type?: 'line' | 'circle';
    percent?: number;
    status?: 'success' | 'error' | 'active';
    strokeColor?: string;
    trailColor?: string;
    textColor?: string;
    strokeWidth?: number;
    width?: number;
    showInfo?: boolean;
}
export default class extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        type: string;
        percent: number;
        status: any;
        strokeColor: any;
        trailColor: any;
        textColor: any;
        strokeWidth: any;
        width: any;
        showInfo: boolean;
    };
    static propTypes: {
        type: StringConstructor;
        percent: NumberConstructor;
        status: StringConstructor;
        strokeColor: StringConstructor;
        trailColor: StringConstructor;
        textColor: StringConstructor;
        strokeWidth: NumberConstructor;
        width: NumberConstructor;
        showInfo: BooleanConstructor;
    };
    _state: {
        percent: number;
    };
    setPercent: (percent: number) => void;
    install(): void;
    render(props: any): JSX.Element;
}
export {};
