/**
 * Based on lit-flatpickr https://github.com/Matsuuu/lit-flatpickr/blob/master/src/StyleLoader.ts
 * Licensed under the MIT License
 * https://github.com/Matsuuu/lit-flatpickr/blob/master/LICENSE
 *
 */
export declare enum FlatpickrTheme {
    light = "light",
    dark = "dark",
    materialBlue = "material_blue",
    materialGreen = "material_green",
    materialOrange = "material_orange",
    materialRed = "material_red",
    airbnb = "airbnb",
    confetti = "confetti",
    none = "none"
}
export declare function getStyleRepository(theme: FlatpickrTheme): string;
export default class StyleLoader {
    theme: FlatpickrTheme;
    constructor(theme: FlatpickrTheme);
    initStyles(): Promise<void>;
    /**
     * We want to prevent the styles from flickering, so we halt the
     * initialization process until the styles have been loaded
     * */
    waitForStyleToLoad(checkFunction: Function): Promise<void>;
    isThemeLoaded(): boolean;
    appendThemeStyles(themeUrl: string): void;
}
