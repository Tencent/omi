import { WeElement } from 'omi';
interface Props {
    dataSource: object;
}
export default class Table extends WeElement<Props, {}> {
    static css: string;
    dataSource: any;
    install(): void;
    removeItem: (item: any) => void;
    render(props: any): JSX.Element;
}
export {};
