declare global {
    interface Window {
        OmimThemePrimary: string;
        OmimThemeSecondary: string;
        OmimThemeError: string;
        OmimThemeSurface: string;
        OmimThemeOnPrimary: string;
        OmimThemeOnSecondary: string;
        OmimThemeOnError: string;
        OmimThemeOnSurface: string;
        OmimThemeBackground: string;
        OmimShapeSmallComponentRadius: string;
        OmimShapeMediumComponentRadius: string;
        OmimShapeLargeComponentRadius: string;
        OmimTypographyFontFamily: string;
    }
}
export declare function theme(): string;
