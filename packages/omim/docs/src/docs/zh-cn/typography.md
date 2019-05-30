## Typography 

Material Design的文字大小和样式是为了在典型的使用条件下平衡内容密度和阅读舒适度而开发的。

MDC Typography是一个基础模块，它将这些样式应用于MDC Web组件。 此模块中的排版样式源自十三种样式：

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

## 使用

```js
import * as css from '@omim/core/typography'

console.log(css)
```

输出:

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