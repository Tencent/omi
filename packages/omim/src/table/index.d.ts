import { WeElement } from 'omi';
interface Props {
    dataSource: object;
    columns: object;
}
export default class Table extends WeElement<Props, {}> {
    static css: string;
    static resetTheme(): void;
    dataSource: any;
    static propTypes: {
        dataSource: ObjectConstructor;
        columns: ObjectConstructor;
    };
    install(): void;
    removeItem: (item: any) => void;
    render(props: any): JSX.Element;
}
export {};
