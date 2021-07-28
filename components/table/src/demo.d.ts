import { WeElement } from 'omi';
import './index.tsx';
export default class Table extends WeElement {
    dataSource: ({
        id: number;
        name: string;
        age: number;
        address: string;
        $config?: undefined;
    } | {
        id: number;
        name: string;
        age: number;
        address: string;
        $config: {
            bgColor: string;
        };
    })[];
    columns: ({
        title: string;
        render: (item: any) => JSX.Element;
        key?: undefined;
        editable?: undefined;
        align?: undefined;
    } | {
        title: string;
        key: string;
        editable: boolean;
        render?: undefined;
        align?: undefined;
    } | {
        title: string;
        align: string;
        render: (item: any) => JSX.Element;
        key?: undefined;
        editable?: undefined;
    })[];
    onEditClick: (evt: any) => void;
    onDeleteClick: (evt: any) => void;
    table: any;
    render(props: any): JSX.Element;
}
