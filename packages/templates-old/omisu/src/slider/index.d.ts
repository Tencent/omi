import '../theme.ts';
declare const Button: {
    (props: any, store: any): JSX.Element;
    store(_: any): {
        installed(): void;
        clickHandle(evt: any): void;
    };
    css: any;
};
export default Button;
