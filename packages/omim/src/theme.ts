if (!document.querySelector('#__omim-theme-style')) {
  const style = document.createElement('style')
  style.id = '__omim-theme-style'
  style.textContent = `--mdc-theme-primary: #0072d9;
  --mdc-theme-secondary: #2170b8;
  --mdc-theme-error: #f5222d;
  --mdc-theme-surface: #ffffff;
  --mdc-theme-on-primary: #ffffff;
  --mdc-theme-on-secondary: #ffffff;
  --mdc-theme-on-error: #ffffff;
  --mdc-theme-on-surface: #000000;
  --mdc-theme-background: #ffffff;
  --mdc-shape-small-component-radius: 4px;
  --mdc-shape-medium-component-radius: 4px;
  --mdc-shape-large-component-radius: 0px;
  --mdc-typography--font-family: Roboto, sans-serif;
  `
  //todo remove style element, no need this?
  document.querySelector('head').append(style)

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
