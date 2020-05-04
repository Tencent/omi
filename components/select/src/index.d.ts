import { WeElement } from 'omi';
interface Props {
    items: any[];
}
export default class Select extends WeElement<Props> {
    static css: any;
    static defaultProps: {};
    static propTypes: {
        items: ArrayConstructor;
    };
    installed(): void;
    updated(): void;
    render(props: any): JSX.Element;
}
export {};
