import { WeElement } from 'omi';
import '@omiu/loading';
import '@omiu/transition';
interface Props {
    content?: string;
    loading?: boolean;
    success?: boolean;
    warning?: boolean;
    duration: number;
    autoHide: boolean;
    show: boolean;
}
export default class Toast extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        duration: number;
        autoHide: boolean;
        show: boolean;
        content: string;
    };
    static propTypes: {
        content: StringConstructor;
        loading: BooleanConstructor;
        success: BooleanConstructor;
        warning: BooleanConstructor;
        duration: NumberConstructor;
        autoHide: BooleanConstructor;
        show: BooleanConstructor;
    };
    installed(): void;
    hide(): void;
    render(props: any): JSX.Element;
}
export declare function showLoading(content: any): any;
export declare function hideLoading(): void;
export declare function showSuccess(content: any): any;
export declare function hideSuccess(): void;
export declare function showWarning(content: any): any;
export declare function hideWarning(): void;
export {};
