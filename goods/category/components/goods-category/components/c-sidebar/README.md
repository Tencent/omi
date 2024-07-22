# Sidebar 侧边导航

### 引入

全局引入，在miniprogram根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
// app.json 或 index.json
"usingComponents": {
  "wr-sidebar": "path/to/components/goods-category/wr-sidebar/index",
  "wr-sidebar-item": "path/to/component/goods-category/wr-sidebar/wr-sidebar-item/index"
}
```

## 代码演示

### 基础用法

通过在`wr-sidebar`上设置`activeKey`属性来控制选中项

```html
<wr-sidebar active-key="{{ activeKey }}" bind:change="onChange">
  <wr-sidebar-item title="标签名称" />
  <wr-sidebar-item title="标签名称" />
  <wr-sidebar-item title="标签名称" />
</wr-sidebar>
```

``` javascript
Page({
  data: {
    activeKey: 0
  },

  onChange(event) {
    wx.showToast({
      icon: 'none',
      title: `切换至第${event.detail}项`
    });
  }
});
```

### 提示气泡（暂未实现）

设置`dot`属性后，会在右上角展示一个小红点。设置`info`属性后，会在右上角展示相应的徽标

```html
<wr-sidebar active-key="{{ activeKey }}">
  <wr-sidebar-item title="标签名称" dot />
  <wr-sidebar-item title="标签名称" info="5" />
  <wr-sidebar-item title="标签名称" info="99+" />
</wr-sidebar>
```

## API

### Sidebar Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| activeKey | 选中项的索引 | *string \| number* | `0` | - |

### Sidebar Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换选项时触发 | 当前选中选项的索引 |

### Sidebar 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |

### SidebarItem Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| title | 内容 | *string* | `''` | - |
| disabled | 是否禁用 | | *boolean* | `false` | - |
| dot | 是否显示右上角小红点 | *boolean* | `false` | - |
| info | 提示消息 | *string \| number* | `''` | - |

### SidebarItem Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击徽章时触发 | 当前徽章的索引 |

### SidebarItem 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
