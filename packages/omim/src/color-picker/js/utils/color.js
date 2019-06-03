// Shorthands
const {min, max, floor, round} = Math;

/**
 * Tries to convert a color name to rgb/a hex representation
 * @param name
 * @returns {string | CanvasGradient | CanvasPattern}
 */
function standardizeColor(name) {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = name;
    return ctx.fillStyle;
}

/**
 * Convert HSV spectrum to RGB.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {number[]} Array with rgb values.
 */
export function hsvToRgb(h, s, v) {
    h = (h / 360) * 6;
    s /= 100;
    v /= 100;

    let i = floor(h);

    let f = h - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);

    let mod = i % 6;
    let r = [v, q, p, p, t, v][mod];
    let g = [t, v, v, q, p, p][mod];
    let b = [p, p, t, v, v, q][mod];

    return [
        r * 255,
        g * 255,
        b * 255
    ];
}

/**
 * Convert HSV spectrum to Hex.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {string[]} Hex values
 */
export function hsvToHex(h, s, v) {
    return hsvToRgb(h, s, v).map(v =>
        round(v).toString(16).padStart(2, '0')
    );
}

/**
 * Convert HSV spectrum to CMYK.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {number[]} CMYK values
 */
export function hsvToCmyk(h, s, v) {
    const rgb = hsvToRgb(h, s, v);
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;

    let k, c, m, y;

    k = min(1 - r, 1 - g, 1 - b);

    c = k === 1 ? 0 : (1 - r - k) / (1 - k);
    m = k === 1 ? 0 : (1 - g - k) / (1 - k);
    y = k === 1 ? 0 : (1 - b - k) / (1 - k);

    return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
    ];
}

/**
 * Convert HSV spectrum to HSL.
 * @param h Hue
 * @param s Saturation
 * @param v Value
 * @returns {number[]} HSL values
 */
export function hsvToHsl(h, s, v) {
    s /= 100, v /= 100;

    let l = (2 - s) * v / 2;

    if (l !== 0) {
        if (l === 1) {
            s = 0;
        } else if (l < 0.5) {
            s = s * v / (l * 2);
        } else {
            s = s * v / (2 - l * 2);
        }
    }

    return [
        h,
        s * 100,
        l * 100
    ];
}

/**
 * Convert RGB to HSV.
 * @param r Red
 * @param g Green
 * @param b Blue
 * @return {number[]} HSV values.
 */
function rgbToHsv(r, g, b) {
    r /= 255, g /= 255, b /= 255;

    let h, s, v;
    const minVal = min(r, g, b);
    const maxVal = max(r, g, b);
    const delta = maxVal - minVal;

    v = maxVal;
    if (delta === 0) {
        h = s = 0;
    } else {
        s = delta / maxVal;
        let dr = (((maxVal - r) / 6) + (delta / 2)) / delta;
        let dg = (((maxVal - g) / 6) + (delta / 2)) / delta;
        let db = (((maxVal - b) / 6) + (delta / 2)) / delta;

        if (r === maxVal) {
            h = db - dg;
        } else if (g === maxVal) {
            h = (1 / 3) + dr - db;
        } else if (b === maxVal) {
            h = (2 / 3) + dg - dr;
        }

        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }

    return [
        h * 360,
        s * 100,
        v * 100
    ];
}

/**
 * Convert CMYK to HSV.
 * @param c Cyan
 * @param m Magenta
 * @param y Yellow
 * @param k Key (Black)
 * @return {number[]} HSV values.
 */
function cmykToHsv(c, m, y, k) {
    c /= 100, m /= 100, y /= 100, k /= 100;

    const r = (1 - min(1, c * (1 - k) + k)) * 255;
    const g = (1 - min(1, m * (1 - k) + k)) * 255;
    const b = (1 - min(1, y * (1 - k) + k)) * 255;

    return [...rgbToHsv(r, g, b)];
}

/**
 * Convert HSL to HSV.
 * @param h Hue
 * @param s Saturation
 * @param l Lightness
 * @return {number[]} HSV values.
 */
function hslToHsv(h, s, l) {
    s /= 100, l /= 100;
    s *= l < 0.5 ? l : 1 - l;

    let ns = (2 * s / (l + s)) * 100;
    let v = (l + s) * 100;
    return [h, ns, v];
}

/**
 * Convert HEX to HSV.
 * @param hex Hexadecimal string of rgb colors, can have length 3 or 6.
 * @return {number[]} HSV values.
 */
function hexToHsv(hex) {
    return rgbToHsv(...hex.match(/.{2}/g).map(v => parseInt(v, 16)));
}

/**
 * Try's to parse a string which represents a color to a HSV array.
 * Current supported types are cmyk, rgba, hsla and hexadecimal.
 * @param str
 * @return {*}
 */
export function parseToHSV(str) {

    // Check if string is a color-name
    str = str.match(/^[a-zA-Z]+$/) ? standardizeColor(str) : str;

    // Regular expressions to match different types of color represention
    const regex = {
        cmyk: /^cmyk[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)/i,
        rgba: /^(rgb|rgba)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
        hsla: /^(hsl|hsla)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
        hsva: /^(hsv|hsva)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
        hex: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i
    };

    /**
     * Takes an Array of any type, convert strings which represents
     * a number to a number an anything else to undefined.
     * @param array
     * @return {*}
     */
    const numarize = array => array.map(v => /^(|\d+)\.\d+|\d+$/.test(v) ? Number(v) : undefined);

    let match;
    for (const type in regex) {

        // Check if current scheme passed
        if (!(match = regex[type].exec(str)))
            continue;

        // Try to convert
        switch (type) {
            case 'cmyk': {
                let [, c, m, y, k] = numarize(match);

                if (c > 100 || m > 100 || y > 100 || k > 100)
                    break;

                return {values: [...cmykToHsv(c, m, y, k), 1], type};
            }
            case 'rgba': {
                let [, , r, g, b, a = 1] = numarize(match);

                if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1)
                    break;

                return {values: [...rgbToHsv(r, g, b), a], type};
            }
            case 'hex': {
                const splitAt = (s, i) => [s.substring(0, i), s.substring(i, s.length)];
                let [, hex] = match;

                // Fill up opacity if not declared
                if (hex.length === 3) {
                    hex += 'F';
                } else if (hex.length === 6) {
                    hex += 'FF';
                }

                let alpha;
                if (hex.length === 4) {
                    [hex, alpha] = splitAt(hex, 3).map(v => v + v);
                } else if (hex.length === 8) {
                    [hex, alpha] = splitAt(hex, 6);
                }

                // Convert 0 - 255 to 0 - 1 for opacity
                alpha = parseInt(alpha, 16) / 255;
                return {values: [...hexToHsv(hex), alpha], type};
            }
            case 'hsla': {
                let [, , h, s, l, a = 1] = numarize(match);

                if (h > 360 || s > 100 || l > 100 || a < 0 || a > 1)
                    break;

                return {values: [...hslToHsv(h, s, l), a], type};
            }
            case 'hsva': {
                let [, , h, s, v, a = 1] = numarize(match);

                if (h > 360 || s > 100 || v > 100 || a < 0 || a > 1)
                    break;

                return {values: [h, s, v, a], type};
            }
        }
    }

    return {values: null, type: null};
}
