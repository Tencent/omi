import { WeElement } from 'omi';
interface Props {
    title?: string;
    extra?: string;
    actions: any[];
    size?: 'medium' | 'small';
}
export default class Card extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        title: string;
        extra: string;
    };
    static propTypes: {
        title: StringConstructor;
        extra: StringConstructor;
        actions: ArrayConstructor;
        size: StringConstructor;
    };
    clickHandler: (item: any) => void;
    _iconTag: any;
    render(props: any): JSX.Element;
}
export {};
