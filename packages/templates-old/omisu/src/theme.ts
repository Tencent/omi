theme()

document.addEventListener('DOMContentLoaded', () => {
  theme()
})

function theme(){
  if (document.body && !document.body.style.getPropertyValue('--mdc-theme-primary')) {
    document.body.style.setProperty('--mdc-theme-primary', '#0072d9')
    document.body.style.setProperty('--mdc-theme-secondary', '#2170b8')
    document.body.style.setProperty('--mdc-theme-error', '#f5222d')
    document.body.style.setProperty('--mdc-theme-surface', '#ffffff')
    document.body.style.setProperty('--mdc-theme-on-primary', '#ffffff')
    document.body.style.setProperty('--mdc-theme-on-secondary', '#ffffff')
    document.body.style.setProperty('--mdc-theme-on-error', '#ffffff')
    document.body.style.setProperty('--mdc-theme-on-surface', '#000000')
    document.body.style.setProperty('--mdc-theme-background', '#ffffff')
    document.body.style.setProperty('--mdc-shape-small-component-radius', '4px')
    document.body.style.setProperty('--mdc-shape-medium-component-radius', '4px')
    document.body.style.setProperty('--mdc-shape-large-component-radius', '0px')
    document.body.style.setProperty('--mdc-typography--font-family', 'Roboto, sans-serif')
  }
}
