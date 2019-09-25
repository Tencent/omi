import { WeElement } from 'omi';
import * as Quill from 'quill';
import '../theme.ts';
interface Props {
}
export default class Editor extends WeElement<Props> {
    static css: any;
    static propTypes: {};
    editor: Quill;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
