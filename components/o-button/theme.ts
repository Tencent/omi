theme()

document.addEventListener('DOMContentLoaded', () => {
  theme()
})

function theme() {
  if (document.body && !document.body.style.getPropertyValue('--o-theme-primary')) {
    document.body.style.setProperty('--o-theme-primary', '#07c160')
    document.body.style.setProperty('--o-theme-secondary', '#07c160')
    document.body.style.setProperty('--o-theme-error', '#f5222d')
    document.body.style.setProperty('--o-theme-surface', '#ffffff')
    document.body.style.setProperty('--o-theme-on-primary', '#ffffff')
    document.body.style.setProperty('--o-theme-on-secondary', '#ffffff')
    document.body.style.setProperty('--o-theme-on-error', '#ffffff')
    document.body.style.setProperty('--o-theme-on-surface', '#000000')
    document.body.style.setProperty('--o-theme-background', '#ffffff')
    document.body.style.setProperty('--o-shape-small-component-radius', '4px')
    document.body.style.setProperty('--o-shape-medium-component-radius', '4px')
    document.body.style.setProperty('--o-shape-large-component-radius', '0px')
    document.body.style.setProperty('--o-typography--font-family', 'Roboto, sans-serif')
  }
}

function darken(color) {

}

function lighten(color) {

}
