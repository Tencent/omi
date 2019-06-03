import {hsvToHsl, hsvToRgb, hsvToCmyk, hsvToHex} from './color';

/**
 * Simple class which holds the properties
 * of the color represention model hsla (hue saturation lightness alpha)
 */
export function HSVaColor(h = 0, s = 0, v = 0, a = 1) {
    const {ceil} = Math;

    const that = {
        h, s, v, a,

        toHSVA() {
            const hsva = [that.h, that.s, that.v];
            const rhsva = hsva.map(ceil);

            hsva.push(that.a);
            hsva.toString = () => `hsva(${rhsva[0]}, ${rhsva[1]}%, ${rhsva[2]}%, ${that.a.toFixed(1)})`;
            return hsva;
        },

        toHSLA() {
            const hsla = hsvToHsl(that.h, that.s, that.v);
            const rhsla = hsla.map(ceil);

            hsla.push(that.a);
            hsla.toString = () => `hsla(${rhsla[0]}, ${rhsla[1]}%, ${rhsla[2]}%, ${that.a.toFixed(1)})`;
            return hsla;
        },

        toRGBA() {
            const rgba = hsvToRgb(that.h, that.s, that.v);
            const rrgba = rgba.map(ceil);

            rgba.push(that.a);
            rgba.toString = () => `rgba(${rrgba[0]}, ${rrgba[1]}, ${rrgba[2]}, ${that.a.toFixed(1)})`;
            return rgba;
        },

        toCMYK() {
            const cmyk = hsvToCmyk(that.h, that.s, that.v);
            const rcmyk = cmyk.map(ceil);

            cmyk.toString = () => `cmyk(${rcmyk[0]}%, ${rcmyk[1]}%, ${rcmyk[2]}%, ${rcmyk[3]}%)`;
            return cmyk;
        },

        toHEXA() {
            const hex = hsvToHex(that.h, that.s, that.v);

            hex.toString = () => {

                // Check if alpha channel make sense, convert it to 255 number space, convert
                // to hex and pad it with zeros if needet.
                const alpha = that.a >= 1 ? '' : Number((that.a * 255).toFixed(0))
                    .toString(16)
                    .toUpperCase().padStart(2, '0');

                return `#${hex.join('').toUpperCase() + alpha}`;
            };

            return hex;
        },

        clone() {
            return HSVaColor(that.h, that.s, that.v, that.a);
        }
    };

    return that;
}
