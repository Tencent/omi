import { WeElement } from 'omi';
import '@omiu/checkbox';
import '@omiu/input';
interface Props {
    dataSource: any[];
    columns: object;
    checkbox: boolean;
    border: boolean;
    stripe: boolean;
    compact: boolean;
    width: string;
    height: string;
    fixedTop: boolean;
    fixedRight: boolean;
    fixedLeftCount: number;
}
export default class Table extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        dataSource: any[];
        columns: any[];
        checkbox: boolean;
        border: boolean;
        stripe: boolean;
        compact: boolean;
        fixedTop: boolean;
        fixedRight: boolean;
        fixedLeftCount: number;
    };
    static propTypes: {
        dataSource: ObjectConstructor;
        columns: ObjectConstructor;
        checkbox: BooleanConstructor;
        border: BooleanConstructor;
        stripe: BooleanConstructor;
        compact: BooleanConstructor;
        width: StringConstructor;
        height: StringConstructor;
        fixedTop: BooleanConstructor;
        fixedRight: BooleanConstructor;
        fixedLeftCount: NumberConstructor;
    };
    deleteRow: (item: any) => void;
    deleteRowById(id: any): Promise<void>;
    _changeHandlerTh: (e: any, item: any) => void;
    _changeHandlerTd: (e: any, item: any) => void;
    _getCheckedState(): {
        indeterminate: boolean;
        unchecked?: undefined;
        checked?: undefined;
    } | {
        unchecked: boolean;
        indeterminate?: undefined;
        checked?: undefined;
    } | {
        checked: boolean;
        indeterminate?: undefined;
        unchecked?: undefined;
    };
    installed(): void;
    onChange: (evt: any, item: any, column: any) => void;
    updated(): void;
    setFixedLeft(): void;
    setFixedRight(): void;
    onTdClick: (item: any, column: any, evt: any) => void;
    render(props: any): JSX.Element;
}
export {};
