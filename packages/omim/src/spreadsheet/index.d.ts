/**
 * Using x-data-spreadsheet
 * By yuliang.liang(myliang)
 * MIT LICENSE
 * https://github.com/myliang/x-spreadsheet/blob/master/LICENSE
 *
 * **/
import { WeElement } from 'omi';
import XSpreadsheet from "x-data-spreadsheet";
import '../theme.ts';
interface Props {
    data?: object;
    width?: number;
    height?: number;
}
export default class Spreadsheet extends WeElement<Props> {
    static defaultProps: {};
    static propTypes: {};
    spreadsheet: XSpreadsheet;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
