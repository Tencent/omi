declare global {
  interface Window {
    OmimThemePrimary: string,
    OmimThemeSecondary: string,
    OmimThemeError: string,
    OmimThemeSurface: string,
    OmimThemeOnPrimary: string,
    OmimThemeOnSecondary: string,
    OmimThemeOnError: string,
    OmimThemeOnSurface: string,
    OmimThemeBackground: string,
    OmimShapeSmallComponentRadius: string,
    OmimShapeMediumComponentRadius: string,
    OmimShapeLargeComponentRadius: string,
    OmimTypographyFontFamily: string
  }
}

if (typeof window === 'object') {
  window.OmimThemePrimary = window.OmimThemePrimary || '#0052d9'
  window.OmimThemeSecondary = window.OmimThemeSecondary || '#1890ff'
  window.OmimThemeError = window.OmimThemeError || '#f5222d'

  window.OmimThemeSurface = window.OmimThemeSurface || '#ffffff'
  window.OmimThemeOnPrimary = window.OmimThemeOnPrimary || '#ffffff'
  window.OmimThemeOnSecondary = window.OmimThemeOnSecondary || '#ffffff'
  window.OmimThemeOnError = window.OmimThemeOnError || '#ffffff'
  window.OmimThemeOnSurface = window.OmimThemeOnSurface || '#000000'
  window.OmimThemeBackground = window.OmimThemeBackground || '#ffffff'
  window.OmimShapeSmallComponentRadius = window.OmimShapeSmallComponentRadius || '4px'
  window.OmimShapeMediumComponentRadius = window.OmimShapeMediumComponentRadius || '4px'
  window.OmimShapeLargeComponentRadius = window.OmimShapeLargeComponentRadius || '0px'
  window.OmimTypographyFontFamily = window.OmimTypographyFontFamily || 'Roboto, sans-serif;'
}

export function theme() {
  if (typeof window === 'object') {
    return `* {
  --mdc-theme-primary: ${window.OmimThemePrimary};
  --mdc-theme-secondary: ${window.OmimThemeSecondary};
  --mdc-theme-error: ${window.OmimThemeError};
  --mdc-theme-surface: ${window.OmimThemeSurface};

  --mdc-theme-on-primary: ${window.OmimThemeOnPrimary};
  --mdc-theme-on-secondary: ${window.OmimThemeOnSecondary};
  --mdc-theme-on-error: ${window.OmimThemeOnError};
  --mdc-theme-on-surface: ${window.OmimThemeOnSurface};
  --mdc-theme-background: ${window.OmimThemeBackground};

  --mdc-shape-small-component-radius: ${window.OmimShapeSmallComponentRadius};
  --mdc-shape-medium-component-radius: ${window.OmimShapeMediumComponentRadius};
  --mdc-shape-large-component-radius: ${window.OmimShapeLargeComponentRadius};
  --mdc-typography--font-family: ${window.OmimTypographyFontFamily};
}`
  }
}
