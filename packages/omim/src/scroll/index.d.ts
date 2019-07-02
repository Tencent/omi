import { WeElement } from 'omi';
export default class SimpleCard extends WeElement {
    static css: any;
    static propTypes: {
        color: StringConstructor;
        path: StringConstructor;
        info: StringConstructor;
        caption: StringConstructor;
    };
    render(props: any): JSX.Element;
}
