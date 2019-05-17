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

```html
<script src="../js/typography.js"></script>
<script>
  var style = document.createElement('style')
  style.textContent = MTypography.css
  document.querySelector('head').append(style)
</script>
```