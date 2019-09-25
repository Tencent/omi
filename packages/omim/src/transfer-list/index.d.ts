import { WeElement } from 'omi';
import '../list';
import '../theme.ts';
interface Props {
    left: object[];
    right: object[];
}
export default class TransferList extends WeElement<Props> {
    static css: any;
    static propTypes: {
        left: ArrayConstructor;
        right: ArrayConstructor;
    };
    leftToRight: () => void;
    rightToLeft: () => void;
    sltLeftToRight: () => void;
    sltRightToRight: () => void;
    _rightBtnDiabled: boolean;
    _leftBtnDiabled: boolean;
    _rightAllBtnDiabled: boolean;
    _leftAllBtnDiabled: boolean;
    install(): void;
    onLeftItemClick: (evt: any) => void;
    _checkLeftDisabled(): void;
    _checkRightDisabled(): void;
    onRightItemClick: (evt: any) => void;
    render(props: any): JSX.Element;
}
export {};
