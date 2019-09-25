import { WeElement } from 'omi';
interface Props {
}
export default class Finger extends WeElement<Props> {
    static css: string;
    preV: {
        x: any;
        y: any;
    };
    pinchStartLen: any;
    scale: number;
    isSingleTap: boolean;
    isDoubleTap: boolean;
    delta: any;
    last: any;
    now: any;
    end: any;
    multiTouch: boolean;
    tapTimeout: any;
    longTapTimeout: any;
    singleTapTimeout: any;
    swipeTimeout: any;
    x1: any;
    x2: any;
    y1: any;
    y2: any;
    preTapPosition: {
        x: any;
        y: any;
    };
    afterLongTap: boolean;
    afterLongTapTimeout: any;
    install(): void;
    getLen(v: any): number;
    dot(v1: any, v2: any): number;
    getAngle(v1: any, v2: any): number;
    cross(v1: any, v2: any): number;
    getRotateAngle(v1: any, v2: any): number;
    _handleTouchStart(evt: any): void;
    _handleTouchMove(evt: any): void;
    _handleTouchCancel(evt: any): void;
    _handleTouchEnd(evt: any): void;
    _cancelLongTap(): void;
    _cancelSingleTap(): void;
    _swipeDirection(x1: any, x2: any, y1: any, y2: any): "Left" | "Right" | "Up" | "Down";
    installed(): void;
    render(): JSX.Element;
}
export {};
