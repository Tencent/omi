import { WeElement } from 'omi';
import '../theme.ts';
import Pickr from './js/pickr.js';
interface Props {
    button?: boolean;
    preview?: boolean;
    opacity?: boolean;
    hue?: boolean;
    hex?: boolean;
    rgba?: boolean;
    hsla?: boolean;
    hsva?: boolean;
    input?: boolean;
    clear?: boolean;
    save?: boolean;
    cmyk?: boolean;
    default?: string;
    swatches?: string[];
    inline?: boolean;
    strings?: {
        save: string;
        clear: string;
    };
}
interface Data {
}
export default class ColorPicker extends WeElement<Props, Data> {
    static css: any;
    picker: Pickr;
    static defaultProps: {
        button: boolean;
        preview: boolean;
        opacity: boolean;
        hue: boolean;
        hex: boolean;
        rgba: boolean;
        hsla: boolean;
        hsva: boolean;
        input: boolean;
        clear: boolean;
        save: boolean;
        cmyk: boolean;
        default: string;
        swatches: any[];
        inline: boolean;
        strings: {
            save: string;
            clear: string;
        };
    };
    static propTypes: {
        button: BooleanConstructor;
        preview: BooleanConstructor;
        opacity: BooleanConstructor;
        hue: BooleanConstructor;
        hex: BooleanConstructor;
        rgba: BooleanConstructor;
        hsla: BooleanConstructor;
        hsva: BooleanConstructor;
        input: BooleanConstructor;
        clear: BooleanConstructor;
        save: BooleanConstructor;
        cmyk: BooleanConstructor;
        default: StringConstructor;
        swatches: ArrayConstructor;
        inline: BooleanConstructor;
        strings: ObjectConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
