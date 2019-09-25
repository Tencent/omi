import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    src: string;
    type?: string;
}
export default class Player extends WeElement<Props> {
    video: any;
    disX: any;
    timer: any;
    Hls: any;
    static css: any;
    static propTypes: {
        src: StringConstructor;
        type: StringConstructor;
    };
    $(node: any): any;
    dom(): void;
    waiting(): void;
    totalTime: string;
    canplay(): void;
    isPlaying: boolean;
    play(): void;
    muted: boolean;
    volume(): void;
    updating(): void;
    progress(e: any): void;
    down(e: any): void;
    move(e: any): void;
    alow(): void;
    keydown(e: any): void;
    ended(): void;
    full(): any;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
