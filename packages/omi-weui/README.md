# omi-weui

> weui for Omi

这里是 weui 开发版本，会整体重构

src 为组件源码 site 为线上demo

开发
```shell
yarn dev
```

后编译配置通过 babel-loader 的 include 选项

```javascript
{
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
		resolve('node_modules/omi-weui'),
	]
},
```

按需引入需要安装 `babel-plugin-transform-modules`, 并配置如下：
```JavaScript
"plugins": [
  ["transform-modules", {
	 "omi-weui": {
	   "transform": "omi-weui/src/components/${member}",
	   "preventFullImport": true,
	   "kebabCase": true
	 }
  }]
]
```
### P.S.
由于 web-components 机制的原因，导致 css 丧失了复用的能力，覆盖样式建议直接修改源码