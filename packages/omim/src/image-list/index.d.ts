import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    masonry: boolean;
    list: object;
}
export default class ImageList extends WeElement<Props> {
    static css: any;
    static defaultProps: {};
    static propTypes: {
        masonry: BooleanConstructor;
        list: ObjectConstructor;
    };
    render(props: any): JSX.Element;
}
export {};
