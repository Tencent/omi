import { WeElement } from 'omi';
interface Props {
    vertical: boolean;
    min: number;
    max: number;
    sensitivity: number;
    factor: number;
    step: number;
    bindSelf: boolean;
    preventDefault: boolean;
    onChange: () => void;
    onTouchStart: () => void;
    onTouchMove: () => void;
    onTouchEnd: () => void;
    onTap: () => void;
    onPressMove: () => void;
    onAnimationEnd: () => void;
}
export default class Scroll extends WeElement<Props> {
    static css: any;
    static propTypes: {
        vertical: BooleanConstructor;
    };
    installed(): void;
    render(): JSX.Element;
}
export {};
