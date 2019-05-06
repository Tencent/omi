import { WeElement } from 'omi';
interface Props {
}
interface Data {
}
export default class LayoutGrid extends WeElement<Props, Data> {
    static css: any;
    static propTypes: {
        alignLeft: BooleanConstructor;
        alignRight: BooleanConstructor;
    };
    install(): void;
    renderChild(child: any): JSX.Element;
    render(props: any): JSX.Element;
}
export {};
