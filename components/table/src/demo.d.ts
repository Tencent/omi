import { WeElement } from 'omi';
import './index.tsx';
export default class Table extends WeElement {
    dataSource: {
        id: number;
        name: string;
        age: number;
        address: string;
    }[];
    columns: ({
        title: string;
        render: (item: any) => JSX.Element;
        key?: undefined;
        align?: undefined;
    } | {
        title: string;
        key: string;
        render?: undefined;
        align?: undefined;
    } | {
        title: string;
        align: string;
        render: (item: any) => JSX.Element;
        key?: undefined;
    })[];
    render(props: any): JSX.Element;
}
