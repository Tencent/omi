import { WeElement } from 'omi';
interface Props {
    total: number;
    pageSize: number;
    numDisplay: number;
    currentPage: number;
    numEdge: number;
    linkTo: string;
    prevText: string;
    nextText: string;
    ellipseText: string;
    prevShow: boolean;
    nextShow: boolean;
}
export default class Pagination extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        total: number;
        pageSize: number;
        numDisplay: number;
        currentPage: number;
        numEdge: number;
        linkTo: string;
        prevText: string;
        nextText: string;
        ellipseText: string;
        prevShow: boolean;
        nextShow: boolean;
    };
    static propTypes: {
        total: NumberConstructor;
        pageSize: NumberConstructor;
        numDisplay: NumberConstructor;
        currentPage: NumberConstructor;
        numEdge: NumberConstructor;
        linkTo: StringConstructor;
        prevText: StringConstructor;
        nextText: StringConstructor;
        ellipseText: StringConstructor;
        prevShow: BooleanConstructor;
        nextShow: BooleanConstructor;
    };
    pageNum: any;
    beforeRender(): void;
    goto(index: any): void;
    render(props: any): JSX.Element;
    getInterval(): number[];
    getPrev(): JSX.Element;
    getNext(): JSX.Element;
    getItem(pageIndex: any, text: any): JSX.Element;
}
export {};
