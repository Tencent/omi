## Typography 

Material Design’s text sizes and styles were developed to balance content density and reading comfort under typical usage conditions.

MDC Typography is a foundational module that applies these styles to MDC Web components. The typographic styles in this module are derived from thirteen styles:

* Headline 1
* Headline 2
* Headline 3
* Headline 4
* Headline 5
* Headline 6
* Subtitle 1
* Subtitle 2
* Body 1
* Body 2
* Caption
* Button
* Overline

## Usage

```js
import * as css from '@omim/core/typography'

console.log(css)
```

Output:

```css
.mdc-typography {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased; 
}

.mdc-typography--headline1 {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 6rem;
  line-height: 6rem;
  font-weight: 300;
  letter-spacing: -0.01562em;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--headline2 {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 3.75rem;
  line-height: 3.75rem;
  font-weight: 300;
  letter-spacing: -0.00833em;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--headline3 {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 3rem;
  line-height: 3.125rem;
  font-weight: 400;
  letter-spacing: normal;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--headline4 {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 2.125rem;
  line-height: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.00735em;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--headline5 {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  letter-spacing: normal;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--headline6 {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--subtitle1 {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  letter-spacing: 0.00937em;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--subtitle2 {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;
  letter-spacing: 0.00714em;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--body1 {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.03125em;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--body2 {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.01786em;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--caption {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.03333em;
  text-decoration: inherit;
  text-transform: inherit; 
}

.mdc-typography--button {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  letter-spacing: 0.08929em;
  text-decoration: none;
  text-transform: uppercase; 
}

.mdc-typography--overline {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.75rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: 0.16667em;
  text-decoration: none;
  text-transform: uppercase; 
}
```