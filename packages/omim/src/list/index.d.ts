import { WeElement } from 'omi';
interface Props {
}
interface Data {
}
export default class Switch extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {};
    static defaultProps: {};
    installed(): void;
    render(props: any): JSX.Element[];
}
export {};
