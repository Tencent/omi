declare global {
    interface Window {
        OmimThemePrimary: string;
        OmimThemeSecondary: string;
        OmimThemeError: string;
    }
}
export declare function theme(): string;
