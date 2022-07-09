/**
 * Based on lit-flatpickr https://github.com/Matsuuu/lit-flatpickr/blob/master/src/StyleLoader.ts
 * Licensed under the MIT License
 * https://github.com/Matsuuu/lit-flatpickr/blob/master/LICENSE
 *
 */

// const styleRepository = 'https://npmcdn.com/flatpickr@4.6.9/dist/themes/';
const styleRepository = 'https://omi.cdn-go.cn/admin/latest/flatpickr/themes/';
export enum FlatpickrTheme {
  light = 'light',
  dark = 'dark',
  materialBlue = 'material_blue',
  materialGreen = 'material_green',
  materialOrange = 'material_orange',
  materialRed = 'material_red',
  airbnb = 'airbnb',
  confetti = 'confetti',
  none = 'none',
}

export function getStyleRepository(theme: FlatpickrTheme): string {
  return `${styleRepository}${theme}.css`;
}



// const themeUrlPrefix = 'https://npmcdn.com/flatpickr@4.6.9/dist/themes';
const themeUrlPrefix = 'https://omi.cdn-go.cn/admin/latest/flatpickr/themes';

export default class StyleLoader {
  constructor(public theme: FlatpickrTheme) {
    this.theme = theme;
  }

  async initStyles(): Promise<void> {
    const themeUrl = getStyleRepository(this.theme);
    const themeIsLoaded: boolean = this.isThemeLoaded();
    if (!themeIsLoaded) {
      this.appendThemeStyles(themeUrl);
      await this.waitForStyleToLoad(() => this.isThemeLoaded());
    }
  }

  /**
   * We want to prevent the styles from flickering, so we halt the
   * initialization process until the styles have been loaded
   * */
  waitForStyleToLoad(checkFunction: Function): Promise<void> {
    return new Promise((resolve, reject) => {
      const checkIfStylesHaveLoaded = (iteration = 0) => {
        if (checkFunction()) return resolve();
        if (iteration > 10) {
          throw Error('Styles took too long to load, or were not able to be loaded');
          reject();
        }
        setTimeout(() => checkIfStylesHaveLoaded(iteration++), 100);
      };
      checkIfStylesHaveLoaded();
    });
  }

  isThemeLoaded(): boolean {
    // special theme value to prevent any loading of styles
    if (this.theme === FlatpickrTheme.none) return true;

    const styleSheetSources: Array<string | null> = Array.from(document.styleSheets).map(ss => ss.href);
    return styleSheetSources.some(sss => sss != null && new RegExp(themeUrlPrefix).test(sss));
  }

  appendThemeStyles(themeUrl: string): void {
    const styleElem = document.createElement('link');
    styleElem.rel = 'stylesheet';
    styleElem.type = 'text/css';
    styleElem.href = themeUrl;
    document.head.append(styleElem);
  }
}
