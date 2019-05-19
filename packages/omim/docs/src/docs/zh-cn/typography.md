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

## Usage

```html
<script src="../js/typography.js"></script>
<script>
  var style = document.createElement('style')
  style.textContent = MTypography.css
  document.querySelector('head').append(style)
</script>
```
