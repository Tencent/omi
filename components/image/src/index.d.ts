import { WeElement } from 'omi';
interface Props {
    src?: string;
}
export default class Image extends WeElement<Props> {
    static css: any;
    static defaultProps: {};
    static propTypes: {
        src: StringConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
