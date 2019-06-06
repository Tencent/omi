## Top App Bar

Top App Bar充当应用程序标题，导航图标和操作项等项目的容器。

## 使用

方法1：

```html
<m-top-app-bar adjust dense fixed
  heading='Omim'
  navigations="['favorite']"
  action-items="[{text: 'Omim'}, 'favorite_border', 'favorite_border']"
></m-top-app-bar>
```

方法2 (导航按钮自定义任意元素)：

```html
<m-top-app-bar
  heading='Click to view all menus'
  adjust>
  <navigation>
    <m-avatar icon="person" background-color='#FFF' color='#0072d9' />
  </navigation>
  <actionitem>
    <m-badge css="..." content="99">
      <m-icon path="..." color="#FFF" />
    </m-badge>
  </actionitem>
  <div style='width:100%'>
    <m-tab css={`.mdc-tab-bar {background: #EEE;}`} default-active='speed' align="end" stacked>
      <item label="Recents" value="speed" icon="access_time"></item>
      <item label="Nearby" value="fire" icon="near_me"></item>
      <item label="Favorites" value="lol" icon="favorite"></item>
    </m-tab>
  </div>
</m-top-app-bar>
```

## Omi 中使用

JSX:

方法1：

```jsx
<m-top-app-bar adjust dense fixed
  heading='Omim'
  navigations={['favorite']}
  action-items={[{text: 'Omim'}, 'favorite_border', 'favorite_border']}
  onNavigation={this.onMenu}
  onAction={this.onMenu}
/>
```

方法2 (导航按钮自定义任意元素)：

```jsx
<m-top-app-bar
  heading={'Click to show menus' + this.titleOmi}
  scroll-target={this.scrollTarget}
  onNavigation={this.onDemoStart}
  onAction={this.onMenuStart}>
  <navigation>
    <m-avatar icon="person" backgroundColor='#FFF' color={this.themeColor} />
  </navigation>
  <actionitem>
    <m-badge css={`...`} content="99">
      <m-icon path="..." color="#FFF" />
    </m-badge>
  </actionitem>
</m-top-app-bar>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| heading | string | -- | 标题内容 |
| short | boolean | -- | 带有缩短动动画 |
| shortCollapsed | boolean | -- | 固定为缩短状态 |
| prominent | boolean | -- | 突出显示标题 |
| dense | boolean | -- | 更紧凑的顶部应用栏 |
| fixed | boolean | -- | 固定顶部应用栏 |
| adjust | boolean | -- | 自动填充顶部应用栏高度 |
| bottom | boolean | -- | 底部应用栏 |
| navigations | object | -- | 左侧导航按钮 |
| actionItems | object | -- | 右侧按钮 |
| scrollTarget | EventTarget | window | 设置目标滚动条(JSX 使用) |
| scrollTargetId | string | window | 设置目标滚动条(原生 js 使用) |
| onNavigation | function | -- | 单击左侧导航栏触发 |
| onAction | function | -- | 单击右侧按钮触发 |
