# Omi Element UI

> Omi version of element-ui

## Contribute

* Updtate the readme and pull request to claim elements to be developed.
* Create the element directory in the [omi-element-ui](https://github.com/Tencent/omi/tree/master/packages/omi-element-ui/src/omi-element-ui) and finish it then pull request.

| Element | Owner  |Usage  |
| ------ | ------  |------  |
| ~~el-button~~ | 	dntzhang	  |[Usage](https://github.com/Tencent/omi/blob/master/packages/omi-element-ui/src/elements/button/index.js#L19-L118) |
| ~~el-icon~~ | 	dntzhang	  | |
|  ~~el-radio~~| 	dntzhang	  | [Usage](https://github.com/Tencent/omi/blob/master/packages/omi-element-ui/src/elements/radio/index.js#L19-L34)|
|  el-checkbox| 		  | |
|  el-input| 		  | |
|  ~~el-input-number~~| 	dntzhang	  | [Usage](https://github.com/Tencent/omi/blob/master/packages/omi-element-ui/src/elements/input-number/index.js#L18-L22) |
|  el-select| 		  |
|  el-cascader| 		  |
|  el-switch| 		  |
|  el-slider| 		  |
|  el-time-select| 		  |
|  el-date-picker| 		  |
|  el-upload| 		  |
|  el-rate| 	@wadellg	  |
|  el-color-picker| 		  |
|  el-transfer| 		  |
|  el-form| 		  |
|  el-table| 		  |
|  el-tag| 		  |
|  el-progress| 		  |
|  el-tree| 		  |
|  el-pagination| 		  |
|  el-badge| 		  |
|  el-alert| 		  |
|  el-menu| 		  |
|  el-tabs| 		  |
|  el-breadcrumb| 		@wadellg  | 
|  el-dropdown| 		  |
|  el-steps| 		  |
|  el-dialog| 		  |
|  el-tooltip| 		  |
|  el-popover| 		  |
|  el-card| 	@wadellg	  |
|  el-carousel| 		  |
|  el-collapse| 		  |
|  el-touch| 		dntzhang  |
|  el-finger| 		  dntzhang|
|  el-transform| 		 dntzhang |
|  notice| 		  |   |

## Develop

``` bash
npm install
npm start
```

## Element UI Docs

* [English Docs](http://element-cn.eleme.io/#/en-US/component/)
* [中文文档](https://element.eleme.io/#/zh-CN/component/)

## Different with element-ui 

Put the icon to the right:

Omi：

```js
 <el-button type="primary" icon="el-icon-upload" icon-right>上传</el-button>
```

Element:

```js
<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
```
