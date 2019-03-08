## Icon 

SVG 制作的 Icon.

## 使用

```js
<o-icon 
  path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'>
</o-icon>
```

也可以支持多 path：

```js
<o-icon paths={[{
  color: '#F98080',
  path: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
}, {
  color: '#F95050',
  path: 'M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'
}]} />
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| paths  | json array |--  | 传入 paths ， path 不用传入  |
| path  | string|--  ||
| scale | number   |   2 | |
| color | string| black ||
| rotate | bool| false ||
| isFill | bool| false |不推荐，建议用 path|
| type  | string| -- | 不推荐，建议用 path |

* [→ 你可以直接使用 antd 的海量 svg path 作为 icon 的 path](https://ant.design/components/icon-cn/),你可以通过开发者工具查看对应 icon 的 path
* [→ 也可以直接上 antd github 获取 svg path](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons/svg)

