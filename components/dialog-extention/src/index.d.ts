import '@omiu/dialog';
import '@omiu/button';
import '@omiu/input';
interface AlertOptions {
    msg: String;
    title: String;
    confirmButtonText: String;
    onConfirm: () => void;
}
export declare function alert(options: AlertOptions): void;
interface ConfirmOptions {
    msg: String;
    title: String;
    confirmButtonText: String;
    cancelButtonText: String;
    onCancel: () => void;
    onConfirm: () => void;
}
export declare function confirm(options: ConfirmOptions): void;
interface PromptOptions {
    msg: String;
    title: String;
    confirmButtonText: String;
    cancelButtonText: String;
    onCancel: () => void;
    onConfirm: () => void;
}
export declare function prompt(options: PromptOptions): void;
export {};
