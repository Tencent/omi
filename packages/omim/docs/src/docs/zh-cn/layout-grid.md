## Layout Grid

材料设计的响应用户界面基于列变量网格布局。它在桌面上有12列，在平板电脑上有8列，在电话上有4列。


## 使用 

```js
import * as css from '@omim/core/layout-grid'
```

在 HTML 中使用对应的 class:

```html
<div>
    <h3 class="mdc-typography--subtitle1">Columns</h3>
    <div class="mdc-layout-grid demo-grid">
        <div class="mdc-layout-grid__inner">
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 demo-cell"></div>
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 demo-cell"></div>
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2 demo-cell"></div>
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1 demo-cell"></div>
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 demo-cell"></div>
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1 demo-cell"></div>
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 demo-cell"></div>
        </div>
    </div>
    <h3 class="mdc-typography--subtitle1">Grid Left Alignment</h3>
    <p class="mdc-typography--body2">This requires a max-width on the top-level grid element.</p>
    <div class="mdc-layout-grid mdc-layout-grid--align-left demo-grid demo-grid--alignment">
        <div class="mdc-layout-grid__inner">
            <div class="mdc-layout-grid__cell demo-cell"></div>
            <div class="mdc-layout-grid__cell demo-cell"></div>
            <div class="mdc-layout-grid__cell demo-cell"></div>
        </div>
    </div>
    <h3 class="mdc-typography--subtitle1">Right Alignment</h3>
    <p class="mdc-typography--body2">This requires a max-width on the top-level grid element.</p>
    <div class="mdc-layout-grid mdc-layout-grid--align-right demo-grid demo-grid--alignment">
        <div class="mdc-layout-grid__inner">
            <div class="mdc-layout-grid__cell demo-cell"></div>
            <div class="mdc-layout-grid__cell demo-cell"></div>
            <div class="mdc-layout-grid__cell demo-cell"></div>
        </div>
    </div>
    <h3 class="mdc-typography--subtitle1">Cell Alignment</h3>
    <p class="mdc-typography--body2">Cell alignment requires a cell height smaller than the inner height of the
        grid.</p>
    <div class="mdc-layout-grid demo-grid demo-grid--cell-alignment">
        <div class="mdc-layout-grid__inner demo-inner">
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-top demo-cell demo-cell--alignment"></div>
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-middle demo-cell demo-cell--alignment"></div>
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-bottom demo-cell demo-cell--alignment"></div>
        </div>
    </div>
</div>
```