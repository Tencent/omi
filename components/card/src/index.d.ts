import { WeElement } from 'omi';
interface Props {
    title?: string;
    hoverable?: 'always' | 'true' | 'false';
    extra?: string;
    actions: any[];
    size?: 'large' | 'medium' | 'small';
}
export default class Card extends WeElement<Props> {
    css: any;
    static defaultProps: {
        title: string;
        hoverable: string;
        extra: string;
    };
    static propTypes: {
        title: StringConstructor;
        hoverable: StringConstructor;
        extra: StringConstructor;
        actions: ArrayConstructor;
        size: StringConstructor;
    };
    clickHandler: (item: any) => void;
    handleMousemove: (item: any) => void;
    _iconTag: any;
    render(props: any): JSX.Element;
}
export {};
