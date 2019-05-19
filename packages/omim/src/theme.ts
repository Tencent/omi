declare global {
  interface Window {
    OmimThemePrimary: string,
    OmimThemeSecondary: string,
    OmimThemeError: string,

  }
}

if (typeof window === 'object') {
  window.OmimThemePrimary = window.OmimThemePrimary || '#0052d9'
  window.OmimThemeSecondary = window.OmimThemeSecondary || '#1890ff'
  window.OmimThemeError = window.OmimThemeError || '#f5222d'
}

export function theme() {
  if (typeof window === 'object') {
    return `* {
  --mdc-theme-primary: ${window.OmimThemePrimary};
  --mdc-theme-secondary: ${window.OmimThemeSecondary};
  --mdc-theme-error: ${window.OmimThemeError};
}`
  }
}
